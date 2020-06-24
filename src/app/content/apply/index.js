import React from 'react';
import {Link} from "react-router-dom";
import ROUTES from "./routes/index";
import style from "./index.module.css"
import {useEffect} from 'react';
import {Switch,Route} from 'react-router-dom';
import uiStore from '../../../UiStore';
import Header from './containers/header/header';
import ProgressBar from "./containers/progressBar/progressBar";
import Personal from './containers/personal/personal';
import Button from "../../components/button/button";
import Congrats from '../../../assets/apply/congrats.svg';
import Bike from '../../../assets/apply/Bike.svg';
import Adres from './containers/adres/adres';
import Rout from './containers/route/route';
import Motivation from './containers/motivation/motivation';
import uiApply from "./stores/uiStore";
import arrow from '../../../assets/Arrow.svg'
import personalStore from './stores/personal';
import { useObserver } from 'mobx-react-lite';
import adresStore from './stores/adres';
import {v4} from "uuid";
import {rootStore} from '../../../stores/index'


function Apply() {

    const handleClick = () => {
    const app = {
    id: v4(),
    age: personalStore.age,
    country: adresStore.country,
    email: personalStore.email,
    identification:personalStore.identification,
    name: personalStore.name,
    postalcode: adresStore.postalcode,
    route: personalStore.route,
    streetname: adresStore.streetname,
    streetnr: adresStore.streetnr
    }
    rootStore.applicationStore.createApplication(app)
    }

    useEffect(() => {
        uiStore.setPage("apply")
      });

  return useObserver(() =>(
  <>

  <div className = {style.container}>
  <div className = {style.container__wrapper}>
  <div className = {style.wrapper}>
  { 
  (uiApply.currentStep !== "finished" && uiApply.currentStep !==  "landing" ?
  <div className = {style.progressWrapper}>
  <ProgressBar/>
  </div>
  :
  <>
  </>
  )
  }
  <Link to="/tracker"><img className = {style.arrow} src = {arrow} alt="arrow"/></Link>
  <Switch>
  <Route path = {ROUTES.finished}>
  <div className = {style.specialWrapper}>
  <div className = {style.underground}>
  <Header title = "Congratulations" text = "Congratulations ! Your registration was succesfull. You’ll get an email when you’re selected. Stay tuned !" img = {Congrats}/>
  <Link className = {style.button} to = {"/tracker"}><Button className = {style.button} value = "Back to home" type= "secondary"/></Link>
   

  </div>
  </div>
  </Route>
  <Route path = {ROUTES.motivation}>
  <div className = {style.underground}>
  <Header title = "Send us your motivation" text = "We have only 24 spots available for carriers in this program. So we want to know who’s the most motivated candidate to bring our Lady Slipper to Yushan (China). Send us a motivational video of max. 1 min. And tell us why you should get the spot in our campaign. " />
  <Motivation/>
  <div className = {style.buttonsWrapper}>
  <Link to = {ROUTES.route}><Button className = {style.button} value = "Previous Step" type= "primary"/></Link>
  <Link onClick = {handleClick}  className = {style.leftButton} to = {ROUTES.finished}> <Button className = {style.button} value = "Complete" type= "secondary"/></Link>
  </div>
  </div>
  </Route>
  <Route path = {ROUTES.route}>
  <div className = {style.underground}>
  <Header title = "Choose Your Route" text = "You can choose 1 favourite route, you would like to do. It’s not certain if this is the route you’ll get, but we consider your favourite route. " />
  <Rout/>
  <div className = {style.buttonsWrapper}>
  <Link to = {ROUTES.adres}><Button className = {style.button} value = "Previous Step" type= "primary"/></Link>
  <Link className = {style.leftButton} to = {ROUTES.motivation}> <Button className = {style.button} value = "Next Step" type= "secondary"/></Link>
  </div>
  </div>
  </Route>
  <Route path = {ROUTES.adres}>
  <div className = {style.underground}>
  <Header title = "Adress" text = "You're adress is save with us" />
  <Adres/>
  <div className = {style.buttonsWrapper}>
  <Link to = {ROUTES.personal}><Button className = {style.button} value = "Previous Step" type= "primary"/></Link>
  {
  ( adresStore.enableButton ?
  <Link className = {style.leftButton}  to = {ROUTES.route}> <Button className = {style.button} value = "Next Step" type= "secondary"/></Link>
  :
  <p className = {style.leftButton} ><Button value = "Next Step" disable = "true" type= "secondary"/></p>
  )
  }
  </div>
  </div>
  </Route>
  <Route path = {ROUTES.personal}>
  <div className = {style.underground}>
  <Header title = "Personal Information" text = "Once selected, we will need this to make a profile about you as a carrier."/>
  <Personal/>
  {
  ( personalStore.enableButton ?
  <Link to = {ROUTES.adres} className = {style.button}><Button className = {style.button} value = "Next Step" type= "secondary"/></Link>
  :
  <Button className = {style.button} value = "Next Step" disable = "true" type= "secondary"/>
  )
}
  </div>
  </Route>
  <Route path = {ROUTES.landing}>
  <div className = {style.specialWrapper}>
  <div className = {style.underground}>
  <Header title = "Become a carrier" img = {Bike} />

  <Link to = {ROUTES.personal}><Button className = {style.button} value = "Sign Up" type= "secondary"/></Link>
  </div>
  </div>
  </Route>
  </Switch>
  </div>
  </div>
  </div>
  </>
  ));
}

export default Apply;
