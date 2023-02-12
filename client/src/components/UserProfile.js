import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {CardActions} from '@mui/material';
import {Link } from "react-router-dom";
import {Row,Col,Form ,Button} from 'react-bootstrap';
import ProductCard from './ProductCard';
import bangle from "../images/lehengaa.jpg"
import Typography from '@mui/material/Typography';
const UserProfile=()=>{
    return(
        <>
       
        <div>
            <Row className='profileContainer'>
                <Col
                style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                   
                }}><img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" className="profilePic"/></Col>
                <Col md={6}
                
                >
                    <Form>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Kirti Aggarwal" >   
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'></Form.Group>
                        <Form.Label>Mail Id</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="kirt02@gmail.com"  >  
                            </Form.Control>


                            
                            <Button type="submit" varient="primary">Update Profile</Button> 
                    </Form>
                   
                </Col>
            </Row>
        </div>
        
        <div className='Shops'>
         <h1>My Shops</h1>
         <div className='items'>
         <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Kirti's Shop"/>
            <CardMedia sx={{height:200}}
            
            image={bangle}/>
            <CardContent>
            <CardActions>
            <Button size="small" color="white">
                
          <Link to="/item" color='white'>
          Add Item
          </Link> </Button>
        
      </CardActions>
            </CardContent>
         </Card>
         
         </div>
        </div>
    
        </>
    )
}
export default UserProfile;