import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import SendIcon from '@mui/icons-material/Send';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import "./AvatarUpload.css";
import { setAvatar } from '../reducer';
const BACK = process.env.REACT_APP_BACK;

export default function AvatarUpload(props) {
const {handleClose} = props
const [file,setFile] = useState(null)
const [image, setImage] = useState(null);
const [fileName, setFileName] = useState("Archivo sin seleccionar");
const [loading, setLoading] = useState(false);
const token = useSelector(state => state.token)
const dispatch = useDispatch()
const uploadHandler = (e)=>{
  //If an image is loaded, this array will be != 0, else the user clicked cancel in upload
  if(e.target.files.length !== 0){
  const uploadedFile = e.target.files[0] //[0] because it's meant to be only 1 file in the array
  setFile(uploadedFile)
  setFileName(uploadedFile.name)
  setImage(URL.createObjectURL(uploadedFile))    
  }
  else{}
}

const handleSubmit = async (e)=>{

    e.preventDefault() //Prevent page reload because of submit behaviour
    setLoading(true)
    setFileName("Cargando su imagen...")
    const formData = new FormData();  //multipart/form-data
    formData.append("archivo", file)

    try {
      const posted = await axios.post(`${BACK}/users/photo`, formData, {
          headers: {
            'token': token,
            'Content-Type': 'multipart/form-data',
          }
        }
      )
      if(posted.status === 201){
        setFileName("Carga de imagen exitosa")
        setImage("Check")
        setLoading(false)
        fetch(`${BACK}/users/me`, { headers: { 'token': token } })
              .then(response => response.json())
              .then(data => dispatch(setAvatar(data.photo)))
        setTimeout(()=>{
          handleClose()
        },2000)
      }
    } catch (error) {
      setLoading(false)
      setImage("Error")
      setFileName(`Se produjo un error en la carga:  ${error.response.data.msg} `)
    }
}

  return (
    <div>
        <form id='myForm' className="InputFileContainer" onClick={()=> document.querySelector(".inputfield").click()} onSubmit={(e) => {handleSubmit(e)}}>
            <input type="file" accept=".jpg, .png" className='inputfield' hidden
            onChange={(e)=>{uploadHandler(e)}}></input>
            {loading ? 
            <div className="loader3">
              <div className="circle1"></div>
              <div className="circle1"></div>
              <div className="circle1"></div>
              <div className="circle1"></div>
              <div className="circle1"></div>
            </div>
            :   image === "Check" ?
                  <> <TaskAltIcon sx={{fontSize: 100, color: "#00aa0e"}}/></> : null ||
                image === "Error" ?
                  <> <ErrorOutlineIcon sx={{fontSize: 100, color: "#d30000"}}/></> : null ||
                image ? <img className='image' src={image} alt={fileName}/> 
                : <> <CloudUploadIcon fontSize="large"/> <h5>Haz click para subir un archivo</h5> <br/> <h6>( Archivos permitidos: *.jpg / *.png )</h6> </> }
            
        </form>
        <section className='UploadedRow'>
            <FilePresentIcon />
            <span >{fileName}</span>
            <div hidden={file? false: true} className='IconsContainer'>
                <div className='TrashIcon' onClick={()=>{setFileName("Archivo sin seleccionar"); setImage(null); setFile(null); setLoading(false) }} ><DeleteIcon/></div>
                <button type='submit' form='myForm' className='SendIcon'  ><SendIcon/></button>
            </div>
        </section>
    </div>
  )
}