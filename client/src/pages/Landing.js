import { Link } from "react-router-dom";
function Landing()
{
    return(
        <>
            <div className="Landing">
                <h1 className="headingLanding">
                Empowering Women By Providing HouseWives Working From Home Better Exposure

                </h1>
                <div className="landingButton">
                <Link to="/login" className="landingLink">Login To Continue</Link>
                </div>
            </div>
        </>
    )
}
export default Landing;