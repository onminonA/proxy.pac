// Testing PAC file

function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxyServer = "HTTP 127.0.0.1:1080; SOCKS5 127.0.0.1:1080; PROXY 127.0.0.1:1080; DIRECT";

    var directDomains = [
        "2gis.com",
        "4pda.to",
        "4pda.ws",
        "adhigh.net",
        "aestatic.net",
        "aftershock.news",
        "al-adtech.com",
        "alfabank.st",
        "alibaba.com",
        "alicdn.com",
        "aliexpress-media.com",
        "aliexpress.com",
        ".am", // .am
        "aviasales.com",
        "avito.st",
        "avs.io",
        "betweendigital.com",
        "bitrix.info",
        "boosty.to",
        "buzzoola.com",
        ".by", // .by
        "cian.site",
        ".cn", // .cn
        "diginetica.net",
        "dodois.io",
        "dodostatic.net",
        "drweb.com",
        "flomni.com",
        "gdz.work",
        "gismeteo.net",
        "gismeteo.st",
        "group-ib.com",
        "ixbt.com",
        "ixbt.online",
        "ixbt.site",
        "kaspersky.com",
        "knigavuhe.org",
        "kp.house",
        "kpcdn.net",
        "krut.link",
        ".kg", // .kg
        ".kp", // .kp
        ".kz", // .kz
        "livejournal.com",
        "livejournal.net",
        ".md", // .md
        "megamarket.tech",
        "mmstat.com",
        ".moscow", // .moscow
        "mradx.net",
        "mvk.com",
        "mycdn.me",
        "naydex.net",
        "ozonusercontent.com",
        "r-99.com",
        ".ru", // .ru
        ".ru.com", // .ru.com
        ".ru.net", // .ru.net
        "sberbank.com",
        "skcrtxr.com",
        "smi2.net",
        ".su", // .su
        "taobao.com",
        "targetads.io",
        ".tatar", // .tatar
        "terratraf.com",
        ".tj", // .tj
        ".tm", // .tm
        "tsargrad.tv",
        "trbcdn.net",
        "trex.media",
        "turbopages.org",
        "uma.media",
        "userapi.com",
        "viqeo.tv",
        "vk.cc",
        "vk.com",
        "vk-cdn.me",
        "vk-cdn.net",
        "vk-portal.net",
        "vkuser.net",
        "webvisor.org",
        "yadi.sk",
        "yandex.net",
        "yandexcloud.net",
        "yaplakal.com",
        "yastatic.net",
        ".xn--55qx5d", // .公司
        ".xn--80adxhks", // .москва
        ".xn--fiqs8s", // .中国
        ".xn--fiqz9s", // .中國
        ".xn--io0a7i", // .网络
        ".xn--p1acf", // .рус
        ".xn--p1ai" // .рф
    ];

    for (var i = 0; i < directDomains.length; i++) {
        if (dnsDomainIs(host, directDomains[i])) {
            return "DIRECT";
        }
    }

    return proxyServer;
}
