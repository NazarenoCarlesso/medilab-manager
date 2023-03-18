import React, {useState} from 'react';
import {useSelector} from "react-redux";
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import "./AvatarUpload.css";
const BACK = process.env.REACT_APP_BACK;

export default function AvatarUpload() {
const [file,setFile] = useState(null)
const [image, setImage] = useState(null);
const [fileName, setFileName] = useState("Archivo sin seleccionar");
const token = useSelector(state => state.token)

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

    const formData = new FormData();  //multipart/form-data
    formData.append("archivo", file)

    const posted = await axios.post(`${BACK}/users/photo`, formData, {
        headers: {
          'token': token,
          'Content-Type': 'multipart/form-data',
        }
      }
    )
    if(posted.status === 201){
      setFileName("CARGA DE IMAGEN EXITOSA")
      setTimeout(()=>{window.location.reload()},5000)
    }else{
      setFileName("HUBO UN ERROR EN LA CARGA DE LA IMAGEN")
    }
}


  return (
    <div>
        <form id='myForm' className="InputFileContainer" onClick={()=> document.querySelector(".inputfield").click()} onSubmit={(e) => {handleSubmit(e)}}>
            <input type="file" accept=".jpg, .png" className='inputfield' hidden
            onChange={(e)=>{uploadHandler(e)}}></input>
            {image ?
            <img className='image' src={image} alt={fileName}/> 
            : <><CloudUploadIcon fontSize="large"/> <h5>Haz click para subir un archivo</h5></>}
        </form>
        <section className='UploadedRow'>
            <FilePresentIcon />
            <span >{fileName}</span>
            <div hidden={file? false: true} className='IconsContainer'>
                <div className='TrashIcon' onClick={()=>{setFileName("Archivo sin seleccionar"); setImage(null); setFile(null) }} ><DeleteIcon/></div>
                <button type='submit' form='myForm' className='SendIcon'  ><SendIcon/></button>
            </div>
        </section>
    </div>
  )
}