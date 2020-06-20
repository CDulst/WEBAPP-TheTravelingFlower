import React from 'react';
import ROUTES from './routes'
import Apply from "./app/content/apply";
import Landing from "./app/content/landing"
import Tracker from './app/content/tracker'
import Challenge from "./app/content/challenge"
import Carriers from "./app/content/carriers"
import Settings from './app/content/settings'
import Sidebar from './app/content/sidebar'
import {rootStore} from "./stores/index";
import uiStore from './UiStore'
import { Switch, Route, Redirect} from "react-router-dom";
import {useObserver} from 'mobx-react-lite';
import style from './app.module.css'

function App() {
  return useObserver(() => (
  <>
  <div className = {style.container}>
  {
     (uiStore.sidebarActive ?
   <Sidebar/>
   : 
    <>
    </>
     )
}
   <h1 className = {style.hidden}>The traveling flower</h1>
   <Switch>
   <Route path = {ROUTES.apply}>
    { rootStore.uiStore.currentUser ? (
   <Apply/>
    )
   :
   (
   <Redirect to = {ROUTES.landing}/>
   )}
   </Route>
   <Route path = {ROUTES.tracker}>
   { rootStore.uiStore.currentUser ? (
   <Tracker/>
    )
   :
   (
   <Redirect to = {ROUTES.landing}/>
   )}
   </Route>
   <Route path = {ROUTES.challenge}>
   { rootStore.uiStore.currentUser ? (
   <Challenge/>
    )
   :
   (
   <Redirect to = {ROUTES.landing}/>
   )}
   </Route>
   <Route path = {ROUTES.carriers}>
   { rootStore.uiStore.currentUser ? (
   <Carriers/>
    )
   :
   (
   <Redirect to = {ROUTES.landing}/>
   )}
   </Route>
   <Route path = {ROUTES.settings}>
   { rootStore.uiStore.currentUser ? (
   <Settings/>
    )
   :
   (
   <Redirect to = {ROUTES.landing}/>
   )}
   </Route>
    <Route path = {ROUTES.landing}>
    { rootStore.uiStore.currentUser ? (
    <Redirect to = {ROUTES.tracker}/>
   )
   :
   (
     <Landing/>
    )}
   </Route>
   </Switch>
   </div>
   </>
  ));
}

export default App;
