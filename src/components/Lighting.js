import React from 'react'
import {Entity} from 'aframe-react'

export default props => (
  <Entity>


      <Entity light={{type: 'ambient', color: props.color}}/>
    {/*<Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, -3]}/>*/}
    {/*<Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>*/}
      {/*<a-entity id="light" light="type: hemisphere; color: #000; groundColor: #000; intensity: 2"*/}
                {/*lightAfter="type: hemisphere; color: #fff; groundColor: #fff; intensity: 2" ></a-entity>*/}
  </Entity>
)