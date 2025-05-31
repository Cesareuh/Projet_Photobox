import * as Api from "../module/api.js";
import * as Photoloader from "../module/photoloader.js";

export let page = 1;

export let load = () => {
	return Photoloader.loadResource(Api.api_photos + `?size=9&page=${page}`);
}

export let prev = () => {
	page--;
	return load();
}

export let next = () => {
	page++;
	return load();
}
