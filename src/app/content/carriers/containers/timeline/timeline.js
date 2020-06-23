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





function TimeLine({backgroundColor, indicatorColor, carrierPhoto, date, borderTop}) {


  const { id } = useParams();

  const {carrierStore ,routeStore} = useStore()
  const selectedRoute = routeStore.findRouteById(id)
  const selectedCarrier = carrierStore.findCarrierById(selectedRoute.carrierId);

  uiStoreCarriers.setSelectedCarrierFromTracker(selectedCarrier);
  
 

  return useObserver(() => (
  <>
    <div>

      {selectedCarrier && selectedCarrier.journeys ? (

        <VerticalTimeline layout={"1-column"}>
        {selectedCarrier.journeys.map(journey => (
        <VerticalTimelineElement
          contentStyle={{background: `${backgroundColor}`, color: '#fff', borderTop: `${borderTop}  var(--colorSecondary) solid`}}
          contentArrowStyle={{ borderRight: `6px solid  ${backgroundColor}`}}
          date={date}
          iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
          icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
        <Story title= {journey.title} date={journey.date} location={journey.location} content={journey.text} image={journey.images} />
  
      </VerticalTimelineElement>
        ))}
    
  </VerticalTimeline>
      ):null}
      
    </div>
  </>
  ));
}

export default TimeLine;