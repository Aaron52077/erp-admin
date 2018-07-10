import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        name: Mock.Random.cname(),  //随机产生一个中文的姓名
        names: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'), //随机生成一个地址
        timestamp: +Mock.Random.date('T'),
        title: Mock.Random.ctitle(),
        forecast: '@float(0, 100, 2, 2)',
        importance: '@integer(1, 3)',
        'type|1': ['自主开发', '自然到店', '工地回单', '广告推广', '其它来源', '蜂巢网', '网销部转入', '朋友介绍', '电话营销', '电话来源', '电视广告', '网络推广'],
        'rank|1': ['中意向', '高意向'],
        'status|1': ['合同客户', '见面客户', '意向客户'],
        'moblie|1': ['13531544954', '13632250649', '15820292420', '15999905612'], //在数组中随机找一个
        display_time: '@datetime',
        pageviews: '@integer(300, 5000)'
    }))
}

export default {
    getList: config => {
        const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)

        let mockList = List.filter(item => {
            if (importance && item.importance !== +importance) return false
            if (type && item.type !== type) return false
            if (title && item.title.indexOf(title) < 0) return false
            return true
        })

        if (sort === '-id') {
            mockList = mockList.reverse()
        }

        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

        return {
            total: mockList.length,
            items: pageList
        }
    },
    getPv: () => ({
        pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
    }),
    getArticle: () => ({
        id: 120000000001,
        author: { key: 'mockAaron' },
        source_name: '原创作者',
        category_item: [{ key: 'global', name: '全球' }],
        comment_disabled: true,
        content: '<p>我是测试数据我是测试数据</p><p><img class="wscnph" src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>"',
        content_short: '我是测试数据',
        display_time: +new Date(),
        image_uri: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
        platforms: ['a-platform'],
        status: 'published',
        tags: [],
        title: 'erp-admin'
    }),
    createArticle: () => ({
        data: 'success'
    }),
    updateArticle: () => ({
        data: 'success'
    })
}
