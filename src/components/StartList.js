import React, {Component} from 'react'
import MatchMarket from './MatchMarket'
import Match from './Match'
import Loading from './Loading'
import { FixedSizeList as List } from 'react-window'
import { AutoSizer } from 'react-virtualized'

export default class StartList extends Component {
    renderRow = ({index, style}) => {
        return (
            <div className="matchMapContainer" style={style} key={this.props.matches.indexOf(this.props.matches[index]) + 8}>
                <MatchMarket name={this.props.matches[index].event && this.props.matches[index].event.Name}/>
                <div className="matchListContainer">
                    <Match match={this.props.matches[index]} />
                </div>
            </div>
        )
    }
    render() {
        console.log(this.props.matches)
        if (this.props.matches.length > 0) {
            return (
                <AutoSizer>
                    {({height, width}) => (
                        <List
                            className="List"
                            height={height}
                            itemCount={this.props.matches.length}
                            itemSize={50}
                            width={width}
                        >
                            {this.renderRow}
                        </List>
                    )}
                </AutoSizer>
            )
        } else {
            return (
                <Loading />
            )
        }
    }
}
