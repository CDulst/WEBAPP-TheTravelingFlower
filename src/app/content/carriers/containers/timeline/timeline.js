import React from 'react';
import {Link} from "react-router-dom";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import test from '../../../../../assets/carrier/carrier.png'
import style from './timeline.module.css'
import Story from '../../components/story/story';




function TimeLine() {
  return (
  <>
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
        contentStyle={{background: 'var(--colorSecondary)', color: '#fff'}}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<img className={style.icon} src={test} alt="test"></img>}>
      

    </VerticalTimelineElement>

  </VerticalTimeline>
    </div>
  </>
  );
}

export default TimeLine;