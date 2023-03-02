import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Test from "./Test";
import { testsFilter, clearFilter, searchFilter} from "../reducer";

export default function Quoter() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("")
  const [sample, setSample] = useState("")
  const [search, setSearch] = useState("")

  
    useEffect(() => {
    dispatch(testsFilter({category,sample}))
    dispatch(searchFilter(search))
  },[category, sample, search, dispatch])
  
  const samples = useSelector((state) => state.samples);
  const categories = useSelector((state) => state.categories);
  const filteredTests = useSelector((state) => state.filteredTests)
  console.log(filteredTests)

  const onClear = () => {
      dispatch(clearFilter())
      setCategory("")
      setSample("")
  }

  return (
    <div>
      <input placeholder="Encuentra tu test" onChange={(event) => setSearch(event.target.value)}/>
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
        {filteredTests && filteredTests.map((test) => (
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