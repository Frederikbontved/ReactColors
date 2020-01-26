import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
import SeedColors from './seedColors';
import { generatePalette } from './colorHelpers'

class Palette extends Component {
    render() {
        console.log(generatePalette(SeedColors[4]));

        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ));

        return (
            <div className="Palette">
                { /* navbar goes here */ }
                <div className="Palette-colors">
                {colorBoxes}
                </div>
                { /* footer */ }
            </div>
        )
    }
}

export default Palette;
