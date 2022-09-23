import React from 'react';
import ColorDescription from './ColorDescription';

const ColorSteps = props => {
    const rgb  = props.rgb
    const step = props.step

    const min = Math.min
    const max = Math.max

    const colorSteps = [
        {
            r: max(min(rgb.r + step, 255), 0),
            g: max(min(rgb.g + step, 255), 0),
            b: max(min(rgb.b + step, 255), 0)
        },
        {
            r: max(min(rgb.r + step * 2, 255), 0),
            g: max(min(rgb.g + step * 2, 255), 0),
            b: max(min(rgb.b + step * 2, 255), 0)
        },
        {
            r: max(min(rgb.r + step * 3, 255), 0),
            g: max(min(rgb.g + step * 3, 255), 0),
            b: max(min(rgb.b + step * 3, 255), 0)
        }
    ]

    const cs = colorSteps

    return <div className='colorSteps'>
        <div
            className='smallColorBox'
            style={{
                backgroundColor: `rgb(${cs[0].r}, ${cs[0].g}, ${cs[0].b})`
            }}
        >
            <ColorDescription rgb={cs[0]} alignClass='center' />
        </div>

        <div
            className='smallColorBox'
            style={{
                backgroundColor: `rgb(${cs[1].r}, ${cs[1].g}, ${cs[1].b})`
            }}
        >
            <ColorDescription rgb={cs[1]} alignClass='center' />
        </div>

        <div
            className='smallColorBox'
            style={{
                backgroundColor: `rgb(${cs[2].r}, ${cs[2].g}, ${cs[2].b})`
            }}
        >
            <ColorDescription rgb={cs[2]} alignClass='center' />
        </div>
    </div>
}

export default ColorSteps