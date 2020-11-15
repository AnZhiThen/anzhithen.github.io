import React from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import Button from "../../components/button/Button";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";


export default function WorkExperience() {
    if(workExperiences.viewExperiences){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">{workExperiences.experienceTitle}</h1>
                        <div className="experience-cards-div">
                        {workExperiences.experience.map((card) => {
                            return (
                                <ExperienceCard
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                        <div className="experience-more-link">
                            <Button text="More work experiences" newTab={true} href={workExperiences.linkedinLink} />
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
