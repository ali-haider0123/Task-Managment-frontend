import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Row, Col } from "react-bootstrap";



export default function TaskDetailsUI({ task, onEdit, onDelete }) {

    function handleEditClick(e){
        //alert("edit in deltails")
        onEdit(task);
    }

    function handleDeleteClick(e){
        //alert("edit in deltails")
        onDelete(task);
    }




    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title className="text-capitalize" > {task.Title} </Card.Title>
                    <Row className="mb-3" >
                        <Col>
                            {task.Description}
                        </Col>
                    </Row>
                    <Row className="mb-3" >
                        <Col>
                            <FontAwesomeIcon icon="fas fa-calendar-day" /> { task.DueDate.toDateString() }
                        </Col>
                        <Col>
                            <span className="badge bg-primary"> Pending </span>
                        </Col>
                    </Row>
                    <Row className="mb-3" >
                        <Col className="p-0" >
                            <button className="btn text-warning" onClick={handleEditClick} ><FontAwesomeIcon icon="fas fa-edit" /> </button>
                            <button className="btn text-danger" onClick={handleDeleteClick} ><FontAwesomeIcon icon="fas fa-trash" /> </button>
                        </Col>
                    </Row>
                </Card.Body >
            </Card >
        </>
    )
}