import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormFloatingLayoutExample() {

    return (
        <Form className="p-3">
            <Row className="g-3 mb-3">
                <Col xs={12} md={5}>
                    <FloatingLabel controlId="floatingNameGrid" label="Name">
                        <Form.Control type="text" placeholder="Enter Category Name" />
                    </FloatingLabel>
                </Col>

                <Col xs={12} md={5}>
                    <FloatingLabel controlId="floatingEmailGrid" label="Email">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>

                <Col xs={12} md={2}>
                    <FloatingLabel controlId="floatingColorGrid" label="Color">
                        <Form.Control 
                            type="color" 
                            className="w-100" 
                            title="Choose your color"
                            style={{ height: '58px', padding: '0.375rem' }} 
                        />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col xs={12}>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '120px' }}
                        />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Button type="submit" variant="primary" className="px-4 py-2 w-100 w-md-auto">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default FormFloatingLayoutExample;