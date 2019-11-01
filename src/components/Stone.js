/**
 * Created by rdors on 2017-04-02.
 */
import React from "react";
import {Entity} from "aframe-react";

export default props => (
    <Entity
            visible={props.stoneVisible}
            position={"0 0.2 " + -props.dementorsRoom}>

        <a-obj-model scale="0.5 2 0.5" src="#rock-obj" mtl="#rock-mtl"/>
    </Entity>

)