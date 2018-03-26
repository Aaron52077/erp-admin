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
        redirect: 'index/home',
        meta: { login: true },
        component: _import('layout/index'),
        children: [
            {
                name: '营销',
                path: 'home',
                icon: 'i-icon-formdata',
                component: _import('home/index'),
                children: [
                    {
                        name: 'CRM',
                        path: 'crm',
                        icon: 'i-icon-dashboard',
                        children: [
                            {
                                name: '客户管理',
                                path: 'a',
                                icon: 'i-icon-table',
                            },
                            {
                                name: '统计分析',
                                path: 'b',
                                icon: 'i-icon-echart',
                            }
                        ]
                    },
                    {
                        name: '网销神器',
                        path: 'plugins',
                        icon: 'i-icon-product',
                        children: [
                            {
                                name: '公司介绍',
                                path: 'a',
                                icon: 'i-icon-home',
                            },
                            {
                                name: '设计团队',
                                path: 'b',
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
                path: 'electric',
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
        component: _import('Fc/index')
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

