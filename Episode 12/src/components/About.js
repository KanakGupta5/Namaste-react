import UserContext from "../util/UserContext";
import React from "react";
//*************************** React Context *******************************
class About extends React.Component {
    render() {
        return <>
            <div>
                About Us Page!
            </div>
            <UserContext.Consumer>
                {({ loggedInUser }) => <p>{loggedInUser}</p>}
            </UserContext.Consumer>
        </>
    }
}

export default About;