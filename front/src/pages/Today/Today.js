import React from 'react'
import TodayBody from '../../components/TodayBody/TodayBody';
import { Body, BodyCenter } from "./Today.style";


const Today=()=> {
    return (
      <Body>
        <BodyCenter>
          <TodayBody></TodayBody>
        </BodyCenter>
      </Body>
    );
}

export default Today
