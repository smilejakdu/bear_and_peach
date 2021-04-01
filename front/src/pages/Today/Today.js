import React from 'react'
import UserProfile  from '../../components/UserProfile/UserProfile';
import { Body, BodyCenter } from "./Today.style";


const Today=()=> {
    return (
      <Body>
        <BodyCenter>
          <UserProfile></UserProfile>
        </BodyCenter>
      </Body>
    );
}

export default Today
