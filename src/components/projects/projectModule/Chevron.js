import React from "react"

import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Chevron(props) {
    return (
        <div>
            <FontAwesomeIcon
                icon={faChevronUp}
                className={props.className}
                height={props.height}
                width={props.width}
                fill={props.fill}
            />
        </div>
    );
}

export default Chevron