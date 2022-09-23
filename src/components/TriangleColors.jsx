import React from 'react';
import ColorDescription from './ColorDescription';

const TriangleColors = props => {
    const rgb = props.rgb

    const colors = [
        {
            r: rgb.b,
            g: rgb.r,
            b: rgb.g
        },
        {
            r: rgb.g,
            g: rgb.b,
            b: rgb.r
        }
    ]

    const c = colors

    return <div className={`colorSteps`}>
        <div
            className='smallColorBox'
            style={{
                backgroundColor: `rgb(${c[0].r}, ${c[0].g}, ${c[0].b})`
            }}
        >
            <ColorDescription rgb={c[0]} alignClass='center' />
        </div>

        <div
            className='smallColorBox'
            style={{
                backgroundColor: `rgb(${c[1].r}, ${c[1].g}, ${c[1].b})`
            }}
        >
            <ColorDescription rgb={c[1]} alignClass='center' />
        </div>
    </div>
}

export default TriangleColors