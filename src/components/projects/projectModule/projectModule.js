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

    return (
        <div className="accordion_section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion_title">{props.project.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"}/>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion_content">
                <div className="accordion_text" dangerouslySetInnerHTML={{__html: props.project.description}} />
            </div>
        </div>
    );
}

export default ProjectModule