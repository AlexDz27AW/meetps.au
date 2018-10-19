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
        payload.push("expires=" + (expires ? new Date(expires * 1000).toUTCString() : "Thu, 01 Jan 1970 00:00:01 GMT"));

    payload.push("path=/");
    payload.push("domain=meet.ps");
    payload.push("secure");

    document.cookie = payload.join(';');
}


var keys = ["utm_term", "utm_source", "utm_medium", "utm_campaign", "utm_content"];
keys.forEach(function(key) {
    var val = getRequestParam(key);
    if (val)
        setCookie(key, val);
});
