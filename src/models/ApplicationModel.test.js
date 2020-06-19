import ApplicationModel from './ApplicatonModel';
import RootStore from '../stores/index'
import { ExpansionPanelActions } from '@material-ui/core';

test('create application', () => {
    const application = new ApplicationModel({name:"yorben", email:"yorben.goor@student.howest.be"})
    expect(application.name).toBe("yorben");
    expect(application.email).toBe("yorben.goor@student.howest.be")
})
