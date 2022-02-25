import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import UsersList from "../components/UsersList/index";
import UserAppend from "../hoc/UserAppend";
import { usersAction } from "../redux/actions/usersAction";
// UsersPage for show all users and Appned new user with modal
const UsersPage = (props) => {
  // Object Freeze for State user info
  const initialFormUser = Object.freeze({
    firstname: "",
    lastname: "",
    age: "",
    abilities: []
  });
  // user info state
  const [userInfo, setUserInfo] = useState(initialFormUser);
  // Dispatcher Redux
  const dispatch = useDispatch();
// modal show/close handler state
  const [show, setShow] = useState(false);
  // modal close handler
  const handleClose = () => {
    setUserInfo(initialFormUser)
    setShow(false)
  };
  // modal Show handler
  const handleShow = () => setShow(true);
//  handler append abilities to userinfo abilities
  const abilitiesHandler = (event) => {
    if (Boolean(event.target.checked)) {
      const prevabilitieslist = userInfo.abilities;
      prevabilitieslist.push(event.target.name);
      setUserInfo({...userInfo,abilities:prevabilitieslist});
    } else {
      const index = userInfo.abilities.indexOf(event.target.name);
      const prevabilitieslist = userInfo.abilities;
      prevabilitieslist.splice(index, 1);
      setUserInfo({...userInfo,abilities:prevabilitieslist});
    }
  };
  // dispatch new user to store Redux
  const dispatchNewUser = () => {
    dispatch(usersAction(userInfo));
  };
  // Get value inputs with User Info Handler
  const UserInfoHandler = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value.trim(),
    });
  };
  return (
    <div>
      {/* Navigation */}
      <Navigation handleShow={handleShow} />
      <div className="mt-5">
        {/* Table User List */}
        <UsersList UsersList={props.users} />
        {/* HOC UserAppend */}
        <UserAppend
          abilitieslist={userInfo.abilities}
          userInfo={userInfo}
          UserInfoHandler={UserInfoHandler}
          abilitiesHandler={abilitiesHandler}
          NewUser={() => dispatchNewUser()}
          show={show}
          onHide={handleClose}
        />
      </div>
    </div>
  );
};
// Get State redux with mapstatetoprops
const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, null)(UsersPage);
