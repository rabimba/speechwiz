/**
 * Created by rdors on 2017-04-02.
 */
import React from "react";
import {Entity} from "aframe-react";


export default props => {
    let animation = props.doorVisible ? "" :
        ( <a-animation attribute="rotation"
                       dur="1000"
                       to="0 90 0"
                       repeat="0.5"></a-animation>)

    return (
        <Entity
            material={
            {
                src: '#door',
                side: "double"
            }
            }
            position={"0 " + (props.height / 2 - 1) + " " + -props.lumosRoom}
            geometry={
            {
                primitive: "plane"
                , width: "2"
                , height: props.height
            }
            }
        >
            {animation}
        </Entity>
    )

}