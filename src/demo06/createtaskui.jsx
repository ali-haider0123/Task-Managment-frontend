import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import { useContext, useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
import { CategoriesContext } from "../context/categoryContext";

export default function CreateTaskUI({ onClose }) {
  const categories = useContext(CategoriesContext);

  const minDate = DateTime.now();
  const maxDate = minDate.plus({ month: 3 });
  const firstCategoryId = categories?.categories?.[0]?._id || "";

  const [task, updateTask] = useState({
    title: { value: "", isValid: false, message: "" },
    progress: { value: 0, isValid: true, message: "" },
    category: { value: firstCategoryId, isValid: !!firstCategoryId, message: "" },
    dueDate: { value: minDate.toISODate(), isValid: true, message: "" },
    description: { value: "", isValid: true, message: "" },
  });

  const categoryValue = task.category.value;

  useEffect(() => {
    if (categories?.categories?.length > 0 && !categoryValue) {
      // Defer state update to avoid synchronous setState inside effect
      const id = categories.categories[0]._id;
      const t = setTimeout(() => {
        updateTask((prev) => ({
          ...prev,
          category: { value: id, isValid: true, message: "" },
        }));
      }, 0);
      return () => clearTimeout(t);
    }
  }, [categories, categoryValue]);

  function handleTitleChange(e) {
    const temp = e.target.value;
    if (temp) {
      if (temp.length >= 10 && temp.length <= 200) {
        updateTask({
          ...task,
          title: { value: temp, isValid: true, message: "" },
        });
      } else {
        updateTask({
          ...task,
          title: {
            value: temp,
            isValid: false,
            message: "10 to 200 characters",
          },
        });
      }
    } else {
      updateTask({
        ...task,
        title: { value: temp, isValid: false, message: "title is required" },
      });
    }
  }

  function handleProgressChange(e) {
    const temp = Number(e.target.value);
    if (temp >= 0 && temp <= 100) {
      updateTask({
        ...task,
        progress: { value: temp, isValid: true, message: "" },
      });
    } else {
      updateTask({
        ...task,
        progress: { value: temp, isValid: false, message: "0 to 100 percent" },
      });
    }
  }

  function handleCategoryChange(e) {
    const temp = e.target.value;
    if (temp != 0) {
      updateTask({
        ...task,
        category: { value: temp, isValid: true, message: "" },
      });
    } else {
      updateTask({
        ...task,
        category: {
          value: temp,
          isValid: false,
          message: "category is required",
        },
      });
    }
  }

  function handleDescriptionChange(e) {
    const temp = e.target.value;
    if (temp.length >= 10 && temp.length <= 1500) {
      updateTask({
        ...task,
        description: { value: temp, isValid: true, message: "" },
      });
    } else {
      updateTask({
        ...task,
        description: {
          value: temp,
          isValid: false,
          message: "10 to 1500 characters",
        },
      });
    }
  }

  function handleDueDateChange(e) {
    const temp = DateTime.fromISO(e.target.value);
    if (temp.isValid && temp >= minDate.startOf("day") && temp <= maxDate.endOf("day")) {
      updateTask({
        ...task,
        dueDate: { value: e.target.value, isValid: true, message: "" },
      });
    } else {
      updateTask({
        ...task,
        dueDate: {
          value: e.target.value,
          isValid: false,
          message: `from ${minDate.toFormat("dd-MM-yyyy")} to ${maxDate.toFormat("dd-MM-yyyy")}`,
        },
      });
    }
  }

  async function handleAddClick() {
    const obj = {
      title: task.title.value,
      progress: task.progress.value,
      description: task.description.value,
      dueDate: task.dueDate.value,
      category: task.category.value,
    };


    let token = localStorage.getItem("token")

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token

      },
      body: JSON.stringify(obj)
    })

    if (!res.ok) {
      return console.log("Error")
    }

    await res.json();

    updateTask({
      title: { value: "", isValid: false, message: "" },
      progress: { value: 0, isValid: true, message: "" },
      category: { value: 0, isValid: false, message: "" },
      dueDate: { value: minDate.toISODate(), isValid: true, message: "" },
      description: { value: "", isValid: true, message: "" },
    })

    if (onClose) {
      onClose();
    }

  }

  return (
    <>
      <Form>
        <FormGroup className="mb-3">
          <FloatingLabel controlId="ddlCategory" label="Category">
            <Form.Select onChange={handleCategoryChange}>
              {categories.categories.map((c, i) => {
                return (
                  <option key={i} value={c._id}>
                    {c.Name}
                  </option>
                );
              })}
            </Form.Select>
          </FloatingLabel>
          <Form.Text className="text-danger">
            {" "}
            {task.category.message}{" "}
          </Form.Text>
        </FormGroup>
        <FormGroup className="mb-3">
          <FloatingLabel controlId="txtTitle" label="Title">
            <Form.Control
              type="text"
              value={task.title.value}
              placeholder=""
              onChange={handleTitleChange}
            />
          </FloatingLabel>
          <Form.Text className="text-danger"> {task.title.message} </Form.Text>
        </FormGroup>
        <FormGroup className="mb-3">
          <FloatingLabel controlId="txtDescription" label="Description">
            <Form.Control
              as="textarea"
              rows={10}
              value={task.description.value}
              style={{ height: "200px" }}
              placeholder=""
              onChange={handleDescriptionChange}
            />
          </FloatingLabel>
          <Form.Text className="text-danger">
            {" "}
            {task.description.message}{" "}
          </Form.Text>
        </FormGroup>
        <FormGroup className="mb-3">
          <FloatingLabel controlId="txtDueDate" label="Due Date">
            <Form.Control
              type="date"
              value={task.dueDate.value}
              placeholder=""
              onChange={handleDueDateChange}
            />
          </FloatingLabel>
          <Form.Text className="text-danger">
            {" "}
            {task.dueDate.message}{" "}
          </Form.Text>
        </FormGroup>

        <FormGroup className="mb-3">
          <FloatingLabel controlId="txtProgress" label="Progress">
            <Form.Control
              type="number"
              min="0"
              value={task.progress.value}
              max="100"
              step="1"
              placeholder=""
              onChange={handleProgressChange}
            />
          </FloatingLabel>
          <Form.Text id="hlpTitle" className="text-danger">
            {" "}
            {task.progress.message}{" "}
          </Form.Text>
        </FormGroup>
        <div className="mb-3">
          <Button
            type="button"
            className="btn btn-primary btn-wide"
            onClick={handleAddClick}
          >
            {" "}
            <FontAwesomeIcon icon="fas fa-floppy-disk" /> Add Task
          </Button>
          &nbsp;&nbsp;
          <Button type="button" className="btn btn-danger btn-wide" onClick={onClose}>
            {" "}
            <FontAwesomeIcon icon="fas fa-times" /> Close
          </Button>
        </div>
      </Form>
    </>
  );
}