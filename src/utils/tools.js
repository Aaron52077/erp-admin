/* eslint-disable */
var tools = {
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
    setValue(key, value) {
        var curtime = new Date().getTime();
        window.localStorage.setItem(key, JSON.stringify({ val: value, time: curtime }));
    },
    getValue(key, exp) {
        var val = window.localStorage.getItem(key) || '{}';
        try {
            var dataobj = JSON.parse(val);
        } catch (e) {
            var dataobj = {}
        }
        if (parseInt(exp) >= 0 && (new Date().getTime() - dataobj.time > exp)) {
            return '';
        } else {
            return dataobj.val;
        }
    },
    delValue(key) {
        window.localStorage.removeItem(key);
    }
}

export default tools
