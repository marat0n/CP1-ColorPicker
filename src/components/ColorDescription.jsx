import React from 'react';
import { PopupContext } from '../App'

const ColorDescription = props => {
    const rgb = props.rgb
    const hex = (
        rgb.r.toString(16) +
        rgb.g.toString(16) +
        rgb.b.toString(16)).toUpperCase()

    const setShouldShowPopup = React.useContext(PopupContext)

    const copyColor = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
        setShouldShowPopup(true)
    }

    return <div className={`colorDescription ${props.alignClass}`}>
        <span
            // onClick={() => {navigator.clipboard.writeText(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}}
            onClick={() => {copyColor(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}}
        >
            RGB: {rgb.r}, {rgb.g}, {rgb.b}
        </span>
        <br />
        <span onClick={() => {copyColor(`#${hex}`)}}>
            HEX: #{hex}
        </span>
    </div>
}

export default ColorDescription