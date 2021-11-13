// import { AppBar, Button, TextField } from '@material-ui/core'
// import React from 'react'
// import useForm from './Read'
// import axios from 'axios'

// const Login = () => {

//     var [value,setValue]=useForm({username:"",password:""})

//     const loginread=()=>{

//         console.log(value)

//         axios.post("http://localhost:8081/add",value).then((Response)=>{
//             console.log(Response.data)
//             }
//         )
//         }

//     return (


//         <div>
//             <TextField
//             name="username"
//             onChange={setValue}
//             value={value.username}
//             margin="normal"
//             label="User Name"
//             variant="outlined" 
//             fullWidth  />

//             <TextField
//             name="password"
//             type="password"
//             onChange={setValue}
//             value={value.password}
//             margin="normal"
//             label="User password"
//             variant="outlined" 
//             fullWidth  />

//             <Button onClick={loginread} variant="contained" color="primary" margin="normal" fullWidth> LOGIN </Button>
//             <AppBar position="static"/>

//         </div>
//     )
// }

// export default Login
