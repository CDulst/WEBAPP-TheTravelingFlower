const { decorate, observable } = require("mobx");

class JourneyModel {
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

decorate(JourneyModel, {
    id: observable,
    location: observable,
    title: observable,
    images: observable,
    text: observable
})

export default JourneyModel;