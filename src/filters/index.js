// 格式化时间
export function formatTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }

    if ((time + '').length === 10) {
        time = +time * 1000
    }

    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        date = new Date(parseInt(time))
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const timer = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return timer
}

// 过滤时间差
export function getDiffTime(time) {
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000
    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) { // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    } else {
        return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
    }
}

//  过滤上万数据
export function toThousand(num) {
    return num >= 10000 ? (num / 10000).toFixed(1) + '万' : num
}

// 过滤千分符
export function toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// 时间数字转字符
export function getTimeStr(time) {
    let result = "";
    if (+time >= 0) {
        const h = parseInt(parseInt(time) / 3600);
        const m = parseInt(parseInt(parseInt(time) - h * 3600) / 60);
        result = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
    }
    return result
}

// 时间字符转数字
function getTimeInt(time) {
    if (time) {
        const timeArr = time.split(':');
        return (parseInt(timeArr[0]) || 0) * 3600 + (parseInt(timeArr[1]) || 0) * 60
    }
}

// 格式化文件大小
export function renderFileSize(size) {
    if (!size) {
        return '0B'
    }
    if (size > 999999) {
        return parseInt(input / 1000000) + 'MB'
    }
    if (size > 999) {
        return parseInt(input / 1000) + 'KB'
    }
    if (size < 1000) {
        return `${size}B`
    }
    return size
}

// unix时间格式化
function unixToStr(value, strings) {
    let val = `${value}`;
    val = val.replace(/@1/g, '');
    val = val.replace(/@2/g, '');
    // 'yyyy-MM-dd hh:mm'
    strings = strings || '{y}-{m}-{d} {h}:{i}:{s}';
    const intVal = (val.length < 12 ? parseInt(val) * 1000 : parseInt(val)) || 0;
    return formatTime(new Date(intVal), strings);
}

// days: 几天前
function getTodayBefore(days) {
    const timeStamp = new Date(new Date().setHours(12, 0, 0, 0));
    return unixToStr(timeStamp - 86400000 * days, '{y}-{m}-{d}');
}

// 毫秒转小时
function SecToHours(val) {
    const t = getTimeStr(val).split(':')
    const m = parseInt(t[0]) + (parseFloat((parseInt(t[1]) / 60).toFixed(1)) || '');
    return parseFloat(m) || 0
}

// 计算时长
function getTimeLength(val, offset) {
    const arr = (`${val}`).split(',');
    let val1 = parseInt(arr[0]) || 0,
        val2 = parseInt(arr[1]) || 0;
    let result = (val1 > 0 && val2 > val1 ? (val2 - val1) : 0) + (offset || 0);
    let hours = SecToHours(result);
    let days = parseFloat((hours / 24).toFixed(1)) || 0;
    return { hours: hours, days: days }
}

// 小写金额转大写
function moneyFormat(num) {
    if (isNaN(num)) return '';
    var strPrefix = '';
    if (num < 0) strPrefix = '(负)';
    num = Math.abs(num);
    if (num >= 1000000000000) return '';
    var strOutput = '';
    var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
    var strCapDgt = '零壹贰叁肆伍陆柒捌玖';
    num += "00";
    var intPos = num.indexOf('.');
    if (intPos >= 0) {
        num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
    }
    strUnit = strUnit.substr(strUnit.length - num.length);
    for (let i = 0, len = num.length; i < len; i++) {
        strOutput += strCapDgt.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
    }
    return strPrefix + strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, '零元')
}