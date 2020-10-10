var default_conf = {
    net_type: 0,
    ip: 'N/A',
    ssid: 'N/A',
}

var up = 0,
    down = 0

function data() {
    let conf = default_conf
    conf = getNetwork(conf)
    return conf
}
/**
 * 获取设备网络类型
 */
function getNetwork(conf) {
    conf.net_type = $device.networkType
    if (conf.net_type == 0) {
        return
    }

    if (conf.net_type == 1) {
        conf.ssid = $device.ssid.SSID
        conf.ip = getInterface(conf.net_type)
    } else {
        conf.ssid = default_conf.ssid
    }

    return conf
}

/**
 * 获取网络接口
 */
function getInterface(type) {
    var interfaces = $network.interfaces;
    switch (type) {
        case 1:
            interfaces = interfaces['en0/ipv4']
            break;
        case 2:
            interfaces = interfaces['lo0/ipv4']
            break;
        default:
            interfaces = 'N/A'
    }

    return interfaces
}


module.exports = {
    data: data
}