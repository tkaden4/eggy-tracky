import React from "react";

import Counter from "./Counter";

import egg from "../../assets/egg.png";

import "./app.sass";

export class App extends React.Component {
    constructor(props) {
        super(props);

        // bind events
        this.onClickUp = this.onClickUp.bind(this);
        this.onClickDown = this.onClickDown.bind(this);

        console.log(props);

        this.state = {
            // number of eggs eaten
            count: this.props.client.count
        };
    }

    updateState() {
        /*
        fetch("/users", {
            method: "POST",
            headers: {
                'Accept': 'application/json'
                'Content-Type': 'application/json'
            }
            body: JSON.stringify({})
        });
        */
    }

    onClickUp() {
        this.setState({
            count: this.state.count + 1
        });
    }

    onClickDown() {
        let count = this.state.count;
        if (count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    render() {
        return <div>
            <div id="header">
                <div id="title">
                    Eggy Tracky
                </div>
                <div id="stats">
                    {this.props.other.name} has eaten
                    <span className="egg-count">
                        {this.props.other.count}
                    </span>
                    egg(s)
                </div>
            </div>
            <div className="app">
                <Counter
                    onUp={this.onClickUp}
                    onDown={this.onClickDown}
                    count={this.state.count} />
            </div>
        </div >;
    }
}

export default App;