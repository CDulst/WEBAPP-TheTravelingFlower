import {rootStore} from '../../../../stores/index'
import turf from 'turf'
import { decorate, observable, action } from 'mobx';

class DataStore {
    constructor() {
        this.trajectory = [];
    }

    
    
    calculatePoints () {
        rootStore.routeStore.routes.forEach(route => {
            let line = turf.lineString([[route.startCoordinate.Rc, route.startCoordinate.Ac],[route.endCoordinate.Rc, route.endCoordinate.Ac]])
            let options = 'kilometers'
            const distance = turf.distance([route.startCoordinate.Rc, route.startCoordinate.Ac], [route.endCoordinate.Rc, route.endCoordinate.Ac], options)
    
            
            for (let i = 30; i < distance; i++) {
                const along = turf.along(line, i, options);
                this.trajectory.push(along.geometry.coordinates);
               
            }
        })
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