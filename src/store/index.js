import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin, getUser } from '@/api'
import cache from '@/utils/cache'
// 加载模块包
// import app from './modules/app'

Vue.use(Vuex)

const state = {
    datas: {},
    user: '',               // 用户信息
    logs: [],               // 错误日志
    theme: '#42B983',        // 主题颜色
    sidebar: {
        opened: true
    }
}

const getters = {
    token: state => state.user.token,
    role: state => state.user.role,
    name: state => state.user.name,
    sidebar: state => state.sidebar 
}

const mutations = {
    setData(state, data) {
        state.datas = data
    },
    login_out(state) {
        state.user = ''
        cache.removeToken()
    },
    set_user(state, val) {
        state.user = val
    },
    set_role(state, val) {  // 角色 是否为超级管理员
        state.user.role = val
    },
    set_logs(state, val) {
        state.logs.push(val)
    },
    set_theme(state, val) {
        state.theme = val
    },
    toggle_sidebar: state => {
        state.sidebar.opened = !state.sidebar.opened
    }
}

const actions = {
    setData({ commit }, data) {
        commit('setData', data)
    },
    // 获取登录数据
    get_login_data({ commit }, params) {
        return new Promise((resolve, reject) => { 
            getLogin(params).then(res => {
                if (res && res.token) {
                    cache.setToken(res.token)
                    commit('set_role', res.data)
                    resolve(res) 
                } else {
                    reject(new Error('暂无登录数据！'))
                }   
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 获取用户数据
    get_user_data({ commit }, token) {
        return new Promise((resolve, reject) => {
            getUser(token).then(res => {
                if (res && res.code === 200 && res.data) {
                    commit('set_user', res.data)
                    resolve(res.data)
                } else {
                    reject(new Error('nothing user data'))
                }
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    ToggleSideBar: ({ commit }) => {
        commit('toggle_sidebar')
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    // modules: {   // 注册模块包
    //     app
    // }
})
