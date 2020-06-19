import { decorate, observable } from "mobx";

class ImageModel {
    constructor({id, src, alt}) {
        this.id = id;
        this.src = src;
        this.alt = alt;
    }
}

decorate(ImageModel, {
    id: observable,
    src: observable,
    alt: observable
})

export default ImageModel;