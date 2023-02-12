import { Link } from "react-router-dom";
function Landing() {
    return (
        <>  
                <div className="Landing">
                <h1 className="headingLanding">
                    Empowering Women By Providing work to Housewives From Home Jobs and Buisness.

                </h1>
                <div className="landingButton">
                    <Link to="/login" className="landingLink"> Log in Continue</Link>
                </div>
            </div> 
            <section id="about">
                <div className="about-1">
                    <h1>ABOUT US</h1>
                    <p>women's career platform that empowers women by providing full-time, flexible and work from home jobs, training, mentorship and networking opportunities.</p>
                </div>
                    <div id="about-2">
                        <div class="content-box-lg">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="about-item text-center">
                                            <i class="fa fa-book"></i>
                                            <h3>MISSION</h3>
                                            <p>Our mission is to empower women with tools to work their way out of poverty, care for their families, and strengthen their communities.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="about-item text-center">
                                            <i class="fa fa-globe"></i>
                                            <h3>VISION</h3>
                                            <p>We envision a world without poverty in which women are empowered, uplifted and equal partners in society.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="about-item text-center">
                                            <i class="fa fa-trophy"></i>
                                            <h3>ACHIEVEMENTS</h3>
                                            <p>Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        <footer class="text-center">
            <p>Copyright &copy; 2023 All rights reserverd</p>
        </footer>
            
        </>
    )
}
export default Landing;