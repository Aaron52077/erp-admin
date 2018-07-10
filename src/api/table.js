import { request, instance } from '@/utils/request'

export function fetchList(query) {
    let res = request('/customer/list', 'get', query)
    return res
}

export function fetchPv(pv) {
    let res = request('/login', 'get', { pv })
    return res
}

export function createArticle(data) {
    let res = request('/customer/create', 'POST', data)
    return res
}

export function updateArticle(data) {
    let res = request('/customer/update', 'POST', data)
    return res
}

// 图片
export async function getPicture({ key, page }) {
    let res = await instance.get('http://api.toutiaojk.com/e/extend/jkh/picsearch', { params: { key, page } })
    return res.data
}