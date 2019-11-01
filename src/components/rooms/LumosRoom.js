
import React from "react";
import {Entity} from "aframe-react";
import Door from "./../Door";

export default props => (
    <Entity>
        <Entity
            material={
                {
                    src: '#wall',
                    side: "double"
                }
            }
            position={-((props.x/2 - 1)/2 + 1) + " " + (props.height/2 - 1) + " " + -props.lumosRoom}
            geometry={
                {
                    primitive: "plane",
                    width: props.x/2 - 1,
                    height: props.height
                }
            }
        >
        </Entity>

        <Entity
            material={
                {
                    src: '#wall',
                    side: "double"
                }
            }
            position={((props.x/2 - 1)/2 + 1) + " " + (props.height/2 - 1) + " " + -props.lumosRoom}
            geometry={
                {
                    primitive: "plane",
                    width: props.x/2 - 1,
                    height: props.height
                }
            }
        >
        </Entity>

        <Door
            doorVisible={props.doorVisible}
            lumosRoom={props.lumosRoom}
            height={props.height}
        />
    </Entity>
)




