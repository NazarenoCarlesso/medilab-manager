import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Test from "./Test";
import { categoriesFilter, clearFilter, samplesFilter } from "../reducer";

export default function Quoter() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("")
  const [sample, setSample] = useState("")

  useEffect(() => {
    dispatch(categoriesFilter(category))
  },[category, dispatch])

  useEffect(() => {
    dispatch(samplesFilter(sample))
  },[sample, dispatch])

  const tests = useSelector((state) => state.tests);
  const samples = useSelector((state) => state.samples);
  const categories = useSelector((state) => state.categories);

  console.log(tests);
  console.log(category)

  const onClear = () => {
      dispatch(clearFilter())
      setCategory("")
      setSample("")
  }

  return (
    <div>
      <label htmlFor="category">filtrar por Categoria: </label>
      <select id="category" value={category}  onChange={event =>  setCategory(event.target.value)}>
        <option></option>
        {categories.map((category, index) => (
          <option key={index} >{category}</option>
        ))}
      </select>
      <label htmlFor="sample">filtrar por muestra: </label>
      <select id="sample" name="samplesFilter" value={sample} onChange={event => setSample(event.target.value)}>
      <option></option>
        {samples.map((sample, index) => (
          <option key={index}>{sample}</option>
        ))}
      </select>
      <button onClick={onClear}>
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
