import React from "react";
import "./Splash.css";
import { splashSection } from "../../portfolio";

export default function Splash() {
    return (
        <div className="splash-main" id="splash">
            <div className="splash-main-div">
                <div className="splash-name-div-top-border"></div>
                <div className="splash-name-div-content">
                    <div className="splash-logo-div">
                        <img alt="=MyAvatar picture" src={require("../../assets/images/az-dp280x280.png")}></img>
                    </div>
                    <div className="splash-name-details">
                        <span className="splash-name-details-name">{splashSection.username}</span>
                        <span className="splash-name-details-role">{splashSection.jobTitle}</span>
                    </div>
                </div>
                <div className="splash-name-div-bottom-border"></div>
            </div>
        </div>
    );
}