import React from "react";

import SpecialProduct from "../components/SpecialProduct";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Container from "../components/Container";


const Home = () => {
  return (
    <>
    <div className="slider">
     <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src=" https://www.resizepixel.com/Image/ck50fi3vd2/Preview/Screenshot_20230211_065344.png?v=b51ac316-cc1e-4618-bac5-8c8c4dc570f6" />
      </Slide>
      <Slide>
        <img alt="img2" src="https://www.resizepixel.com/Image/2xc0jy2lrr/Preview/Screenshot_20230211_063811.png?v=f661ab95-ee7d-45cd-9e54-66872e389324"  />
      </Slide>
      <Slide>
        <img alt="img1" src="https://thumbs.dreamstime.com/b/text-shop-local-colored-wooden-letters-wooden-background-text-shop-local-colored-wooden-letters-109540951.jpg" />
      </Slide>
    </ImageSlider>
    </div>
   
    

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h1>Explore Shops</h1>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          {/* <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct /> */}
        </div>
      </Container>
     
    </>
  );
};

export default Home;