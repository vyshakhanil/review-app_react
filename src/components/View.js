import React from 'react'
import useForm from './Read'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button,TableHead,TableCell,TableRow,Table,TableBody } from '@material-ui/core'


const View = () => {

    var [value,setValue]=useForm({username:"",movieName:"",review:"",comments:""})

  // var [value,setValue]=useState([])

    var [movieData,changeData]=useState([])

    useEffect(() => {
       
        readView()

    }, [])

    const readView=()=>{

        console.log(value)
    
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
        </div>
    )
}

export default View
