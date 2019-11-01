/**
 * Created by rdors on 2017-04-02.
 */
import React from "react";
import {Entity} from "aframe-react";

export default props => (
    <Entity>
        <Entity
            material={
                {
                    src: '#floor',
                    side: "double"
                }
            }
            position={"0 -1 " + -props.y/2}
            geometry={
                {
                    primitive: "plane",
                    width: props.x,
                    height: props.y
                }
            }
            rotation={[-90, 0, 0]}
        >
        </Entity>

        <Entity
            material={
                {
                    src: '#wall',
                    side: "double"
                }
            }
            position={-props.x/2 + " " + (props.height/2 - 1) + " " + -props.y/2}
            geometry={
                {
                    primitive: "plane",
                    width: props.y,
                    height: props.height
                }
            }
            rotation={[0, 90, 0]}
        >
        </Entity>

        <Entity
            material={
                {
                    src: '#wall',
                    side: "double"
                }
            }
            position={props.x/2 + " " + (props.height/2 - 1) + " " + -props.y/2}
            geometry={
                {
                    primitive: "plane",
                    width: props.y,
                    height: props.height
                }
            }
            rotation={[0, -90, 0]}
        >
        </Entity>

        <Entity
            material={
                {
                    src: '#wall',
                    side: "double"
                }
            }
            position={"0 " + (props.height/2 - 1) + " 0"}
            geometry={
                {
                    primitive: "plane"
                    , width: props.x
                    , height: props.height
                }
            }
            rotation={[180, 0, 0]}
        >
        </Entity>

        <Entity
            material={
                {
                    src: '#wall',
                    side: "double"
                }
            }
            position={"0 " + (props.height/2 - 1) + " " + -props.y}
            geometry={
                {
                    primitive: "plane"
                    , width: props.x
                    , height: props.height
                }
            }
        >
        </Entity>

    </Entity>
)




