import Image from "next/image";
import fmem from "../../../public/fmem.png"
import sman from "../../../public/sman.png"
import tmem from "../../../public/tmem.png"
import fomen from "../../../public/fomen.png"
import fvmem from "../../../public/fvmem.png"
import sixmem from "../../../public/sixmem.png"
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../component/footer";
import "./globals.css"

export default function Member(){
    return(
        <section className="member">
            <div className="team-member">
                <div className="head">
                    <div className="text">
                        <div className="line"></div>
                        <h2 className="">Team Members</h2>
                        <p className="">Meet The Collaborative Minds of Our Constraction Team</p>
                    </div>
                    <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/"><button className="button-head">See All <IoIosArrowForward className="head-icon"/></button></a>
                </div>
                <nav className="top-button">
                    <button>Civil Engineers</button>
                    <button>Architect</button>
                    <button>Sturactural Engineer</button>                            
                    <button>Interior Designer</button>
                    <button>Project Manager</button>
                </nav>
                <div className="peoples">
                    <div className="people">
                        <div>
                            <Image src={fmem} alt="team member" width={70} className="image"/>
                            <span className="head-span">
                            <span className="span-1">Ethan Walker <br /></span>
                            <span className="span-2">Civil Engineer</span>
                            </span>
                        </div>
                        <div>
                            <Image src={sman} alt="team member" width={70} className="image"/>
                            <span className="head-span">
                            <span className="span-1">Eva Mitchell <br /></span>
                            <span className="span-2">Project Engineer</span>
                            </span>
                        </div>
                        <div>
                            <Image src={tmem} alt="team member" width={70} className="image"/>
                            <span className="head-span">
                            <span className="memberen">Jackson Thompson <br /></span>
                            <span className="span-2">Senior Civil Engineer</span>
                            </span>
                        </div>
                    </div>
                    <div className="people">
                        <div>
                            <Image src={fomen} alt="team member" width={70} className="image"/>
                            <span className="head-span">
                            <span className="span-1">Williams Carie <br /></span>
                            <span className="span-2">Materials Engineer</span>
                            </span>
                        </div>
                        <div>
                            <Image src={fvmem} alt="team member" width={70} className="image"/>
                            <span className="head-span">
                            <span className="memberen">Benjamin Carter <br /></span>
                            <span className="span-2">Project Engineer</span>
                            </span>
                        </div>
                        <div>
                            <Image src={sixmem} alt="team member" width={70} className="image"/>
                            <span className="head-span">
                            <span className="span-1">Sophia Robinson <br /></span>
                            <span className="span-2">Serveyor</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>        
    )
}