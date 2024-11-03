import Image from "next/image";
import boypic from "../../../public/boypic.png"
import Footer from "./footer";

export default function Showcase () {
    return(
        <section className="showcase">
            <div className="head">
                <div className="text">
                    <div className="line"></div>
                    <h2>Let s Build Together</h2>
                    <p>Contact Us If You Have Anything In Mind, We Will Help You Build.</p>
                    <div className="button">
                        <a href="/contact"><button className="button-1">ContectUs</button></a>
                        <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank"><button className="button-2">FreeConsultation</button></a>
                    </div>    
                </div>
                <Image src={boypic} alt="Boypic" width={300} className="image"/>
            </div>
            <Footer/>
        </section>
    )
}