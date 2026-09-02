import User from './User';
import UserClass from './UserClass';
import React from 'react';
import LifeCycle from "./LifeCycle";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
        this.state = {
            author: "NA"
        }
    }

    componentDidMount() {
        console.log("Parent Did Mount");
        this.setState({
            author: "Kanak"
        })
    }

    render() {
        console.log("Parent Render Called");
        return <>
            <User name={"Kanak (function)"} location={"Bhopal (function)"} />
            <UserClass name={"Child 1"} location={"Child 1"} />
            <UserClass name={"Child 2 "} location={"Child 2"} />

            <LifeCycle author={this.state.author} />
        </>
    }
}

export default About;