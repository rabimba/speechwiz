
import React from "react";
import {Animation, Entity} from "aframe-react";

export default props => {

    let animation = props.voldemortVisible ? "" :
        ( <a-animation attribute="rotation"
                       dur="1000"
                       to="0 0 90"
                       repeat="0.5"></a-animation>)

    return (
        <Entity>
            <Entity scale="0.04 0.04 0.04"
                    position={"0 0.01 " + (-props.y + props.y/6)} rotation="0 0 0">

                <a-obj-model src="#voldemort-obj" mtl="#voldemort-mtl" >{animation}</a-obj-model>
            </Entity>


        </Entity>
    )
}