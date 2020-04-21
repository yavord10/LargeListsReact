import React from 'react'

export default function MatchMarket(props) {
    return (
        <div className="matchMarket row mx-auto">
            <div className="marketCol col-8 mx-auto">
                <div className="marketName mx-auto marketItem">{props.name}</div>
            </div>
            <div className="marketCol col-4 mx-auto">
                <div className="row">
                    <div className="marketCol col-5 mx-auto">
                        <div className="marketBet mx-auto matchCenter">Market</div>
                    </div>
                    <div className="col-7 mx-auto">
                        <div className="row">
                            <div className="marketCol col mx-auto">
                                <div className="oddOne mx-auto matchCenter">1</div>
                            </div>
                            <div className="marketCol col mx-auto">
                                <div className="oddTwo mx-auto matchCenter">X</div>
                            </div>
                            <div className="marketCol col mx-auto">
                                <div className="oddThree mx-auto matchCenter">2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
