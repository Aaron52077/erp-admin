// 模块例子
const app = {
    state: {
        datas: {}
    },
    mutations: {
        setData(state, data) {
            state.datas = data
        }
    },
    actions: {
        setData(store, data) {
            const {commit} = store
            commit('setData', data)
        },
    }
}

export default app
