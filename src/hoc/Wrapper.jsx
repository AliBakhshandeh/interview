import { Container } from "react-bootstrap";

export default function Wrapper (props) {
    return (
        <Container>
            {props.children}
        </Container>
    )   
}