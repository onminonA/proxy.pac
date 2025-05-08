// Testing PAC file

function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxyServer = "HTTP 127.0.0.1:1080; SOCKS5 127.0.0.1:1080; PROXY 127.0.0.1:1080; DIRECT";

    var directDomains = [
        ".am",
        ".by",
        ".cn",
        ".kg",
        ".kp",
        ".kz",
        ".md",
        ".moscow",
        ".ru",
        ".ru.com",
        ".ru.net",
        ".su",
        ".tatar",
        ".tj",
        ".tm",
        ".xn--55qx5d", // .公司
        ".xn--80adxhks", // .москва
        ".xn--fiqs8s", // .中国
        ".xn--fiqz9s", // .中國
        ".xn--io0a7i", // .网络
        ".xn--p1acf", // .рус
        ".xn—p1ai", // .рф
        "2gis.com",
        "4pda.to",
        "4pda.ws",
        "24smi.net",
        "adhigh.net",
        "advertronic.io",
        "aestatic.net",
        "aftershock.news",
        "al-adtech.com",
        "alfabank.st",
        "alibaba.com",
        "alicdn.com",
        "aliexpress-media.com",
        "aliexpress.com",
        "aviasales.com",
        "avito.st",
        "avs.io",
        "betweendigital.com",
        "bitrix.info",
        "boosty.to",
        "buzzoola.com",
        "championat.com",
        "cian.site",
        "corr.life",
        "criteo.net",
        "diginetica.net",
        "dodois.io",
        "dodostatic.net",
        "drweb.com",
        "flomni.com",
        "gdz.work",
        "gismeteo.net",
        "gismeteo.st",
        "group-ib.com",
        "hibiny.com",
        "img.smi2.net",
        "ixbt.com",
        "ixbt.online",
        "ixbt.site",
        "kaspersky.com",
        "knigavuhe.org",
        "kp.house",
        "kpcdn.net",
        "krut.link",
        "lentainform.com",
        "livejournal.com",
        "livejournal.net",
        "megamarket.tech",
        "mmstat.com",
        "mradx.net",
        "mvk.com",
        "mycdn.me",
        "naydex.net",
        "ozonusercontent.com",
        "panda.video",
        "pingdom.net",
        "primamedia.company",
        "push4site.com",
        "r-99.com",
        "rt.com",
        "rteam.tech",
        "russiatoday.com",
        "sberbank.com",
        "setka.news",
        "skcrtxr.com",
        "smi2.net",
        "smi2.tech",
        "taobao.com",
        "targetads.io",
        "terratraf.com",
        "trbcdn.net",
        "trex.media",
        "tsargrad.tv",
        "turbopages.org",
        "uma.media",
        "ura.news",
        "userapi.com",
        "viqeo.tv",
        "vk-cdn.me",
        "vk-cdn.net",
        "vk-portal.net",
        "vk.cc",
        "vk.com",
        "vkuser.net",
        "webvisor.org",
        "yadi.sk",
        "yandex.net",
        "yandexcloud.net",
        "yaplakal.com",
        "yastatic.net"
    ];

    for (var i = 0; i < directDomains.length; i++) {
        if (dnsDomainIs(host, directDomains[i])) {
            return "DIRECT";
        }
    }

    return proxyServer;
}
