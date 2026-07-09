import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import TaskDetailsUI from "./taskdetailsui";
import CreateTaskUI from "./createtaskui";
import { useState } from "react";
import EditTaskUI from "./edittaskui";
import DeleteTaskUI from "./deletetaskui";



export default function TasksListUI({ tasks }) {


    const [modal, setModal] = useState({ Show: false, TitleIcon: "", TitleText: "", TitleClass: "", Body: null });

    function handleCreateClick() {
        setModal(
            {
                Show: true,
                TitleText: "Add New Task",
                TitleIcon: "fas fa-plus",
                TitleClass: "bg-primary text-white",
                Body: <CreateTaskUI />
            }
        )
    }

    function handleEditClick(obj) {
        const temp=`Edit Task #${obj._id}`;

        setModal(
            {
                Show: true,
                TitleText: temp,
                TitleIcon: "fas fa-edit",
                TitleClass: "bg-warning text-body",
                Body: <EditTaskUI task={obj} />
            }
        )
    }

       function handleDeleteClick(obj) {
        const temp=`Delete Task #${obj._id}`;
        setModal(
            {
                Show: true,
                TitleText: temp,
                TitleIcon: "fas fa-trash",
                TitleClass: "bg-danger text-white",
                Body: <DeleteTaskUI task={obj} />
            }
        )
    }

    function handleModalClose() {
        setModal(
            { Show: false, TitleText: "", TitleIcon: "", TitleClass: "", Body: null }
        );
    }



    return (
        <>

            <Modal show={modal.Show} onHide={handleModalClose} keyboard={true} backdrop={true}  >
                <Modal.Header className={modal.TitleClass} >
                    <strong><FontAwesomeIcon icon={modal.TitleIcon} /> {modal.TitleText} </strong>
                </Modal.Header>
                <Modal.Body>
                    {modal.Body}
                </Modal.Body>
            </Modal>
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <Card.Title><FontAwesomeIcon icon="fas fa-tags" /> Tasks</Card.Title>
                        </Col>
                        <Col className="text-end" >
                            <Button type="button" variant="primary" onClick={handleCreateClick}  > <FontAwesomeIcon icon="fas fa-plus" /> Add New Task </Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        {
                            tasks.map(t =>
                                <Col className="col-4 mb-3" key={t._id} >
                                    <TaskDetailsUI task={t} onEdit={handleEditClick} onDelete={handleDeleteClick} />
                                </Col>
                            )
                        }
                    </Row>
                </Card.Body>
            </Card>


        </>
    )
}