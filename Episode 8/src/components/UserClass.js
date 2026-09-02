import React from "react";
import SubUserClass from "./SubUserClass";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.name + " Child Constructor");
        this.state = {
            count : 0,
            age : 28
        }
    }

    componentDidMount(){
        console.log(this.props.name + " Child Did Mount");
    }

    render() {
        console.log(this.props.name + " Child render");
        return (
            <>
                <div className="user-card">
                    <h2>{this.props.name}</h2>
                    <h3>{this.props.location}</h3>
                    <h4>Count : {this.state.count}</h4>
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}>Increase Count</button>
                </div>
                <SubUserClass name={"Sub Child 1"} />
            </>
        )
    }
}

export default UserClass;