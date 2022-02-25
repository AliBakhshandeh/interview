import React from 'react'
import ModalGenerator from '../components/ModalGenerator'
import UserForm from "../components/UserForm/UserForm"

const UserAppend = (props) => {
    return (
        // Modal Generator for show modal with Props.children
        <ModalGenerator onHide = {props.onHide} show = {props.show}>
        <div className='HOC'>
            {/* show userForm in to modal generator */}
        <UserForm abilitieslist = {props.abilitieslist} userInfo = {props.userInfo} UserInfoHandler = {props.UserInfoHandler} abilitiesHandler = {props.abilitiesHandler} NewUser = {props.NewUser}/>
    </div>
    </ModalGenerator>
    )
    }
export default UserAppend