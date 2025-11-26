
import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Todo from '../components/Todo/Todo.component'

const Home = () => {
  return (
    <Container sm={1} md={2} lg={3}>
        <Row>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col sm>
            <Todo />
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  )
}

export default Home