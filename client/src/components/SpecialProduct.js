import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div classname="prod-image">
              <img src="https://www.resizepixel.com/Image/j5x0h5l1oz/Preview/Screenshot_20230211_093344.png?v=45aaa1a6-b29f-449c-b16b-0afdc5121fb3" className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand"></h5>
              <h6 className="title">
                Mishra's Jewels
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              
              <div className="discount-till d-flex align-items-center gap-10">
                
                
              </div>
              <div className="prod-count my-3">
                <p>Products: 50+</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">View Shop</Link>
            </div>
          </div>
        </div>
        
        {/* second */}
         
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div classname="prod-image">
              <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__480.jpg" className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand"></h5>
              <h6 className="title">
                Sharma Clothstore
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              
              <div className="discount-till d-flex align-items-center gap-10">
                
              </div>
              <div className="prod-count my-3">
                <p>Products: 100+</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">View Shop</Link>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="prod-image">
              <img src="https://images.indianexpress.com/2022/02/feature-makeup.jpg" className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand"></h5>
              <h6 className="title">
                Sonia's Beauty Shop
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              
              <div className="discount-till d-flex align-items-center gap-10">
                
              </div>
              <div className="prod-count my-3">
                <p>Products: 75+</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">View Shop</Link>
            </div>
          </div>
        </div>
        
        {/* second */}
         
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="prod-image">
              <img src="https://c.ndtvimg.com/2019-05/j82aj5m_vegan-baking_650x400_20_May_19.jpg" className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand"></h5>
              <h6 className="title">
               Muskan's Bakery
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              
              <div className="discount-till d-flex align-items-center gap-10">
                
              </div>
              <div className="prod-count my-3">
                <p>Products: 90+</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">View Shop</Link>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default SpecialProduct;