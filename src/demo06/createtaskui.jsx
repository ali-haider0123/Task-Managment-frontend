import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import { useContext, useState } from "react";
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

export default function CreateTaskUI() {
  const categories = useContext(CategoriesContext);

  const minDate = DateTime.now();
  const maxDate = minDate.plus({ month: 3 }); //new Date(minDate.getFullYear(),minDate.getMonth()+4,minDate.getDate());

  const [task, updateTask] = useState({
    title: { value: "", isValid: false, message: "" },
    progress: { value: 0, isValid: true, message: "" },
    category: { value: "", isValid: false, message: "" },
    dueDate: { value: new Date(), isValid: true, message: "" },
    description: { value: "", isValid: true, message: "" },
  });

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
    console.log(temp);
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
    // console.log(temp);
    console.log(temp.length);
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
    const temp = new Date(e.target.value);
    if (temp >= minDate && temp <= maxDate) {
      updateTask({
        ...task,
        dueDate: { value: temp, isValid: true, message: "" },
      });
    } else {
      updateTask({
        ...task,
        dueDate: {
          value: temp,
          isValid: false,
          message: `from ${minDate.toFormat("dd-MM-yyyy")} to ${maxDate.toFormat("dd-MM-yyyy")}`,
        },
      });
    }
  }

  function handleAddClick() {
    if (
      task.title.isValid &&
      task.progress.isValid &&
      task.category.isValid &&
      task.dueDate.isValid &&
      task.description.isValid
    ) {
      const obj = {
        id: 0,
        title: task.title.value,
        progress: task.progress.value,
        description: task.description.value,
        dueDate: task.dueDate,
        category: task.category.value,
      };
      alert("Adding a new task");
      console.log(obj);

      




    } else {
      alert("invalid input");
    }
  }

  return (
    <>
      <Form>
        <FormGroup className="mb-3">
          <FloatingLabel controlId="ddlCategory" label="Category">
            <Form.Select onChange={handleCategoryChange}>
              {/* <option value="0"> Select Category </option>
                            <option value="1"> Learning </option>
                            <option value="2"> Office </option>
                            <option value="3"> Personal </option> */}

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
              min={minDate}
              max={maxDate}
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
          <Button type="button" className="btn btn-danger btn-wide">
            {" "}
            <FontAwesomeIcon icon="fas fa-times" /> Close
          </Button>
        </div>
      </Form>
    </>
  );
}
