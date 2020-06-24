
import turf from 'turf'
import { decorate, observable, action } from 'mobx';

class DataStore {
    constructor() {
        this.trajectory = [];
        this.place = [];
    }


    getLocation = async endRoute => {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${endRoute.location.Ac}&longitude=${endRoute.location.Rc}&localityLanguage=nl`, {
            headers: new Headers({
              Accept: 'application/json'
            })
          });
        
          const result = await response.json();
          this.place.push(result);
    }
    

    calculatePoints (startRoute, endRoute) {
        const line = turf.lineString([[startRoute.startCoordinate.Rc, startRoute.startCoordinate.Ac],[endRoute[endRoute.length - 1].location.Rc, endRoute[endRoute.length - 1].location.Ac]])
        let options = 'kilometers'
        const distance = turf.distance([startRoute.startCoordinate.Rc, startRoute.startCoordinate.Ac],[endRoute[endRoute.length - 1].location.Rc, endRoute[endRoute.length - 1].location.Ac], options)
        return distance
    }

    empty () {
        this.place = []
    }

    
}

decorate(DataStore, {
    trajectory:observable,
    place: observable,
    calculatePoints: action,
    getLocation: action,
    
})



const dataStore = new DataStore();

export {dataStore}



export default DataStore;