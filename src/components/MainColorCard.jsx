import React from 'react';
import ColorDescription from './ColorDescription';

const MainColorCard = props => {
    const rgb = props.rgb

    return <div
        className='mainColorCard'
        style={{
            backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
        }}>

        <ColorDescription rgb={rgb} alignClass='bottom' />
    </div>
}

export default MainColorCard