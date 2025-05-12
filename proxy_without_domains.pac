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
        ".ru.tm",
        ".ru.net",
        ".sbp",
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
        "2gis.com", "3utilities.com", "4pda.to", "4pda.ws", "24smi.net", "access.ly", "adhigh.net", "adlook.tech", "adsmediator.com", "advertronic.io", "advscdn.com", "aestatic.net", "aftershock.news", "aio.media", "alfabank.st",
        "alibaba.com", "alicdn.com", "aliexpress-media.com", "aliexpress.com", "at-band-camp.net", "ath.cx", "aviasales.com", "avito.st", "avs.io", "barrel-of-knowledge.info", "barrell-of-knowledge.info", "better-than.tv", "betweendigital.com",
        "bitrix.info", "blogdns.com", "blogdns.net", "blogdns.org", "blogsite.org", "blogsyte.com", "boldlygoingnowhere.org", "boosty.to", "bounceme.net", "brasilia.me", "broke-it.net", "buyshouses.net", "buzzoola.com", "cable-modem.org",
        "cackle.me", "cechire.com", "championat.com", "cian.site", "ciscofreak.com", "collegefan.org", "corr.life", "couchpotatofries.org", "criteo.net", "damnserver.com", "ddns.me", "ddns.net", "diginetica.net", "ditchyourip.com",
        "dnsalias.com", "dnsalias.net", "dnsdojo.com", "dnsdojo.net", "dnsdojo.org", "dnsfor.me", "dnsiskinky.com", "dodois.io", "dodostatic.net", "does-it.net", "doesntexist.com", "doesntexist.org", "dontexist.com", "dontexist.net",
        "dontexist.org", "doomdns.com", "doomdns.org", "drweb.com", "duckdns.org", "dvrcam.info", "dvrdns.org", "dyn-o-saur.com", "dynalias.com", "dynalias.org", "dynathome.net", "dyndns-at-home.com", "dyndns-at-work.com", "dyndns-blog.com",
        "dyndns-free.com", "dyndns-home.com", "dyndns-ip.com", "dyndns-mail.com", "dyndns-office.com", "dyndns-pics.com", "dyndns-server.com", "dyndns-web.com", "dyndns-wiki.com", "dyndns-work.com", "dyndns.biz", "dyndns.info", "dyndns.org",
        "dyndns.tv", "dyndns.ws", "eating-organic.net", "endofinternet.org", "est-a-la-maison.com", "est-le-patron.com", "est-mon-blogueur.com", "fantasyleague.cc", "fishki.net", "flashb.id", "flomni.com", "for-better.biz", "for-more.biz",
        "for-our.info", "for-some.biz", "for-the.biz", "forgot.her.name", "forgot.his.name", "fotocdn.net", "freedynamicdns.net", "freedynamicdns.org", "from-ak.com", "from-al.com", "from-ar.com", "from-az.net", "from-ca.com", "from-co.net",
        "from-ct.com", "from-dc.com", "from-de.com", "from-fl.com", "from-ga.com", "from-hi.com", "from-ia.com", "from-id.com", "from-il.com", "from-in.com", "from-ks.com", "from-ky.com", "from-la.net", "from-ma.com", "from-md.com",
        "from-me.org", "from-mi.com", "from-mn.com", "from-mo.com", "from-ms.com", "from-mt.com", "from-nc.com", "from-nd.com", "from-ne.com", "from-nh.com", "from-nj.com", "from-nm.com", "from-nv.com", "from-ny.net", "from-oh.com",
        "from-ok.com", "from-or.com", "from-pa.com", "from-pr.com", "from-ri.com", "from-sc.com", "from-sd.com", "from-tn.com", "from-tx.com", "from-ut.com", "from-va.com", "from-vt.com", "from-wa.com", "from-wi.com", "from-wv.com",
        "from-wy.com", "ftpaccess.cc", "fuettertdasnetz.de", "game-host.org", "game-server.cc", "gdz.work", "geekgalaxy.com", "getmyip.com", "gets-it.net", "gismeteo.net", "gismeteo.st", "go.dyndns.org", "golffan.us", "gotdns.chhopto.org",
        "gotdns.com", "gotdns.org", "groks-the.info", "groks-this.info", "group-ib.com", "ham-radio-op.net", "health-carereform.com", "here-for-more.info", "hibiny.com", "hobby-site.com", "hobby-site.org", "home.dyndns.org", "homedns.org",
        "homeftp.net", "homeftp.org", "homeip.net", "homelinux.com", "homelinux.net", "homelinux.org", "homesecuritymac.com", "homesecuritypc.com", "homeunix.com", "homeunix.net", "homeunix.org", "hopto.org", "hosthampster.com", "hotjar.com",
        "iamallama.com", "ilovecollege.info", "in-the-band.net", "irxybq.com", "is-a-anarchist.com", "is-a-blogger.com", "is-a-bookkeeper.com", "is-a-bruinsfan.org", "is-a-bulls-fan.com", "is-a-candidate.org", "is-a-caterer.com",
        "is-a-celticsfan.org", "is-a-chef.com", "is-a-chef.net", "is-a-chef.org", "is-a-conservative.com", "is-a-cpa.com", "is-a-cubicle-slave.com", "is-a-democrat.com", "is-a-designer.com", "is-a-doctor.com", "is-a-financialadvisor.com",
        "is-a-geek.com", "is-a-geek.net", "is-a-geek.org", "is-a-green.com", "is-a-guru.com", "is-a-hard-worker.com", "is-a-hunter.com", "is-a-knight.org", "is-a-landscaper.com", "is-a-lawyer.com", "is-a-liberal.com", "is-a-libertarian.com",
        "is-a-linux-user.org", "is-a-llama.com", "is-a-musician.com", "is-a-nascarfan.com", "is-a-nurse.com", "is-a-painter.com", "is-a-patsfan.org", "is-a-personaltrainer.com", "is-a-photographer.com", "is-a-player.com", "is-a-republican.com",
        "is-a-rockstar.com", "is-a-socialist.com", "is-a-soxfan.org", "is-a-student.com", "is-a-teacher.com", "is-a-techie.com", "is-a-therapist.com", "is-an-accountant.com", "is-an-actor.com", "is-an-actress.com", "is-an-anarchist.com",
        "is-an-artist.com", "is-an-engineer.com", "is-an-entertainer.com", "is-by.us", "is-certified.com", "is-found.org", "is-gone.com", "is-into-anime.com", "is-into-cars.com", "is-into-cartoons.com", "is-into-games.com", "is-leet.com",
        "is-lost.org", "is-not-certified.com", "is-saved.org", "is-slick.com", "is-uberleet.com", "is-very-bad.org", "is-very-evil.org", "is-very-good.org", "is-very-nice.org", "is-very-sweet.org", "is-with-theband.com", "isa-geek.com",
        "isa-geek.net", "isa-geek.org", "isa-hockeynut.com", "issmarterthanyou.com", "isteingeek.de", "istmein.de", "ixbt.com", "ixbt.online", "ixbt.site", "kaspersky.com", "keenetic.link", "keenetic.name", "keenetic.pro", "kicks-ass.net",
        "kicks-ass.org", "kinoafisha.info", "knigavuhe.org", "knowsitall.info", "kp.house", "kpcdn.net", "krut.link", "land-4-sale.us", "lebtimnetz.de", "leitungsen.de", "lentainform.com", "likes-pie.com", "likescandy.com", "livejournal.com",
        "livejournal.net", "loginto.me", "luxcdn.com", "luxupnetwork.com", "megamarket.tech", "merseine.com", "merseine.org", "mine.nu", "misconfused.org", "mlbfan.org", "mmafan.biz", "mmstat.com", "moe.video", "mradx.net", "mvk.com",
        "myactivedirectory.com", "mycdn.me", "myddns.me", "mydissent.net", "myeffect.net", "myftp.biz", "myftp.org", "mypets.ws", "myphotos.cc", "mypsx.net", "mysecuritycamera.com", "mysecuritycamera.net", "mysecuritycamera.org", "myvnc.com",
        "naydex.net", "neat-url.com", "net-freaks.com", "nflfan.org", "nhlfan.net", "nsn-azert.xyz", "office-on-the.net", "on-the-web.tv", "onthewifi.com", "ozonusercontent.com", "panda.video", "pgafan.net", "pingdom.net", "podzone.net",
        "podzone.org", "point2this.com", "pointto.us", "politnavigator.net", "pravdafrance.com", "primamedia.company", "privatizehealthinsurance.net", "push.world", "push4site.com", "quicksytes.com", "r-99.com", "read-books.org",
        "readmyblog.org", "redirectme.net", "remotecam.nu", "ren.tv", "rt.com", "rteam.tech", "russiatoday.com", "saves-the-whales.com", "sberbank.com", "scrapper-site.net", "scrapping.cc", "securitytactics.com", "selfip.biz", "selfip.com",
        "selfip.info", "selfip.net", "selfip.org", "sells-for-less.com", "sells-for-u.com", "sells-it.net", "sellsyourhome.org", "servebbs.com", "servebbs.net", "servebbs.org", "serveblog.net", "servecounterstrike.com", "serveexchange.com",
        "serveftp.com", "serveftp.net", "serveftp.org", "servegame.com", "servegame.org", "servehalflife.com", "servehttp.com", "servehumour.com", "serveirc.com", "serveminecraft.net", "servemp3.com", "servep2p.com", "servepics.com",
        "servequake.com", "servesarcasm.com", "setka.news", "shacknet.biz", "shacknet.us", "simple-url.com", "skcrtxr.com", "smi.today", "smi2.net", "smi2.tech", "space-to-rent.com", "stuff-4-sale.org", "stuff-4-sale.us", "stufftoread.com",
        "sytes.net", "taobao.com", "targetads.io", "tds.bid", "teaches-yoga.com", "terratraf.com", "thruhere.net", "tolstoycomments.com", "traeumtgerade.de", "trbcdn.net", "trex.media", "tsargrad.tv", "turbopages.org", "ufcfan.org",
        "uma.media", "unusualperson.com", "ura.news", "userapi.com", "viewdns.net", "viqeo.tv", "vk-cdn.me", "vk-cdn.net", "vk-portal.net", "vk.cc", "vk.com", "vkuser.net", "vringe.com", "webhop.biz", "webhop.info", "webhop.me", "webhop.net",
        "webhop.org", "webvisor.org", "wonderpush.com", "worse-than.tv", "writesthisblog.com", "wwqjof.com", "yadi.sk", "yandex.net", "yandexcloud.net", "yaplakal.com", "yastatic.net", "zapto.org"
    ];

    var proxyDomains = [
        "bestchange.ru",
        "intel.ru",
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
