import router from '@/router'
import store from '@/store'
import cache from '@/utils/cache'

// 全局路由登录验证，权限验证
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.login)) { // 是否需要登录
        if (cache.getToken()) {
            if (to.path === '/login') {
                next('/')   
            } else {
                if (store.state.user) {
                      assessPermission(store.state.user.role, to.meta.role)
                } else {
                    store.dispatch('get_user_data').then(res => {
                        assessPermission(res.role, to.meta.role)
                    })
                    .catch(err => {
                        // 可根据错误信息，做相应需求，这里默认token值失效
                        // window.alert('登录已失效，请重新登录')
                        this.$message.error('登录已失效，请重新登录');
                        goLoginPage()
                    })
                }
            }
        } else {
            goLoginPage()
        }
    } else {
        next()
   }
    function goLoginPage() {
        next({ path: '/login', query: { redirect: to.fullPath } })
    }
    function assessPermission(userRole, pageRole) {
        let pass = false
        // 页面无需权限 || 用户是管理员
        if (!pageRole || userRole.indexOf('admin') > -1) pass = true
        // 符合页面的其中一种权限（支持String和Array写法）
        if (typeof pageRole === 'string') {
            if (userRole.indexOf(pageRole) > -1) pass = true
        } else if (Array.isArray(pageRole)) {
            if (pageRole.some(role => userRole.indexOf(role) > -1)) pass = true
        }
        pass ? next() : next('/401')
    }
  })

// 异步路由
// function filterAsyncRoutes(AsyncRoutes, userRole, next) {
//     let assessAsyncRoutes = AsyncRoutes.filter(route => {
//         if (route.children) {
//             route.children = filterAsyncRoutes(route.children, userRole)
//         }
//         if (route.meta) {
//             let pass = false
//             let pageRole = route.meta.role
//             // 页面无需权限 || 用户是管理员
//             if (!pageRole || userRole.indexOf('admin') > -1) pass = true
//             // 符合页面的其中一种权限（支持String和Array写法）
//             if (typeof pageRole === 'string') {
//                 if (userRole.indexOf(pageRole) > -1) pass = true
//             } else if (Array.isArray(pageRole)) {
//                 if (pageRole.some(role => userRole.indexOf(role) > -1)) pass = true
//             }
//             return pass
//         } else {
//             return true
//         }
//     })
//     router.addRoutes(assessAsyncRoutes)
//     next()
// }