import React, { useState, useRef } from "react"
import "./projectModule.scss"
import Chevron from "./Chevron"

function ProjectModule(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion_icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion_icon" : "accordion_icon rotate"
        );
    }

    const techStackRawData = props.project.techstack;
    const techStackFormattedData = techStackRawData.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``);


    return (
        <div className="accordion_section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">{props.project.title}</p>
                <div className="accordion_filler"></div>
                <a href={props.project.github} target="_blank" className="accordion_github">[github]</a>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"}/>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion_content">
                <div className="accordion_text_structure">
                    <div className="accordion_text" dangerouslySetInnerHTML={{__html: props.project.description}} />
                    <div className="accordion_techstack" dangerouslySetInnerHTML={{__html: techStackFormattedData}} />
                </div>
            </div>
        </div>
    );
}

export default ProjectModule