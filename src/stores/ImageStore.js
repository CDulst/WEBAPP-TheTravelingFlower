import { decorate, observable, action } from "mobx";

class ImageStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.images = [];
    }

    addImage(image) {
        this.images.push(image);
    }
}

decorate(ImageStore, {
    rootStore: observable,
    images: observable,
    addImage: action
})

export default ImageStore;