import { Col, Container, Row } from "react-bootstrap";
import CategoriesTable from "../demo05/categoriestable";
import CreateCategoryForm from "../demo05/createcategoryform";
import { useContext } from "react";
import { CategoriesContext } from "../context/categoryContext";



function CategoryPage() {
  const categories = useContext(CategoriesContext);

  return (
    <>
      <Container fluid className="mt-3">
        <Row className="mb-3">
          <Col>
            <CategoriesTable
              categories={categories.categories ? categories.categories : []}
              setCategories={categories.setCategories}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CategoryPage;
