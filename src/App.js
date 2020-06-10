import React from 'react';
import ROUTES from './routes'
import Apply from "./app/apply";
import Landing from "./app/landing"
import Tracker from './app/tracker'
import Challenge from "./app/challenge"
import Carriers from "./app/carriers"
import Settings from './app/settings'
import Sidebar from './app/sidebar'
import uiStore from './UiStore'
import { Switch, Route } from "react-router-dom";
import {useObserver} from 'mobx-react-lite';

function App() {
  return useObserver(() => (
  <>
   <Switch>
   <Route path = {ROUTES.apply}>
   <Apply/>
   </Route>
   <Route path = {ROUTES.tracker}>
   <Tracker/>
   </Route>
   <Route path = {ROUTES.challenge}>
   <Challenge/>
   </Route>
   <Route path = {ROUTES.carriers}>
   <Carriers/>
   </Route>
   <Route path = {ROUTES.settings}>
   <Settings/>
   </Route>
    <Route path = {ROUTES.landing}>
   <Landing/>
   </Route>
   </Switch>
   {
     (uiStore.sidebarActive ?
   <Sidebar/>
   : 
   
    <>
    </>
     )
} 
   </>
  ));
}

export default App;
