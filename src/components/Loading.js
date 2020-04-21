import React from 'react'

export default function Loading() {
    return (
        <div className="row loadingDiv">
            <div className="loadingContainer">
                <div className="dotContainer row">
                    <div className="mx-auto row">
                        <div className="dot dot1 ml-auto mr-1"></div>
                        <div className="dot dot2 mx-auto"></div>
                        <div className="dot dot3 mr-auto ml-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
