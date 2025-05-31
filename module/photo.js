import * as Photoloader from "../module/photoloader.js";
import * as Ui from "../module/ui.js";
import * as Api from "../module/api.js";

export let getPicture = (id) => {
	let img = Photoloader.loadResource(Api.api_photos+id);
	Ui.displayPicture(img);
	Ui.displayCategorie(getCategorie(img));
	Ui.displayCommentaires(getCommentaires(img));
};

let getCategorie = (img) => {
	return img.then((data) => {
		return Photoloader.loadResource(data.links.categorie.href);
	});
}

let getCommentaires = (img) => {
	return img.then((data) => {
		return Photoloader.loadResource(data.links.comments.href);
	});
}
