import React from "react";
import { Table } from "react-bootstrap";
import "./UsersList.css"
// dynamic Header UsersTable
const TableHead = ["#", "firstname", "lastname", "age", "abilites"];

const UsersList = (props) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          {/* Thead table Generator */}
          {TableHead.map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {/* show Users on table */}
        {props.UsersList.map((user, index) => {
          return (
            <tr key={index}>
              <td>
                {index}
              </td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.age}</td>
              <td style={{ padding: "20px 0" }}>
                {/* show abilities user */}
                {user.abilities.map((abilite, index) => {
                  return (
                    <span
                    className="abilitiesTag"
                      key={index}
                    >
                      {abilite}
                    </span>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UsersList;
