import React from "react";
import MarkDownWrap from "../components/MarkDownWrap";
import { aboutMd } from "../utils/config"


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <MarkDownWrap markdownText={aboutMd}/>
        </div>
    )
}