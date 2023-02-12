import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";


const Blog = () => {
    return(
        <>
        <Meta title={"Our Stories"} />
        <BreadCrumb title="Our Stories" />

        <Container class1="login-wrapper py-2 home-wrapper-2">
        <div> 
            <h3 className="d-flex text-align-center justify-content-center">Stories</h3>
            <h4 className=" my-3 d-flex text-align-center justify-content-center">Here are a few of our success stories that motivate many women to expand their businesses.</h4>
        </div>

        <div class="store">
            <div class="row">
                <div class="col-sm">
                    <div class="card" >
                        <img class="card-img-top" src="https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1616765486263.jpg-org"/>
                        <div class="card-body">
                            <p class="card-text">With a modest investment of just 2000 rupees, a group of women launched a food delivery service. Today, they are feeding more than 1200 people every day and expanding their business.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card" >
                        <img class="card-img-top" src="https://render.fineartamerica.com/images/rendered/search/poster/8/5.5/break/images-medium-5/making-flower-garlands-tim-gainey.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <p class="card-text">In a community where no woman is allowed to have her own business, a group of women are stepping up and inspiring others by working together to run their own small businesses.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                <div class="card" >
                    <img class="card-img-top" src="https://files.globalgiving.org/pfil/7513/ph_7513_62697.jpg?m=1406096814000" alt="Card image cap"/>
                        <div class="card-body">
                            <p class="card-text">Growing up as a child feeling bad for anybody suffering, Anju Srivastava went on to become a social entrepreneur, lighting up lives, empowering women villages to earn money and become indepedent by learning skills such as stitching clothes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
        </>
    )
}

export default Blog;