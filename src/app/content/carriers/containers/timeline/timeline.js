import React from 'react';
import {Link} from "react-router-dom";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import test from '../../../../../assets/carrier/carrier.png'
import style from './timeline.module.css'
import Story from '../../components/story/story';
import image from '../../../../../assets/feed/post/content pics/example.png'




function TimeLine({backgroundColor, indicatorColor, carrierPhoto, date, borderTop}) {
  return (
  <>
    <div>
      <VerticalTimeline layout={"1-column"}>
        <VerticalTimelineElement
        contentStyle={{background: `${backgroundColor}`, color: '#fff', borderTop: `${borderTop}  var(--colorSecondary) solid`}}
        contentArrowStyle={{ borderRight: `6px solid  ${backgroundColor}`}}
        date={date}
        iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
        icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
      <Story title= "a beautifull day in Holland!" date="2019-12-9" location="Amsterdam" content="this is such an awesome place and I wanted to share this with you guys. and i like this a lot. this is just some placeholder text to visualise the visuals on the desktop computer, please sent help because I am honnestly going to kill mysellf after this week" image={image} />

    </VerticalTimelineElement>

    <VerticalTimelineElement
        contentStyle={{background: `${backgroundColor}`, color: '#fff', borderTop: `${borderTop}  var(--colorSecondary) solid`}}
        contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
        date={date}
        iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
        icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
      <Story title= "a beautifull day in Holland!" date="2019-12-9" location="Amsterdam" content="this is such an awesome place and I wanted to share this with you guys. and i like this a lot. this is just some placeholder text to visualise the visuals on the desktop computer, please sent help because I am honnestly going to kill mysellf after this week" image={image} />

    </VerticalTimelineElement>

    <VerticalTimelineElement
        contentStyle={{background: `${backgroundColor}`, color: '#fff', borderTop: `${borderTop}  var(--colorSecondary) solid`}}
        contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
        date={date}
        iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
        icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
      <Story title= "a beautifull day in Holland!" date="2019-12-9" location="Amsterdam" content="this is such an awesome place and I wanted to share this with you guys. and i like this a lot. this is just some placeholder text to visualise the visuals on the desktop computer, please sent help because I am honnestly going to kill mysellf after this week" image={image} />

    </VerticalTimelineElement>

    <VerticalTimelineElement
        contentStyle={{background: `${backgroundColor}`, color: '#fff', borderTop: `${borderTop}  var(--colorSecondary) solid`}}
        contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
        date={date}
        
        iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
        icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
      <Story title= "a beautifull day in Holland!" date="2019-12-9" location="Amsterdam" content="this is such an awesome place and I wanted to share this with you guys. and i like this a lot. this is just some placeholder text to visualise the visuals on the desktop computer, please sent help because I am honnestly going to kill mysellf after this week" image={image} />

    </VerticalTimelineElement>

    <VerticalTimelineElement
        contentStyle={{background: `${backgroundColor}`, color: '#fff', borderTop: `${borderTop}  var(--colorSecondary) solid`}}
        contentArrowStyle={{ borderRight: `7px solid  ${backgroundColor}` }}
        date={date}
        iconStyle={{ background: `${indicatorColor}`, color: '#fff' }}
        icon={<img className={style.icon} src={carrierPhoto} alt="carrierPhoto"></img>}>
      <Story title= "a beautifull day in Holland!" date="2019-12-9" location="Amsterdam" content="this is such an awesome place and I wanted to share this with you guys. and i like this a lot. this is just some placeholder text to visualise the visuals on the desktop computer, please sent help because I am honnestly going to kill mysellf after this week" image={image} />

    </VerticalTimelineElement>

    

    
  </VerticalTimeline>
    </div>
  </>
  );
}

export default TimeLine;