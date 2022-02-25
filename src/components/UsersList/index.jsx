import React from "react";
import { Table } from "react-bootstrap";
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
              <td>{index}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.age}</td>
              <td>
                {/* show abilities user */}
                {user.abilities.map((abilite, index) => {
                  return (
                    <span
                      key={index}
                      style={{
                        padding: "5px 18px 8px",
                        backgroundColor: "rgb(143, 144, 145)",
                        borderRadius: "10px",
                        color: "#fff",
                        margin: "5px",
                      }}
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
