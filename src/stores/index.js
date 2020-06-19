
import ApplicationStore from './ApplicationStore';
import CarrierStore from './CarrierStore';
import ChallengeStore from './ChallengeStore';
import ImageStore from './ImageStore';
import JourneyStore from './JourneyStore';
import MessageStore from './MessageStore';
import RouteStore from './RouteStore';
import ServerValuesStore from './ServerValuesStore';
import SocialPostStore from './SocialPostStore';
import UserStore from './UserStore';
configure({enforceActions: "observed"});
class RootStore {
    constructor(){
        this.applicationStore = new ApplicationStore(this);
        this.carrierStore = new CarrierStore(this);
        this.challengeStore = new ChallengeStore(this);
        this.imageStore = new ImageStore(this);
        this.journeyStore = new JourneyStore(this);
        this.messageStore = new MessageStore(this);
        this.routeStore = new RouteStore(this);
        this.serverValuesStore = new ServerValuesStore(this);
        this.socialPostStore = new SocialPostStore(this);
        this.userStore = new UserStore(this);

    }
}

export default RootStore;
