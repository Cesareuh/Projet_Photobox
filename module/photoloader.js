import * as Api from "./api.js";

export let loadResource = (uri) => {
	return fetch(Api.url+uri, {credentials: 'include'})
		.then((res) => {
			if(res.ok){
				return res.json();
			}
			return Promise.reject(new Error(res.statusText));
		})
		.catch(console.error);
}
