import React from 'react'

function Alert(props) {
    return (
        <div>
            <div id="liveAlertPlaceholder">
                <strong>{props.alert.type}</strong>:{props.alert.message}
                {/* <button type="button" className="btn btn-primary" id="liveAlertBtn">Show live alert</button> */}
            </div>
        </div>
    )
}

export default Alert