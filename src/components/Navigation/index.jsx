import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <Navbar
      bg="light"
      variant="light"
      style={{ position: "relative", border: "1px solid #c9c9c9" }}
    >
      <Container>
        <Navbar.Brand sticky="top">
          <img
            src="https://iconscout.com/iconscout_logo-1024x1024.png"
            width="30"
            height="30"
            className="d-inline-block align-top p-1"
            alt="React Bootstrap logo"
          />
          <Navbar.Text>Users Abilites</Navbar.Text>
        </Navbar.Brand>
        {/* modal button for show modal */}
        <Button
          color="primary"
          style={{
            borderRadius: "50%",
            position: "absolute",
            right: "20px",
            top: "35px",
            borderColor: "#0a58ca",
            boxShadow: " 0 0 0 0.25rem rgb(49 132 253 / 50%)",
          }}
          onClick = {() => props.handleShow()}
        >
          &#9977;
        </Button>
      </Container>
    </Navbar>
  );
};
export default React.memo(Navigation);
