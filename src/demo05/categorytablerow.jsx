import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Badge, Button, Modal, FloatingLabel, Form } from "react-bootstrap";

export default function CategoryTableRow({
  categories,
  category,
  setCategories,
}) {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editFormData, setEditFormData] = useState({
    Name: category.Name || "",
    Description: category.Description || "",
    Rank: category.Rank || 1,
    Color: category.Color || "#000000",
  });

  function handleEditInputChnage(e) {
    let fieldName = e.target.name;
    let value = e.target.value;

    if (fieldName === "Rank") {
      value = parseInt(value) || 1;
    }

    setEditFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  }

  function handleEdit(e) {
    e.stopPropagation();
    setEditModalVisible(true);
  }

  function handleCloseEdit() {
    setEditModalVisible(false);
  }

  async function handleUpdateData() {
    alert("Hello we are editing this model");

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/categories/${category._id}`,
        {
          method: "PUT",
          body: JSON.stringify(editFormData),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Error in editing");
      }
      const dataJson = await response.json();

      setCategories(
        categories.map((c) => {
          if (c._id == dataJson._id) {
            console.log("Editing the state")
            return {
              ...c,
              Name: dataJson.Name,
              Description: dataJson.Description,
              Rank: dataJson.Rank,
              Color: dataJson.Color,
            };
          }

          return c;
        }),
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(e) {
    e.stopPropagation();
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/categories/${category._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Error deleting the category");
      }

      const dataJson = await response.json();
      setCategories(categories.filter((c) => c._id !== dataJson._id));
    } catch (err) {
      console.log(err);
    }
  }

  function handleRowClick() { }

  return (
    <>
      <Modal
        show={editModalVisible}
        onHide={handleCloseEdit}
        centered
        size="lg"
      >
        <Modal.Header closeButton className="py-2 bg-primary text-white">
          <Modal.Title className="fs-5">Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <Form>
            <div className="row g-2 mb-2">
              <div className="col-md-6">
                <FloatingLabel
                  controlId="txtEditName"
                  label="Name (5-50 chars)"
                >
                  <Form.Control
                    type="text"
                    name="Name"
                    value={editFormData.Name}
                    onChange={handleEditInputChnage}
                    placeholder=""
                    size="sm"
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-4">
                <FloatingLabel controlId="txtEditRank" label="Rank (1-1000)">
                  <Form.Control
                    type="number"
                    min={1}
                    max={1000}
                    value={editFormData.Rank}
                    name="Rank"
                    onChange={handleEditInputChnage}
                    placeholder=""
                    size="sm"
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <Form.Control
                  name="Color"
                  value={editFormData.Color}
                  onChange={handleEditInputChnage}
                  type="color"
                  className="w-100"
                  style={{ height: "50px" }}
                />
              </div>
            </div>

            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="txtEditDescription"
                label="Description (10-500 chars)"
              >
                <Form.Control
                  as="textarea"
                  name="Description"
                  value={editFormData.Description}
                  placeholder=""
                  onChange={handleEditInputChnage}
                  style={{ height: "100px", resize: "none" }}
                />
              </FloatingLabel>
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              <Button
                type="button"
                variant="light"
                onClick={handleCloseEdit}
                className="px-4"
              >
                <FontAwesomeIcon icon="fas fa-times" /> Close
              </Button>
              <Button
                type="button"
                onClick={handleUpdateData}
                variant="primary"
                className="px-4"
              >
                <FontAwesomeIcon icon="fas fa-save" /> Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <div
        className="category-row row pb-2 mb-2 border-bottom border-bottom-2 align-items-center mx-0"
        onClick={handleRowClick}
        data-cid={category.Id}
      >
        <div className="col-4">
          <div className="d-flex align-items-center gap-2">
            <div
              style={{ width: "50px", height: "30px" }}
              className="d-flex align-items-center justify-content-center overflow-hidden rounded"
            >
              <img
                src={category.Image}
                alt={category.Name}
                className="h-100 w-100 object-fit-cover"
              />
            </div>
            <div className="fw-semibold">{category.Name}</div>
          </div>
        </div>
        <div className="col-2 text-center d-flex justify-content-center">
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "5px",
              backgroundColor: category.Color,
            }}
            className="border"
          ></div>
        </div>
        <div className="col-4 text-muted small text-truncate">
          {category.Description}
        </div>
        <div className="col-2 text-end pe-3">
          <Button
            type="button"
            variant="warning"
            size="sm"
            onClick={handleEdit}
            data-cid={category.Id}
            className="me-1 text-white"
          >
            <FontAwesomeIcon icon="fas fa-edit" />
          </Button>
          <Button
            type="button"
            variant="danger"
            size="sm"
            onClick={handleDelete}
            data-cid={category.Id}
          >
            <FontAwesomeIcon icon="fas fa-trash" />
          </Button>
        </div>
      </div>
    </>
  );
}
