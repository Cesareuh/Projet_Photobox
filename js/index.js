import * as Ui from "../module/ui.js";
import * as Gallery from "../module/gallery.js";


// getPicture(window.location.hash ? window.location.hash.substr(1): 105);
Ui.displayGalerie(Gallery.load());

