// Testing PAC file

function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxyServer = "HTTP 127.0.0.1:1080; SOCKS5 127.0.0.1:1080; PROXY 127.0.0.1:1080; DIRECT";

    var directDomains = [
        ".ru",
        ".su",
        ".xn--p1ai", // .рф
        ".kz",
        ".ru.com",
        ".xn--p1acf", // .рус
        ".am",
        ".ru.net",
        ".moscow",
        ".xn--80adxhks", // .москва
        ".tatar",
        ".md",
        ".tj",
        ".tm"
    ];

    for (var i = 0; i < directDomains.length; i++) {
        if (dnsDomainIs(host, directDomains[i])) {
            return "DIRECT";
        }
    }

    return proxyServer;
}
