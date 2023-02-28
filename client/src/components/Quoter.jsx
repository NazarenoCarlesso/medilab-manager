import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Test from "./Test";
import { categoriesFilter, clearFilter, samplesFilter } from "../reducer";

export default function Quoter() {
  const dispatch = useDispatch();
    

  const tests = useSelector((state) => state.tests);
  const samples = useSelector((state) => state.samples);
  const categories = useSelector((state) => state.categories);

  console.log(tests);

  const filterHandler = (event) => {
    const { name, value } = event.target;
    name === "samplesFilter" && dispatch(samplesFilter(value));
    name === "categoriesFilter" && dispatch(categoriesFilter(value));
    name === "clearFilter" && dispatch(clearFilter())
  };

  return (
    <div>
      <select name="categoriesFilter" onClick={filterHandler}>
        {categories.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
      <select name="samplesFilter" onClick={filterHandler}>
        {samples.map((sample, index) => (
          <option key={index}>{sample}</option>
        ))}
      </select>
      <button name="clearFilter" onClick={filterHandler}>
        Borrar filtros
      </button>
      <Row md={3} className="g-4">
        {tests.map((test) => (
          <Test
            key={test.id}
            id={test.id}
            name={test.name}
            description={test.description}
            price={test.price}
          />
        ))}
      </Row>
    </div>
  );
}
