import React from 'react'
import {Entity} from 'aframe-react'

export default props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 5000}}
    material={{color: props.color, shader: 'flat'}}
    scale="1 1 -1"
    />
);
