import React from 'react';
import ColorSteps from './components/ColorSteps';
import MainColorCard from './components/MainColorCard';
import TriangleColors from './components/TriangleColors';

export const PopupContext = React.createContext(null);

export function App (props) {
    const [shouldShowPopup, setShouldShowPopup] = React.useState(false)
    
    function showPopup() {
        setShouldShowPopup(true)
        setTimeout(() => {
            setShouldShowPopup(false)
        }, 1500)
    }
    
    const rgb = props.rgb
    
    const popupContent = (
        <div className='popupIndoClipboard'>
            Color copied to clipboard!
        </div>
    )
    
    return <>
        <div className='page'>
            <PopupContext.Provider value={showPopup}>
                <MainColorCard rgb={rgb} />

                <div className='additionalColors'>
                    <ColorSteps rgb={rgb} step={20} />
                    <ColorSteps rgb={rgb} step={-20} />
                    <TriangleColors rgb={rgb} />
                </div>
            </PopupContext.Provider>

            { shouldShowPopup ? popupContent : <></> }
        </div>
    </>
}
