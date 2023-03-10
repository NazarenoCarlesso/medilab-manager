import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getResults } from '../utils/request';
import { loadResults } from '../reducer';
import Result from "../components/Result";
import ResultsDetail from "../components/ResultsDetail";


export default function Results(test) {
  const dispatch = useDispatch()        //despacha una accion
  const params = useParams()  
  const patientResults = useSelector(state => state.results)
  const [resultId, setResultId] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [showResult, setShowResult] = useState(false);


  useEffect(() => {
    getResults(params.id, result => dispatch(loadResults(result)))
  },[params.id, dispatch])
 
 
    return (
      <div style={{alignItems: "center",textAlign: "center",}}>
      <h1 className='text-primary p-4 bg-secondary shadow-sm'>Resultados</h1>
      <div>
        {patientResults.map((item)=>(
          <div key={item.item}>
            <Result
              item={item.item}
              value={item.value}
              setResultId={setResultId}
              setShowResult={setShowResult}
              setResultValue={setResultValue}
            />
          </div>
        ))}
      </div>
      <ResultsDetail
        id={resultId}
        value={resultValue}
        showResult={showResult}
        setShowResult={setShowResult}
      />
    </div>
    )
  }