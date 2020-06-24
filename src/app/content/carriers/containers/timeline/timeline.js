import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import style from './timeline.module.css'
import Story from '../../components/story/story';
import image from '../../../../../assets/feed/post/content pics/example.png'
import { uiStoreCarriers } from '../../stores/UiStore';
import { useObserver } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../../../hooks';
import { v4 } from 'uuid';





function TimeLine({backgroundColor, indicatorColor, carrierPhoto, date, borderTop}) {


  const { id } = useParams();

  const {carrierStore ,routeStore} = useStore()
  const selectedRoute = routeStore.findRouteById(id)
  const selectedCarrier = carrierStore.findCarrierById(selectedRoute.carrierId);

  uiStoreCarriers.setSelectedCarrierFromTracker(selectedCarrier);

  //sorted journeys

  let journeyArray = [];
  for (let i = 1; i<= selectedCarrier.journeys.length; i++){
    let journey = selectedCarrier.journeys.find(journey => journey.sorted === i);
    journeyArray.unshift(journey);
  }

  return useObserver(() => (
  <>
    <div>

      {selectedCarrier && selectedCarrier.journeys ? (

        <VerticalTimeline key={selectedCarrier.id} layout={"1-column"}>
        {journeyArray.map(journey => (
        <VerticalTimelineElement key={journey.id}
          contentStyle={{background: `${backgroundColor}`, color: '#fff', borderTop: `${borderTop}  var(--colorSecondary) solid`}}
          contentArrowStyle={{ borderRight: `6px solid  ${backgroundColor}`}}
          date={date}
          iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
          icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
        <Story key={selectedCarrier.id} title= {journey.title} date={journey.date} location={journey.location} content={journey.text} image={journey.images} />
  
      </VerticalTimelineElement>
        ))}
    
  </VerticalTimeline>
      ):null}
      
    </div>
  </>
  ));
}

export default TimeLine;