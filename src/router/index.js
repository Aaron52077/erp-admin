import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = require('./_import_' + process.env.NODE_ENV)
/* Layout */
const view = () => import('@/views/layout/view')

export const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: '首页',
        path: '/index',
        redirect: 'index/home/crm/b',
        meta: { login: true },
        component: _import('layout/index'),
        children: [
            {
                name: '营销',
                path: 'home',
                icon: 'i-icon-formdata',
                component: view,
                children: [
                    {
                        name: 'CRM',
                        path: 'crm',
                        icon: 'i-icon-dashboard',
                        component: view,
                        children: [
                            {
                                name: '统计分析',
                                path: 'b',
                                icon: 'i-icon-echart',
                                component: _import('home/index'),
                            },
                            {
                                name: '客户管理',
                                path: 'a',
                                icon: 'i-icon-table',
                                component: _import('table/index')
                            }
                        ]
                    },
                    {
                        name: '公司相关',
                        path: 'plugins',
                        icon: 'i-icon-product',
                        component: view,
                        children: [
                            {
                                name: '公司介绍',
                                path: 'a',
                                icon: 'i-icon-home',
                                component: _import('aside/index')
                            },
                            {
                                name: '设计团队',
                                path: 'b',
                                icon: 'i-icon-peoples',
                                component: _import('form/form')
                            }
                        ]
                    }
                ]
            },
            {
                name: '客户',
                path: 'customer',
                icon: 'i-icon-people',
                component: view,
                children: [
                    {
                        name: '用户管理',
                        path: 'a',
                        icon: 'i-icon-home',
                        component: _import('loadmore/index')
                    },
                    {
                        name: '客户相关',
                        path: 'b',
                        icon: 'i-icon-peoples',
                        component: _import('ball/index')
                    }
                ]
            },
            {
                name: '设计',
                path: 'electric',
                icon: 'i-icon-edit',
                component: view,
                children: [
                    {
                        name: '设计人员',
                        path: 'a',
                        icon: 'i-icon-home',
                        component: _import('table/index')
                    }
                ]
            },
            {
                name: '合同',
                path: 'sms',
                component: view,
                children: [
                    {
                        name: '合同标题',
                        path: 'a',
                        icon: 'i-icon-home',
                        component: _import('table/index')
                    }
                ]
            },
            {
                name: '工程',
                path: 'project',
                component: view,
                children: [
                    {
                        name: '工程标题',
                        path: 'a',
                        icon: 'i-icon-home',
                        component: _import('update/index')
                    }
                ]
            },
            {
                name: '材料',
                path: 'material',
                component: view,
                children: [
                    {
                        name: '材料标题',
                        path: 'a',
                        icon: 'i-icon-home',
                        component: _import('update/index')
                    }
                ]
            },
            {
                name: '成控',
                path: 'control',
                component: view,
                children: [
                    {
                        name: '成控标题',
                        path: 'a',
                        icon: 'i-icon-home',
                        component: _import('update/index')
                    }
                ]
            },
            {
                name: '报表',
                path: 'excel',
                component: view,
                children: [
                    {
                        name: '报表标题',
                        path: 'a',
                        icon: 'i-icon-home',
                        component: _import('update/index')
                    }
                ]
            },
            {
                name: '设置',
                path: 'setup',
                component: view,
                children: [
                    {
                        name: '设置标题',
                        path: 'a',
                        icon: 'i-icon-home',
                        component: _import('study/index')
                    }
                ]
            }         
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: _import('login/index')
    },
    { 
        path: '/404', 
        component: _import('404/404')
    },
    { 
        path: '*', 
        redirect: '/404'
    }
]

export default new Router({
    mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})

