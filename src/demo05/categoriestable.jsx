import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FloatingLabel, Form, Button, Modal } from "react-bootstrap";
import CategoryTableRow from "./categorytablerow";



export default function CategoriesTable({ categories, setCategories }) {
  const [modalVisible, changeModalVisiblity] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Rank: 1,
    Color: "#000000",
  });

  function handleInputChnage(e) {
    let fieldName = e.target.name;
    let value = e.target.value;

    if (fieldName === "Rank") {
      value = parseInt(value) || 1;
    }

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  }

  async function handleSubmitData() {
    if (formData.Name.length < 3) {
      alert("Invalid Category Name");
      return;
    }
    if (formData.Rank < 1) {
      alert("Invalid Rank");
      return;
    }
    if (formData.Color.length < 7) {
      alert("Minimum 7 length color hex code required");
      return;
    }
    if (formData.Description.length < 10 || formData.Description.length > 500) {
      alert("Description length should be minimum 10 and maximum 500");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/category/`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error occured while submitting category.");
      }

      const dataJson = await response.json();

      setFormData({
        Name: "",
        Description: "",
        Rank: 1,
        Color: "#000000",
      });

      changeModalVisiblity(false);
      setCategories([...categories, dataJson]);
    } catch (err) {
      console.error(err);
    }
  }

  function handleHide() {
    changeModalVisiblity(false);
  }

  function handleAddClick() {
    changeModalVisiblity(true);
  }

  return (
    <>
      {/* Minimalist Modal */}
      <Modal show={modalVisible} onHide={handleHide} centered size="lg">
        <Modal.Header closeButton className="py-2 bg-primary text-white">
          <Modal.Title className="fs-5">Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <Form>
            {/* Inline fields to save vertical space */}
            <div className="row g-2 mb-2">
              <div className="col-md-6">
                <FloatingLabel controlId="txtName" label="Name (5-50 chars)">
                  <Form.Control
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleInputChnage}
                    placeholder=""
                    size="sm"
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-4">
                <FloatingLabel controlId="txtRank" label="Rank (1-1000)">
                  <Form.Control
                    type="number"
                    min={1}
                    max={1000}
                    value={formData.Rank}
                    name="Rank"
                    onChange={handleInputChnage}
                    placeholder=""
                    size="sm"
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <Form.Control
                  name="Color"
                  value={formData.Color}
                  onChange={handleInputChnage}
                  type="color"
                  className="w-100"
                  style={{ height: "50px" }}
                  title="Choose Category Color"
                />
              </div>
            </div>

            {/* Description Textarea */}
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="txtDescription"
                label="Description (10-500 chars)"
              >
                <Form.Control
                  as="textarea"
                  name="Description"
                  value={formData.Description}
                  placeholder=""
                  onChange={handleInputChnage}
                  style={{ height: "100px", resize: "none" }}
                />
              </FloatingLabel>
            </Form.Group>

            {/* Action Buttons */}
            <div className="d-flex justify-content-end gap-2">
              <Button
                type="button"
                variant="light"
                onClick={handleHide}
                className="px-4"
              >
                <FontAwesomeIcon icon="fas fa-times" /> Close
              </Button>
              <Button
                type="button"
                onClick={handleSubmitData}
                variant="primary"
                className="px-4"
              >
                <FontAwesomeIcon icon="fas fa-save" /> Save Category
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="container-fluid px-2">
        <div className="row bg-primary text-white fw-bold rounded shadow-sm align-items-center py-1 g-0">
          <div className="col px-3 d-flex justify-content-between align-items-center">
            <span className="fs-5">
              <FontAwesomeIcon icon="fas fa-tags" /> Manage Categories
            </span>
            <Button
              type="button"
              variant="light"
              size="sm"
              onClick={handleAddClick}
              className="fw-bold text-primary"
            >
              <FontAwesomeIcon icon="fas fa-plus" /> Add New
            </Button>
          </div>
        </div>

        <div className="row text-primary fw-bold py-2 border-bottom border-2 mx-0 align-items-center">
          <div className="col-4">Category</div>
          <div className="col-2 text-center">Color</div>
          <div className="col-4">Description</div>
          <div className="col-2 text-end pe-3">Actions</div>
        </div>

        {/* Rows Container */}
        <div className="mt-1">

          {categories.length > 0 ?
            <>
              {
                categories.map((c, i) => (
                  <CategoryTableRow
                    categories={categories}
                    setCategories={setCategories}
                    category={c}
                    key={c._id}
                    index={i}
                  />
                ))
              }
            </>
            :
            <div className="d-flex flex-column align-items-center justify-content-center text-center py-5 my-3 border border-2 border-dashed rounded-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 mb-3"
                style={{ width: "80px", height: "80px" }}
              >
                <FontAwesomeIcon icon="fas fa-tags" className="text-primary fs-2" />
              </div>
              <h5 className="fw-bold text-primary mb-1">No Categories Yet</h5>
              <p className="text-muted mb-3" style={{ maxWidth: "320px" }}>
                You haven't created any categories. Start by adding your first one to organize your content.
              </p>
              <Button
                type="button"
                variant="primary"
                onClick={handleAddClick}
                className="px-4 fw-bold"
              >
                <FontAwesomeIcon icon="fas fa-plus" /> Add Your First Category
              </Button>
            </div>
          }

        </div>
      </div>
    </>
  );
}
