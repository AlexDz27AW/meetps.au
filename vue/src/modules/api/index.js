import Axios from "axios";
import Store, { state } from "@/store";
import config from "@config";

const Instance = Axios.create({
    "baseURL": `${config.api}/api/`,
    "headers": {
        "Accept": "application/json",
    },
    "withCredentials": true,
    "crossDomain": true,
    "responseType": "json",
    "transformResponse": [
        data => {
            // IE11 compat - the little shit doesn't respect responseType.
            if (typeof data === "string") {
                try {
                    data = JSON.parse(data);
                }
                catch (e) {
                    data = {
                        "error": {
                            "message": "Unable to process your request due to API interaction failure",
                            "code": 503,
                        },
                    };
                }
            }
            return ((typeof data === "object") && (data.result || data.error) ? (data.result || data.error) : data);
        },
    ],
});


const getAuthHeaders = override => {
    const token = override || state.user.token;
    return token ? { "headers": { "Authorization": `Bearer ${token}` } } : {};
};

const tT = response => response.data;
const tC = error => {
    const err = error && error.response ? error.response.data : null;
    if (err && err.code && err.code === 401 && state.user.token) {
        Store.commit("LOGOUT");
    }
    return Promise.reject(err);
};


const get = (url, token) => Instance.get(url, getAuthHeaders(token)).then(tT, tC);

const post = (url, data, token) => Instance.post(url, data, getAuthHeaders(token)).then(tT, tC);


export default {
    "instance": Instance,
    get,
    post,
};
