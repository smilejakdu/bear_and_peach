import React from 'react'
import TodayBody from '../../components/TodayBody/TodayBody';
import { Body, BodyBorder } from "./Today.style";


const Today=()=> {
    return (
        <Body>
            <BodyBorder>
                <TodayBody></TodayBody>
            </BodyBorder>
        </Body>
    )
}

export default Today
