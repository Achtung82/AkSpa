import "whatwg-fetch";
import getFormData from "./getformdata";

export default function postForm(form, url) {
    const data = getFormData(form);
    return postJson(data, url);
}

export function postObject(obj, url) {
    const data = JSON.stringify(obj);
    return postJson(data, url);
}

export function getJson(url) {
    return fetch(url,
            { credentials: "same-origin" }
        )
        .then(function(response) {
            return response.json();
        });
}



export function postJson(data, url) {
    return fetch(url,
            {
                body: data,
                method: "post",
                credentials: "same-origin",
                headers: new Headers({
                    "Content-Type": "application/json; charset=utf-8"
                })
            })
        .then(function (response) {
            return response.json();
        });
}