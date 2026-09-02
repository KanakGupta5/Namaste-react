import React from "react";

class LifeCycle extends React.Component {

    constructor(props) {
        super(props);
        console.log("Constructor called");
        this.state = {
            userInfo: {
                name: "Name NA",
                location: "Location NA",
            },
            count: 0
        };


    }

    async componentDidMount() {
        console.log("Component DidMount Called");
        this.timer = setInterval(() => {
            console.log("set interval");
        }, 1000);
        const data = await fetch("https://api.github.com/users/1");
        const jsonData = await data.json();

        this.setState({
            userInfo: jsonData,
            count: this.state.count + 2
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component DidUpdate Called");
        if (prevState.count != this.state.count) { //this replicates the behaviour of functional component where useEffect is called with count as its dependency array
            console.log("prevState count : ", prevState.count);
            console.log("thisState count : ", this.state.count);
        }

        console.log("prevProps author : ", prevProps.author);
        console.log("new Props author : ", this.props.author);
    }

    componentWillUnmount() {
        console.log("Component WillUnmount Called");
        clearInterval(this.timer);
    }

    render() {
        console.log("Component render called");
        return (
            <>
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>{this.state.userInfo.name}</h2>
                <h2>{this.state.userInfo.location}</h2>

            </>
        )
    }
}

export default LifeCycle;