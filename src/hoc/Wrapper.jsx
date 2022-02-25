import { Container } from "react-bootstrap";

export default function Wrapper(props) {
  return (
    // Hoc Wrapper For set bootstrap container
    <Container style={{ minHeight: "100vh", background: "#fff",paddingTop:"10px" }}>
      {props.children}
    </Container>
  );
}
