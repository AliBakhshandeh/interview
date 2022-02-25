import React from "react";
import { connect } from "react-redux";

const UsersPage = (props) => {

    console.log(props)
    return(
        <h1>Hello</h1>
    )
}

const mapStateToProps = (state) => ({ 
    users: state.users 
})

export default connect(mapStateToProps,null)(UsersPage)