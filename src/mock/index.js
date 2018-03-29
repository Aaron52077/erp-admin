/* eslint-disable */
import Mock from 'mockjs'
import articleAPI from './customer'

// 登录相关
Mock.mock(/\/login/, {
    'token': Mock.Random.guid()
})
// 用户信息
Mock.mock(/\/user\/info\.*/, {
    code: 200,
    msg: 'success',
    data: {
        nickname: '超哥哥',
        headimgurl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        role: '0'
    }
})

// 文章相关
Mock.mock(/\/customer\/list/, 'get', articleAPI.getList)
Mock.mock(/\/customer\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/customer\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/customer\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/customer\/update/, 'post', articleAPI.updateArticle)

export default Mock