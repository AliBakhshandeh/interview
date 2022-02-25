import React from "react";
import { Button, Form } from "react-bootstrap";

// default abilities for show checkbox
const default_abilities = ["html", "css", "js", "React"];
const UserForm = (props) => {
  return (
    <Form>
      {/* get firstname User */}
      <Form.Group className="mb-3" controlId="Firstname">
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          value={props.userInfo.firstname}
          onChange={(event) => props.UserInfoHandler(event)}
          type="text"
          placeholder="Firstname"
          name="firstname"
        />
      {/* get lastname User */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="Lastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          value={props.userInfo.lastname}
          onChange={(event) => props.UserInfoHandler(event)}
          type="text"
          placeholder="Lastname"
          name="lastname"
        />
        {/* get age User */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          value={props.userInfo.age}
          onChange={(event) => props.UserInfoHandler(event)}
          type="text"
          placeholder="Age"
          name="age"
        />
        {/* show abilities selected */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Abilities</Form.Label>
        <Form.Control
          type="text"
          placeholder="Abilities"
          name="Abilities"
          value={props.abilitieslist}
          disabled
        />
      </Form.Group>
      <div>
        {/* show abilities */}
        {default_abilities.map((type, index) => {
          return (
            <div key={index} className="mb-3">
              <Form.Check
                type={"checkbox"}
                id={type}
                label={type}
                onChange={props.abilitiesHandler}
                name={type}
                title={type}
              />
            </div>
          );
        })}
      </div>
      {/* dispatch new user to redux */}
      <Button onClick={props.NewUser}>Create</Button>
    </Form>
  );
};
export default UserForm;
