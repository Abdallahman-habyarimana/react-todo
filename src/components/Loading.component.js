import { Container, Row, Col, Spinner } from "react-bootstrap"


const Loading = () => {
  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <Spinner animation="grow" />
        </Col>
      </Row>
    </Container>
  )
}

export default Loading