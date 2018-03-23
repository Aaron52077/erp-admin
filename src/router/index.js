import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

// layout
// view组件是用在多层嵌套但依然想渲染在主页面的page视图下的场景
const view = () => import('@/layout/view')

Vue.use(Router)

/*
* @params
* icon: ''                      菜单图标（可以用element-ui的icon & iconfont）
* open: false                   是否展开菜单
* @meta
* login: false                  是否需要登录
* role: 'admin' || ['admin']    是否需要权限
* keep: false                   是否需要缓存
*/
export const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: '首页',
        path: '/index',
        redirect: 'index/home',
        meta: { login: true },
        component: _import('index'),
        children: [
            {
                name: '营销',
                path: 'home',
                icon: 'i-icon-formdata',
                component: _import('index/index'),
                children: [
                    {
                        name: 'CRM',
                        path: 'crm',
                        icon: 'i-icon-dashboard',
                        children: [
                            {
                                name: '客户管理',
                                path: 'sticky',
                                icon: 'i-icon-table',
                            },
                            {
                                name: '统计分析',
                                path: 'sticky',
                                icon: 'i-icon-echart',
                            }
                        ]
                    },
                    {
                        name: '网销神器',
                        path: 'breadcrumb',
                        icon: 'i-icon-product',
                        children: [
                            {
                                name: '公司介绍',
                                path: 'sticky',
                                icon: 'i-icon-home',
                            },
                            {
                                name: '设计团队',
                                path: 'sticky',
                                icon: 'i-icon-peoples',
                            }
                        ]
                    }
                ]
            },
            {
                name: '客户',
                path: 'customer',
                icon: 'i-icon-people',
                component: _import('example/index')
            },
            {
                name: '表单',
                path: 'form',
                icon: 'i-icon-edit',
                component: _import('example/form')
            },
            {
                name: '短信营销',
                path: 'sms',
                component: view
            }     
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: _import('login/index')
    }
]

export default new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            to.meta.position = savedPosition
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
