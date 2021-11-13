import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Route } from 'react-router'
import { green } from '@material-ui/core/colors'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <AppBar position="static" color="secondary" img="b9xOWG23.jpeg">
                <Toolbar>
            <Typography variant="h4" style={{color:"white"}}>WELCOME</Typography>            
            {/* <Link color="primary" style={{margin:10,color:"white"}} to='/view'> USER LOGIN </Link> */}
            <Link color="primary" style={{margin:20,color:"white"}} to='/view'>VIEW ALL </Link>
            <Link color="primary" style={{margin:10,color:"white"}} to='/add'> ADD DATA </Link>
            <Link color="primary" style={{margin:10,color:"white"}} to='/search'> SEARCH DATA </Link>
            </Toolbar>
           </AppBar>
           {/* <img src="/spider-mannowayhome_lob_crd_02 (1).jpg" alt="spiderman"></img>
           <img src="/spider-mannowayhome_lob_crd_02 (1).jpg" alt="spiderman"></img>
           <img src="/spider-mannowayhome_lob_crd_02 (1).jpg" alt="spiderman"></img> */}
           {/* <img src="img_spider-mannowayhome_lob_crd_02.jpg" alt="spiderman"></img> */}
           {/* <img src="https://www.marvel.com/movies/spider-man-no-way-home" alt="spider-mannowayhome_lob_crd_02.jpg" */}
        </div>
    )
}

export default Header
