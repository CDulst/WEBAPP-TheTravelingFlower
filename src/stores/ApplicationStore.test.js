import ApplicationStore from './ApplicationStore';
import RootStore from './'
import Application from '../models/Application';

test('create a new applicationStore', () => {
    const store = new ApplicationStore();
    expect(store.applications).toBeInstanceOf(Array);
    expect(store.applications.length).toBe(0); 
})
