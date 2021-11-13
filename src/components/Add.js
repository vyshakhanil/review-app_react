import { Button, TextField,TableHead,TableCell,TableRow,Table,TableBody } from '@material-ui/core'
//import React, { useState } from 'react'
import useForm from './Read'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Add = () => {  
    
var [value,setValue]=useForm({username:"",movieName:"",review:"",comments:""})

var [movieValue,changeValue]=useState([])

useEffect(() => {
    readView()
    },[])


const readView=()=>{

    console.log(value)

    axios.get("http://localhost:8081/view").then((Response)=>{
        console.log(Response.data)
        }
    )
}

const readFn=()=>{

    console.log(value)

    axios.post("http://localhost:8081/add",value).then((Response)=>{
        console.log(Response.data)
        }
    )
}

const readDelete=(id)=>{
    const data ={"_id":id}

    axios.post("http://localhost:8081/delete",data).then((Response)=>{
        console.log(Response.data) 
        alert(Response.data)
        readView()

}
    )
}

    return (
        <div>  



<TextField
    name="username"
    onChange={setValue}
    value={value.username}
    margin="normal"
    label="User name"
    variant="outlined" 
    fullWidth  />
            
<TextField
    name="movieName"
    onChange={setValue}
    value={value.movieName}
    margin="normal"
    label="Movie Name"
    variant="outlined" 
    fullWidth  />

   
<TextField
    name="review"
    onChange={setValue}
    value={value.review}
    margin="normal"
    label="movie review"
    variant="outlined" 
    fullWidth  /> 


      
<TextField
    name="comments"
    onChange={setValue}
    value={value.comments}
    margin="normal"
    label="movie comments"
    variant="outlined" 
    fullWidth  /> 



<Button onClick={readFn} fullWidth color="secondary" variant="contained"> SUBMIT </Button>

        </div>
    )
}

export default Add