import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const OpenStore = () => {
  return (
    <>
    <Meta title={"Open Store"} />
    <BreadCrumb title="Open Store" />
      <div className='banner'>
        <img src="https://www.dailyneeds247.com/wp-content/uploads/2020/05/seller-banner.png"/>
       </div>
       <Container class1="store-wrapper home-wrapper-2 py-5">
       <div class="card-group">
  <div class="card">
    <img src="https://securecdn.pymnts.com/wp-content/uploads/2018/06/aite-corporate-real-time-payments.jpg" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Recieve timely payments</h5>
      <p class="card-text">We ensures your payments are deposited directly in your bank account within 7-14 days..</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://blog.usetada.com/hubfs/the-value-of-loyal-customer-cover3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Reach crores of customers</h5>
      <p class="card-text">Sell to crores of engaged customer and connect with vendors on desktop and through our mobile app.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://www.jotform.com/blog/wp-content/uploads/2020/05/How-to-start-a-food-delivery-business.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Stress-free delivery</h5>
      <p class="card-text">Deliver to 100% of India's serviceable pincodes, through Easy Ship & Fulfillment by us.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</Container>
  </>
  )
}

export default OpenStore;