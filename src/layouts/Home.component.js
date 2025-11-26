
import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Todo from '../components/Todo/Todo.component'

const Home = () => {
  return (
    <Container className='mt-5'>
        <Row>
          <Col>
            <Todo />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
            <Todo />
        </Col>
        <Col>
            <Todo />
        </Col>
        <Col>
            <Todo />
        </Col>
      </Row>
    </Container>
  )
}

export default Home