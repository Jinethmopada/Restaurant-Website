import {Component} from "react";

class Profile extends Component{
    render(){
        return(
            <>
             <h1>Profile Section</h1>
             <h2>{this.props.name}</h2>
             <h3>{this.props.role}</h3>
            </>
        )
    }
}

export default Profile