import Image from "next/image";
import fmem from "../../../public/fmem.png"
import fomen from "../../../public/fomen.png"
import fvmem from "../../../public/fvmem.png"
import { IoIosArrowForward } from "react-icons/io";

export default function Customer (){
    return(
        <section className="customer">
            <div className="main-customer">
                <div className="head">
                    <div className="text">
                        <div className="line"></div>
                        <h2>Customer Feedbacks</h2>
                        <p>Don t Just Take Our Word for it; Hear Directly Form Our Valued Clients</p>
                    </div>
                    <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="button-head">See All <IoIosArrowForward className="head-icon"/></button></a>
                </div>
                <div className="list-item">
                    <div>
                        <Image src={fmem} alt="threePic" width={50} height={30} className="image"/>
                        <p>I Recently Had The Privilege of Having<br />[Constraction Company Name] Build My Dream <br />Home, And I Couldn t Be Happier Wiht The <br />Results. The Entire Process.</p>
                        <span className="span-1">-Mary Johnson <br /></span>
                        <span className="span-2">Homeonwer</span>
                    </div>
                    <div>
                        <Image src={fomen} alt="threePic" width={50} height={30} className="image"/>
                        <p>I Recently Had The Privilege of Having<br />[Constraction Company Name] Build My Dream <br />Home, And I Couldn t Be Happier Wiht The <br />Results. The Entire Process.</p>
                        <span className="span-1">-David Lee <br /></span>
                        <span className="span-2">Property Developer</span> 
                    </div>      
                    <div className="">
                        <Image src={fvmem} alt="threePic" width={50} height={30} className="image"/>
                        <p>I Recently Had The Privilege of Having<br />[Constraction Company Name] Build My Dream <br />Home, And I Couldn t Be Happier Wiht The <br />Results. The Entire Process.</p>
                        <span className="span-1">-Sarah Miller <br /></span>
                        <span className="span-2">Hotel Onwer</span>
                    </div>         
                </div>
            </div>    
        </section>
    )
}