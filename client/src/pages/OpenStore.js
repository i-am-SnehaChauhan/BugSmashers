import React from 'react';
import { Link } from 'react-router-dom';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import createStore from '../pages/CreateStore';

const OpenStore = () => {
  return (
    <>
    <Meta title={"Open Store"} />
    <BreadCrumb title="Open Store" />
      {/* <div className='banner'>
        <img src="https://www.dailyneeds247.com/wp-content/uploads/2020/05/seller-banner.png"/>
       </div> */}
       <Container className="store-wrapper home-wrapper-2 py-5">
       {/* <button type="button" class="btn btn-secondary btn-lg">Create a Shop</button> */}
       <div >
        <h4 className=" d-flex text-align-center justify-content-center">Create a virtual store here to expand your business</h4>
       </div>
       <div className="mt-3 m-3 d-flex justify-content-center align-items-center">
          <Link to="/createStore" className="button createStore">Create a Store</Link>
        </div>
      <div className="card-group ">
        <div className="card">
          <img src="https://securecdn.pymnts.com/wp-content/uploads/2018/06/aite-corporate-real-time-payments.jpg" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Recieve timely payments</h5>
            <p className="card-text">We ensures your payments are deposited directly in your bank account within 7-14 days..</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img src="https://blog.usetada.com/hubfs/the-value-of-loyal-customer-cover3.jpg" class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Reach crores of customers</h5>
            <p className="card-text">Sell to crores of engaged customer and connect with vendors on desktop and through our mobile app.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img src="https://www.jotform.com/blog/wp-content/uploads/2020/05/How-to-start-a-food-delivery-business.png" class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Stress-free delivery</h5>
            <p className="card-text">Deliver to 100% of India's serviceable pincodes, through Easy Ship & Fulfillment by us.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>



  
</Container>
  </>
  )
}

export default OpenStore;