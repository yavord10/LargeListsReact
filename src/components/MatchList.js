import React, { Component } from 'react'
import NavBar from './NavBar'
import EventList from './EventList'
import StartList from './StartList';

export default class MatchList extends Component {
    constructor() {
        super();
        this.state = {
            matches: [],
            sortedMatches: [],
            sortedByStart: true,
            sortedByEvent: false
        }
        this.sortedMatches = [];
    }
    handleSort = (e) => {
        console.log(e.target)
        if (e.target.className.includes("sortStart")) {
            e.target.id = "clicked"
            let sortEventBtn = document.getElementsByClassName('sortEvent')[0]
            sortEventBtn.id = ""
            this.setState({
                sortedByStart: true, 
                sortedByEvent: false
            })
        }
        if (e.target.className.includes("sortEvent")) {
            e.target.id = "clicked"
            let sortStartBtn = document.getElementsByClassName('sortStart')[0]
            sortStartBtn.id = ""
            this.setState({
                sortedByEvent: true, 
                sortedByStart: false
            })
        }
    }
    componentDidMount() {
        fetch("http://localhost:8081/matches")
        .then(res => res.json())
        .then(res => {
            let arrayMatches = res.XmlSports.Sport[0].Event
            let finalArray = []
            console.log(arrayMatches)
            arrayMatches.forEach((event) => {
                event.Match.forEach(match => {
                    match.event = event.$
                    finalArray.push(match)
                })
            })
            const sortedMatches = finalArray.sort((a,b) => {
                const dateA = new Date(Date.parse(a.$.StartDate))
                const dateB = new Date(Date.parse(b.$.StartDate))
                return dateA - dateB
            })
            this.setState({
                matches: res.XmlSports.Sport[0].Event,
                sortedMatches: sortedMatches
            })
        })
        .catch(err => 
            console.log(err)
        )
    }
    render() {
        return (
            <div>
                <NavBar handleSort={this.handleSort}/>
                <div className="mainListContainer">
                    {this.state.sortedByEvent ? <EventList matches={this.state.matches}/> : <StartList matches={this.state.sortedMatches} />}
                </div>
            </div>
        )
    }
}
