import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TasksListUI from '../demo06/taskslistui';
import { useContext } from 'react';
import { TaskContext } from '../context/taskContext';

function TaskPage() {

    const tasks = useContext(TaskContext);

    return (
        <>
            <Container fluid className='mt-3'  >
                <Row className='mb-3' >
                    <Col className='col' >
                        <TasksListUI tasks={tasks.task} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default TaskPage
