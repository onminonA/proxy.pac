// Testing PAC file

function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxyServer = "HTTP 127.0.0.1:1080; SOCKS5 127.0.0.1:1080; PROXY 127.0.0.1:1080; DIRECT";

    var directDomains = [
        ".am",
        ".az",
        ".by",
        ".cn",
        ".ge",
        ".ir",
        ".kg",
        ".kp",
        ".kz",
        ".md",
        ".mn",
        ".moscow",
        ".ru",
        ".ru.com",
        ".ru.net",
        ".su",
        ".tatar",
        ".tj",
        ".tm",
        ".uz",
        ".xn--55qx5d", // .公司
        ".xn--80adxhks", // .москва
        ".xn--d1acj3b", // .дети
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
        "adlook.tech",
        "adsmediator.com",
        "advertronic.io",
        "advscdn.com",
        "aestatic.net",
        "aftershock.news",
        "aio.media",
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
        "cackle.me",
        "championat.com",
        "cian.site",
        "corr.life",
        "criteo.net",
        "diginetica.net",
        "dodois.io",
        "dodostatic.net",
        "drweb.com",
        "fishki.net",
        "flashb.id",
        "flomni.com",
        "fotocdn.net",
        "gdz.work",
        "gismeteo.net",
        "gismeteo.st",
        "group-ib.com",
        "hibiny.com",
        "hotjar.com",
        "irxybq.com",
        "ixbt.com",
        "ixbt.online",
        "ixbt.site",
        "kaspersky.com",
        "kinoafisha.info",
        "knigavuhe.org",
        "kp.house",
        "kpcdn.net",
        "krut.link",
        "lentainform.com",
        "livejournal.com",
        "livejournal.net",
        "luxcdn.com",
        "luxupnetwork.com",
        "megamarket.tech",
        "mmstat.com",
        "moe.video",
        "mradx.net",
        "mvk.com",
        "mycdn.me",
        "naydex.net",
        "nsn-azert.xyz",
        "ozonusercontent.com",
        "panda.video",
        "pingdom.net",
        "politnavigator.net",
        "pravdafrance.com",
        "primamedia.company",
        "push4site.com",
        "push.world",
        "r-99.com",
        "ren.tv",
        "rt.com",
        "rteam.tech",
        "russiatoday.com",
        "sberbank.com",
        "setka.news",
        "skcrtxr.com",
        "smi.today",
        "smi2.net",
        "smi2.tech",
        "taobao.com",
        "targetads.io",
        "tds.bid",
        "terratraf.com",
        "tolstoycomments.com",
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
        "vringe.com",
        "webvisor.org",
        "wonderpush.com",
        "wwqjof.com",
        "yadi.sk",
        "yandex.net",
        "yandexcloud.net",
        "yaplakal.com",
        "yastatic.net"
    ];

    var proxyDomains = [
        "bestchange.ru",
        "intel.ru",
        "lordfilm.ru",
        "moscowtimes.ru",
        "novayagazeta.ru",
        "zaycev-net.ru"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        if (host === proxyDomains[i] || dnsDomainIs(host, "." + proxyDomains[i])) {
            return proxyServer;
        }
    }

    for (var i = 0; i < directDomains.length; i++) {
        if (dnsDomainIs(host, directDomains[i])) {
            return "DIRECT";
        }
    }

    return proxyServer;
}
