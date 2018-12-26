(function() {

    function getRequestParam(key) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        var params = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair.length != 2)
                continue;
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return params[key] || "";
    }


    function setCookie(key, value, expires) {
        var payload = [key.toString() + '=' + encodeURIComponent(value.toString().trim())];
        if (typeof expires != "undefined")
            payload.push("expires=" + (expires ? new Date(expires).toUTCString() : "Thu, 01 Jan 1970 00:00:01 GMT"));

        payload.push("path=/");
        payload.push("domain=meet.ps");
        payload.push("secure");

        document.cookie = payload.join(';');
    }


    function getCookie(key) {
        var cookies = {};
        document.cookie.split(';').forEach(function(line) {
            var separator = line.indexOf('='),
                key = line.substring(0, separator).trim(),
                value = line.substring(separator + 1).trim();
            if (!value || cookies[key]) return;
            cookies[key] = value;
        });
        return cookies[key] || false;
    }


    var keys = ["utm_term", "utm_source", "utm_medium", "utm_campaign", "utm_content"];
    keys.forEach(function(key) {
        var val = getRequestParam(key);
        if (val)
            setCookie(key, val);
    });

    if (!getCookie("referrer") && document.referrer && document.referrer.indexOf('//' + window.location.hostname) === -1) {
        setCookie("referrer", document.referrer, Date.now() + 30 * 24 * 3600 * 1000);
    }

})();
