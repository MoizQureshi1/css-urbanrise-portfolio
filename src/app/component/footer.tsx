import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

export default function Footer (){
    return(
        <footer className="footer">
            <hr />
            <div className="main-footer">
                <div className="text">
                    <h2>Urban<span className="span">Rise</span></h2>
                    <p>We Are More than Just Builders; We Are Creators <br /> of Architectural Marveis. With a Passion For <br />Excellence And An Unwavering Commitment To <br />Quality</p>
                </div>
                <div className="links">
                    <div>
                        <h2>Company</h2>
                        <a href="/about" className="atag">About Us</a><br />
                        <a href="https://github.com/MoizQureshi1" className="atag">Projects</a><br />
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="atag">Services</a><br />
                        <a href="/member" className="atag">Our Team</a>
                    </div>
                    <div>
                        <h2>Help</h2>
                        <a href="/contact" className="atag">Contact Us</a><br />
                        <a href="/contact" className="atag">FAQs</a><br />
                        <a href="/contact" className="atag">Support</a><br />
                        <a href="/contact" className="atag">Feedback</a>
                    </div>
                    <div>
                        <h2>Orders</h2>
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="atag">Privacy</a><br />
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="atag">Terms</a><br />
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="atag">Cookie</a><br />
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="atag">Policies</a>
                    </div>    
                </div>
            </div>
            <div className="button-head">
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100089981983705" target="blank" className="button"><FaFacebookF/></a>
                    <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank" className="button"><FaLinkedinIn/></a>
                    <a href="https://www.youtube.com/@solve-swift" target="blank" className="button"><ImYoutube2/></a>
                </div>
                <p>Copyright &copy; 2024 Adventour.</p>
            </div>
        </footer>
    )
}