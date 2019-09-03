import React, { Component } from 'react'
import ShapeItem from '@careebiz/components/ShapeItem';
import ShapeItemAdder from '@careebiz/components/ShapeItemAdder';
import Map from '@careebiz/components/Map'
interface MainProps {

}

export default class Main extends Component<MainProps> {
    handleAddShape = (meta) => {
        console.log("meta", meta);
        
    }
    render() {
        return (
            <div>
                <Map onAddShape={this.handleAddShape}/>
            </div>
        )
    }
}
