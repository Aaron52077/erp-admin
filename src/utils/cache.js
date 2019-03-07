import Cookies from 'js-cookie'

const TokenKey = 'token'

export default {
    getToken() {
        return Cookies.get(TokenKey)
    },
    setToken(token) {
        return Cookies.set(TokenKey, token, { expires: 7 })  //  expires 为存储time，单位 天
    },
    removeToken() {
        return Cookies.remove(TokenKey)
    },
    getCookie(name) {
        var arrStr = document.cookie.split(";");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0].trim() == name) return unescape(temp[1]);
        }
    },
    delCookie(name) {
        document.cookie = name + "=;expires=" + (new Date(0)).toGMTString();
    },
    setCookie(name, value, days) {
        var Days = days || 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
    },
    getSession(name) {
        if (!name) return
        return window.sessionStorage.getItem(name)
    },
    setSession(name, content) {
        if (!name) return
        if (typeof content !== 'string') {
            content = JSON.stringify(content)
        }
        window.sessionStorage.setItem(name, content)
    },
    removeSession(name) {
        if (!name) return
        window.sessionStorage.removeItem(name)
    },
    getLocal(name) {
        if (!name) return
        return window.localStorage.getItem(name)
    },
    setLocal(name, content) {
        if (!name) return
        if (typeof content !== 'string') {
            content = JSON.stringify(content)
        }
        window.localStorage.setItem(name, content)
    },
    removeLocal(name) {
        if (!name) return
        window.localStorage.removeItem(name)
    }
}
