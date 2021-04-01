import React from 'react'
import {UserProfileBorder} from "./TodayBody.style"
import bear_img from "../../utils/images/bear.png"

const TodayBody=()=> {
    return (
        <div>
            <UserProfileBorder>
                <div className="img_border">
                    <img src={`${bear_img}`} alt="" height="50" width="50"/>
                </div>
                <div className="user_info">
                    <div className="nickname">라이언</div>
                    <div className="date">2021.04.01</div>
                </div>
            </UserProfileBorder>
        </div>
    )
}

export default TodayBody
