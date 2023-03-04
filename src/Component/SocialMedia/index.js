import React , {useState , useEffect} from "react";
import {Social_Media, SocialDesk, Social, Span, SpanInfo, Icon} from './Style.js';
import axios from "axios";

const SocialMedia = () => {
  const [icons , setIcons] = useState([])
  useEffect  ( () => {
    axios.get('js/data.json').then(res => {setIcons(res.data.social)})
  } , [] )

  const SocialIcons = icons.map((iconItem) => {
    return (
      <Social item = {iconItem.id} key={iconItem.id}>
          <Icon  className={iconItem.icon} ></Icon>
          <SocialDesk>
            <Span >{iconItem.title}</Span>
            <SpanInfo >{iconItem.body}</SpanInfo>
          </SocialDesk>
      </Social>
    );
  })

  return (
    <Social_Media>
      {SocialIcons}
    </Social_Media>
  );
}

export default SocialMedia;
