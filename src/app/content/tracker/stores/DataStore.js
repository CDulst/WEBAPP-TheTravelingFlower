import {rootStore} from '../../../../stores/index'
import turf from 'turf'
import { decorate, observable, action } from 'mobx';

class DataStore {
    constructor() {
        this.trajectory = [];
    }

    

    calculatePoints (startRoute, endRoute) {
        const line = turf.lineString([[startRoute.startCoordinate.Rc, startRoute.startCoordinate.Ac],[endRoute[endRoute.length - 1].location.Rc, endRoute[endRoute.length - 1].location.Ac]])
        let options = 'kilometers'
        console.log(line)
        const distance = turf.distance([startRoute.startCoordinate.Rc, startRoute.startCoordinate.Ac],[endRoute[endRoute.length - 1].location.Rc, endRoute[endRoute.length - 1].location.Ac], options)
        return distance
    }

    empty () {
        this.trajectory = [];
    }

    
}

decorate(DataStore, {
    trajectory:observable,
    calculatePoints: action
})



const dataStore = new DataStore();

export {dataStore}



export default DataStore;