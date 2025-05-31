import Handlebars from "handlebars"
import * as Gallery from "../module/gallery.js";
import * as Api from "./api.js"
import * as Photo from "./photo.js"

let template_photo = Handlebars.compile(document.querySelector("#photoTemplate").innerHTML);
let template_categorie = Handlebars.compile(document.querySelector("#categorieTemplate").innerHTML);
let template_commentaires = Handlebars.compile(document.querySelector("#commentairesTemplate").innerHTML);
let template_galerie = Handlebars.compile(document.querySelector("#galerieTemplate").innerHTML);

let la_photo = document.querySelector("#la_photo");
let la_categorie = document.querySelector("#la_categorie");
let les_commentaires = document.querySelector("#les_commentaires");
let la_galerie = document.querySelector("#la_galerie");

export let displayPicture = (img) => {
	img.then(data => {
		la_photo.innerHTML = template_photo({url: Api.url+data.photo.url.href, photo: data.photo});
	});
}

export let displayCategorie = (categ) => {
	categ.then(data =>{
		la_categorie.innerHTML = template_categorie({categorie: data.categorie.nom});
	});
}

export let displayCommentaires = (com) => {
	com.then(data =>{
		les_commentaires.innerHTML = template_commentaires({commentaires: data.comments});
	});
}

export let displayGalerie = (gal) => {
	gal.then(data => {
		let prev = Gallery.page > 1;
		let next = (data.count > (9 * Gallery.page));
		
		data.photos.forEach(elem => {
			elem.photo.thumbnail.href = Api.url + elem.photo.thumbnail.href;
		});
		la_galerie.innerHTML = template_galerie({photos: data.photos, prev: prev, next: next});
		data.photos.forEach(elem => {
			elem.photo.thumbnail.href = Api.url + elem.photo.thumbnail.href;
		});
		let index = 0;
		document.querySelectorAll(".thumbnail").forEach(elem => {
			elem.addEventListener("click", ()=>{
				Photo.getPicture(elem.id)});
			index++;
		});

		if(prev){
			document.querySelector("#prev").addEventListener("click", () => {
				displayGalerie(Gallery.prev());
			});
		}

		if(next){
			document.querySelector("#next").addEventListener("click", () => {
				displayGalerie(Gallery.next());
			});
	}
})
}
