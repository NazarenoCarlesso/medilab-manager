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
    setFile(e.target)
    const uploadedFile = e.target.files[0] //[0] because it's meant to be unique
    setFileName(uploadedFile.name)
    if(uploadedFile){
        setImage(URL.createObjectURL(uploadedFile))
    }
}

const handleSubmit = async (e)=>{

    e.preventDefault() //Prevent page reload because of submit behaviour

    console.log("THIS IS FILE STATE (event.target)", file)
    console.log("THIS IS FILE STATE (event.target.files) THIS ONE IS SEND TO BACK", file.files) //This is the one i should append
    console.log("THIS IS FILE STATE (event.target.files[0])", file.files[0])
    console.log("THIS IS FILENAME STATE (event.target.files[0].name)", fileName)

    //const imageFile = document.querySelector('.inputfield').files  //Trying to obtain the input from DOM
    //console.log("THIS IS QUERY SELECTOR OF IMAGEFILE",imageFile)  //This is the same as (event.target.files)
    
    const formData = new FormData();
    formData.append(fileName, file.files)
    
    const posted = await axios.post(`${BACK}/users/photo`, formData, {
        headers: {
          'token': token,
          'Content-Type': 'multipart/form-data',
        }
      }
    )
    console.log(posted)
}


  return (
    <div>
        <form id='myForm' className="InputFileContainer" onClick={()=> document.querySelector(".inputfield").click()} onSubmit={(e) => {handleSubmit(e)}}>
            <input type="file" accept=".jpg, .png" className='inputfield' hidden
            onChange={(e)=>{uploadHandler(e)}}></input>
            {image ?
            <img src={image} height={320} alt={fileName}/> 
            : <><CloudUploadIcon fontSize="large"/> <p>Haz click para subir un archivo</p></>}
        </form>
        <section className='UploadedRow'>
            <FilePresentIcon />
            <span>{fileName}</span>
            <div className='IconsContainer'>
                <div className='TrashIcon' onClick={()=>{setFileName("Archivo sin seleccionar"); setImage(null) }} ><DeleteIcon/></div>
                <button type='submit' form='myForm' className='SendIcon'><SendIcon/></button>
            </div>
        </section>
    </div>
  )
}