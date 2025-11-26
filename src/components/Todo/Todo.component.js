import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'

const Todo = () => {
  return (
    <Card border='secondary'>
                <CardHeader style={{ background: "none" }}>
                    Quick Links
                </CardHeader>
                <CardBody>
                    <Card>
                <CardHeader as={'h6'} style={{ background: "none" }}>
                    Tasks Todo
                </CardHeader>
                <CardBody>
                    <Card.Link href="#">Create Task Todo</Card.Link>
                </CardBody>
            </Card>
                </CardBody>
            </Card>
  )
}

export default Todo