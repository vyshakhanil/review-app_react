import { Button, TextField,TableHead,TableCell,TableRow,Table,TableBody } from '@material-ui/core'
//import React, { useState } from 'react'
import useForm from './Read'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Search = () => {  
    
//var [value,setValue]=useForm({username:"",movieName:"",review:"",comments:""})

var [read,setread]=useForm({movieName:""})

var [movieData,changeData]=useState([])

useEffect(() => {
       
    readView()

}, [])



const readSearch=()=>{
    
    console.log(read)

    axios.post("http://localhost:8081/search",read).then((Response)=>{
        console.log(Response.data)
       
   changeData(
    movieData=Response.data
    )})}

    const readView=()=>{

        console.log(read)
    
        axios.get("http://localhost:8081/view").then((Response)=>{
            console.log(Response.data)
    
            changeData(
                movieData=Response.data
            )
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

export default Search