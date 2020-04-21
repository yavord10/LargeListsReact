import React from 'react'

export default function Match(props) {
    if (props.match) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const date = new Date(Date.parse(props.match.$.StartDate))
        const dateDate = date.getDate()
        const dateMonth = date.getMonth()
        return (
            <div className="matchContainer row mx-auto">
                <div className="matchCol col-8 mx-auto">
                    <div className="row">
                        <div className="matchCol col-9 mx-auto">
                            <div className="matchName mx-auto matchItem">{props.match.$.Name}</div>
                        </div>
                        <div className="matchCol col-3 mx-auto">
                            <div className="matchDate mx-auto matchItem">{dateDate} {months[dateMonth]} {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                        </div>
                    </div>
                </div>
                <div className="matchCol col-4 mx-auto">
                    {props.match.Bet ? 
                        <div className="row">
                            <div className="matchCol col-5 mx-auto">
                                <div className="matchBet mx-auto matchCenter">{props.match.Bet && props.match.Bet[0].$.Name}</div>
                            </div>
                            {props.match.Bet[0].Odd[2] ?
                                <div className="oddsCol col-7 mx-auto">
                                    <div className="row">
                                        <div className="matchCol col mx-auto">
                                            <div className="oddOne mx-auto matchCenter">{props.match.Bet[0].Odd[0] && props.match.Bet[0].Odd[0].$.Value}</div>
                                        </div>
                                        <div className="matchCol col mx-auto">
                                            <div className="oddTwo mx-auto matchCenter">{props.match.Bet[0].Odd[1] && props.match.Bet[0].Odd[1].$.Value}</div>
                                        </div>
                                        <div className="matchCol col mx-auto">
                                            <div className="oddThree mx-auto matchCenter">{props.match.Bet[0].Odd[2] && props.match.Bet[0].Odd[2].$.Value}</div>
                                        </div>
                                    </div>
                                </div>
                            : 
                            <div className="oddsCol col-7 mx-auto">
                                <div className="row">
                                    <div className="matchCol col mx-auto">
                                        <div className="oddOne mx-auto matchCenter">{props.match.Bet[0].Odd[0] && props.match.Bet[0].Odd[0].$.Value}</div>
                                    </div>
                                    <div className="matchCol col mx-auto"></div>
                                    <div className="matchCol col mx-auto">
                                        <div className="oddThree mx-auto matchCenter">{props.match.Bet[0].Odd[1] && props.match.Bet[0].Odd[1].$.Value}</div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    : null}
                </div>
            </div>
        )
    } else {
        return (
            <div>no matches</div>
        )
    }
}
