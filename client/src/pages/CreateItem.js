import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import {Button,Form} from 'react-bootstrap';
const createItem = () => {
    return(
        <>
      

        <Container class1="login-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Add Item</h3>
              
               <Form>
                        <Form.Group controlId='name'>
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="" >   
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'></Form.Group>
                        <Form.Label>Item Price</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="0"  >  
                            </Form.Control>
                            <Form.Group controlId='email'></Form.Group>
                        <Form.Label>Item Stock</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="0"  >  
                            </Form.Control>
                            <Form.Group controlId='email'></Form.Group>
                        <Form.Label>Availability</Form.Label>
                        <br></br>
                            <Form.Check
                            inline
                            label="Yes"
                            type="radio"  
                                 id={`inline radio-1`}  >
                            </Form.Check>
                            
                            
                            <Form.Label>Upload Image</Form.Label>
                    </Form>
                    <CustomInput type="file" name="location" />     
            </div>
            
          </div>
        </div>
        </Container>
        </>
    )
}
export default createItem;