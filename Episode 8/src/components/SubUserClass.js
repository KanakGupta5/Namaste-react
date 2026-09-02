import React from "react";

class SubUserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.name + " Constructor Called");
    }

    componentDidMount() {
        console.log(this.props.name + " Component DidMount Called");
    }

    render() {
        console.log(this.props.name + "Render Called");
        return (
            <>
            <h2>Name : {this.props.name}</h2>
            </>
        )
    }
}

export default SubUserClass;