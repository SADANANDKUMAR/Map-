import React from 'react';
import {Component} from 'react'
import Map from 'mapmyindia-react/dist/Map';

class Location extends Component {
  
  
    state = {  } 
    
    render() { 
        return (
            <>
            <h4> location tracking </h4>
            <Map
        markers={[
          {
            position: [18.5314, 73.845],
            
            draggable: true,
            title: "Marker title",
            onClick: e => {
              console.log("clicked ");
            },
            onDragend: e => {
              console.log("dragged");
            }
          }
        ]}
      />
            </>
        );
    }
}
 
export default Location;