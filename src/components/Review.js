import { Button, TextField,TableHead,TableCell,TableRow,Table,TableBody } from '@material-ui/core'
//import React, { useState } from 'react'
import useForm from './Read'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Review = () => {  
    
var [value,setValue]=useForm({username:"",movieName:"",review:"",comments:""})

var [read,setread]=useForm({movieName:""})

var [movieData,changeData]=useState([])



const readView=()=>{

    console.log(value)

    axios.get("http://localhost:8084/view").then((Response)=>{
        console.log(Response.data)
        }
    )
}


const readFn=()=>{

    console.log(value)

    axios.post("http://localhost:8084/add",value).then((Response)=>{
        console.log(Response.data)
        }
    )
}

const readSearch=()=>{
    
    console.log(read)

    axios.post("http://localhost:8084/search",read).then((Response)=>{
        console.log(Response.data)
       
   changeData(
    movieData=Response.data
    )})}

const readDelete=(id)=>{
    const data ={"_id":id}

    axios.post("http://localhost:8084/delete",data).then((Response)=>{
        console.log(Response.data) 
        alert(Response.data)


}
    )
}

    return (
        <div>

<Button onClick={readView} fullWidth color="secondary" variant="contained"> VIEW ALL </Button>    

<Table style={{ marginTop:2}}>
     <TableHead>
         <TableRow>
             <TableCell> movieName </TableCell>
             <TableCell> review </TableCell>
             <TableCell> comments </TableCell>
         </TableRow>
     </TableHead>

     <TableBody>

 {movieData.map((value,index)=>{
return <TableRow> 
<TableCell> {value.movieName} </TableCell>
<TableCell> {value.review} </TableCell>
<TableCell> {value.comments} </TableCell>

<TableCell> <Button onClick={()=>{readDelete(value._id)}} variant="contained" color="primary"> DELETE </Button> </TableCell>

</TableRow>

  } )}

     </TableBody>


 </Table>  


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


   <TextField
    name="movieName"
    onChange={setread}
    value={read.movieName}
    margin="normal"
    label="Movie Name"
    variant="outlined" 
    fullWidth  />


<Button onClick={readSearch} fullWidth color="secondary" variant="contained"> SEARCH </Button>   
 

    
<Table style={{ marginTop:2}}>
     <TableHead>
         <TableRow>
             <TableCell> movieName </TableCell>
             <TableCell> review </TableCell>
             <TableCell> comments </TableCell>
         </TableRow>
     </TableHead>

     <TableBody>

 {movieData.map((read,index)=>{
return <TableRow> 
<TableCell> {read.movieName} </TableCell>
<TableCell> {read.review} </TableCell>
<TableCell> {read.comments} </TableCell>

<TableCell> <Button onClick={()=>{readDelete(read._id)}} variant="contained" color="primary"> DELETE </Button> </TableCell>

</TableRow>

  } )}

     </TableBody>


 </Table>       

        </div>
    )
}

export default Review