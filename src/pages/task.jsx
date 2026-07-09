import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TasksListUI from '../demo06/taskslistui';

function TaskPage() {

    const tasks = [
        { _id: 1, Title: "assignmnet#1 of react course", Description: "Description of assignment#4. Description of assignment#4 Description of assignment#4", DueDate: new Date("2026-3-5"), Progress: 15 },
        { _id: 2, Title: "assignmnet#2 of react course", Description: "Description of assignment#4. Description of assignment#4 Description of assignment#4", DueDate: new Date("2026-3-5"), Progress: 15 },
        { _id: 3, Title: "assignmnet#3 of react course", Description: "Description of assignment#4. Description of assignment#4 Description of assignment#4", DueDate: new Date("2026-3-5"), Progress: 15 },
        { _id: 4, Title: "assignmnet#4 of react course", Description: "Description of assignment#4. Description of assignment#4 Description of assignment#4", DueDate: new Date("2026-3-5"), Progress: 15 },
    ]

    return (
        <>
            <Container fluid className='mt-3'  >
                <Row className='mb-3' >
                    <Col className='col' >
                        <TasksListUI tasks={tasks} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TaskPage
