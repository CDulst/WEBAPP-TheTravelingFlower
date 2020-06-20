
import ApplicationStore from './ApplicationStore';
import CarrierStore from './CarrierStore';
import ChallengeStore from './ChallengeStore';
import JourneyStore from "./JourneyStore";
import MessageStore from './MessageStore';
import RouteStore from './RouteStore';
import ServerValuesStore from './ServerValuesStore';
import SocialPostStore from './SocialPostStore';
import UserStore from './UserStore';

import * as firebase from "firebase/app";
import { configure } from 'mobx';

configure({enforceActions: "observed"});

class RootStore {
    constructor(){
        var firebaseConfig = {
            apiKey: process.env.REACT_APP_apiKey,
            authDomain: process.env.REACT_APP_authDomain,
            databaseURL: process.env.REACT_APP_databaseURL,
            projectId: process.env.REACT_APP_projectId,
            storageBucket: process.env.REACT_APP_storageBucket,
            messagingSenderId: process.env.REACT_APP_messagingSenderId,
            appId: process.env.REACT_APP_appId
          };
        // Initialize Firebase
        this.firebase = firebase.initializeApp(firebaseConfig);
        this.applicationStore = new ApplicationStore(this);
        this.carrierStore = new CarrierStore(this);
        this.challengeStore = new ChallengeStore(this);
        this.messageStore = new MessageStore(this);
        this.routeStore = new RouteStore(this);
        this.serverValuesStore = new ServerValuesStore(this);
        this.socialPostStore = new SocialPostStore(this);
        this.userStore = new UserStore(this);
        this.journeyStore = new JourneyStore(this);

    }
}

const rootStore = new RootStore();

export {rootStore};

