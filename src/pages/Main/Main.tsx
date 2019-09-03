import React, { Component } from 'react'
import {persistShapeItem, endProccess} from './ducks/actions';
import Map from '@careebiz/components/Map'
import ShapeForm from '@careebiz/components/ShapeForm';
interface MainProps {
    selectedDrawingMode: string;
    persistShapeItem: typeof persistShapeItem;
    endProccess: typeof endProccess;
}

export default class Main extends Component<MainProps> {
    handleAddShape = (meta) => {
        this.props.persistShapeItem(meta);
        this.props.endProccess()
    }

    render() {
        return (
            <div>
                <Map onAddShape={this.handleAddShape} selectedDrawingMode={this.props.selectedDrawingMode}/>
                <ShapeForm />
            </div>
        )
    }
}
