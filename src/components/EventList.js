import React, {PureComponent} from 'react'
import Match from './Match'
import MatchMarket from './MatchMarket'
import Loading from './Loading'
import { VariableSizeList as List } from 'react-window'
import { AutoSizer } from 'react-virtualized'

export default class EventList extends PureComponent {
    getItemSize = index => 24 + this.props.matches[index].Match.length * 21

    renderRow = ({index, style}) => {
        console.log(style)
        console.log('returned')
        console.log(this.props.matches.length)
        return (
            <div className="matchMapContainer" key={this.props.matches.indexOf(this.props.matches[index]) + 8} style={style}>
                <MatchMarket name={this.props.matches[index].$.Name}/>
                <div className="matchListContainer">
                    {this.props.matches[index].Match.map((match) => {
                        return (
                            <Match match={match} key={this.props.matches[index].Match.indexOf(match) + 88} />
                        )
                    })}
                </div>
            </div>
        )
    }
    render() {
        if (this.props.matches.length > 0) {
            return (
                <AutoSizer>
                    {({height, width}) => (
                        <List
                            className="List"
                            height={height}
                            itemCount={this.props.matches.length}
                            itemSize={this.getItemSize}
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
