import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">{contactInfo.title}</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
                    <div className="contact-text-div">
                        <a className="contact-detail"
                            target="_blank" rel="noopener noreferrer"
                            href={"https://www.google.com/maps/place/"+contactInfo.location}>{emoji("📍: "+contactInfo.location)}</a>
                        <a className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{emoji("📨: "+contactInfo.email_address)}</a>
                        <SocialMedia/>
                    </div>
                </div>
                <div className="contact-image-div">
                    <img className="contact-display-picture" alt="This is my profile picture" src={require("../../assets/images/contact-dp.JPG")}></img>
                </div>
            </div>
        </div>
        </Fade>
    );
}
