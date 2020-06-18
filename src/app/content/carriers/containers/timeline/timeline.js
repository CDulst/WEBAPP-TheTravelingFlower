import React from 'react';
import {Link} from "react-router-dom";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import test from '../../../../../assets/carrier/carrier.png'
import style from './timeline.module.css'
import Story from '../../components/story/story';
import image from '../../../../../assets/feed/post/content pics/example.png'




function TimeLine({backgroundColor, indicatorColor, carrierPhoto, date}) {
  return (
  <>
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
        contentStyle={{background: `${backgroundColor}`, color: '#fff'}}
        contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
        date={date}
        iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
        icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
      <Story title= "a beautifull day in Holland!" date="2019-12-9" location="Amsterdam" content="this is such an awesome place and I wanted to share this with you guys" image={image} />

    </VerticalTimelineElement>

    <VerticalTimelineElement
        contentStyle={{background: `${backgroundColor}`, color: '#fff'}}
        contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
        date={date}
        iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
        icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
      <Story title= "a beautifull day in Holland!" date="2019-12-9" location="Amsterdam" content="this is such an awesome place and I wanted to share this with you guys" image={image} />

    </VerticalTimelineElement>

    

    
  </VerticalTimeline>
    </div>
  </>
  );
}

export default TimeLine;