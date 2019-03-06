// A small snippet to stash away UTM markers into cookies.
// These will be sent when registration occurs. Hopefully.


// Get the value for a key in the query string.
function getRequestParam(key) {
    const query = window.location.search.substring(1);
    const params = {};
    query.split("&").forEach(part => {
        const [k, v] = part.split("=").map(decodeURIComponent);
        if (!v) {
            return;
        }
        params[k] = v;
    });
    return params[key] || "";
}


// Set a cookie that should be visible to the main app.
function setCookie(key, value, expires) {
    const val = encodeURIComponent(value.toString().trim());
    let payload = [`${key.toString()}=${val}`];
    if (typeof expires !== "undefined") {
        const ts = expires ? new Date(expires).toUTCString() : "Thu, 01 Jan 1970 00:00:01 GMT";
        payload.push(`expires=${ts}`);
    }
    payload = payload.concat([
        "path=/",
        "domain=meet.ps",
        "secure",
    ]);
    document.cookie = payload.join(";");
}


// Actual work is to persist those query string parameters in a cookie.
const keys = [
    "utm_term",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
];
const ttl = Date.now() + 2592e5;

keys
    .map(key => ([key, getRequestParam(key)]))
    .filter(tuple => !!tuple[1])
    .map(tuple => setCookie(...tuple.concat(ttl)));
