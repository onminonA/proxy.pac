// Testing PAC file

function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxyServer = "HTTP 127.0.0.1:1080; SOCKS5 127.0.0.1:1080; PROXY 127.0.0.1:1080; DIRECT";

    var directDomains = [
        ".am",
        ".cn",
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
        ".xn--p1ai" // .рф
    ];

    for (var i = 0; i < directDomains.length; i++) {
        if (dnsDomainIs(host, directDomains[i])) {
            return "DIRECT";
        }
    }

    return proxyServer;
}
