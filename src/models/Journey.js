import{ decorate, observable} from "mobx"
import {rootStore} from "../stores/index.js";

class Journey {
    constructor({id, location, title, images=[], text}) {
        this.id = id;
        this.location = location;
        this.title = title;
        this.images = images;
        this.text = text;
    }
    linkImage(image) {
        !this.images.includes(image) && this.images.push(image);
    }
}

decorate(Journey, {
    id: observable,
    location: observable,
    title: observable,
    images: observable,
    text: observable
})

export default Journey;