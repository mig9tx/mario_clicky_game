import React from "react";

// by extending the React.component class, Counter inherits functionality form it

class Score extends React.Component {
    // Setting the initial state of the counter Component

state = {
    count: 0
};

//handleIncrement incresases this.state.count by 1
handleIncrement = () => {
    //We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
};

render() {
    return (
        <div className="card-body">
            <p className="card-text">Your Score: {this.state.count} </p>
        </div>
    );
}

}

export default Score;