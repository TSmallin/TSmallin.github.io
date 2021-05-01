import React from "react";
import MarkDownWrap from "../components/MarkDownWrap";
import { privacyMd } from "../utils/config"


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <MarkDownWrap markdownText={privacyMd}/>
        </div>
    )
}