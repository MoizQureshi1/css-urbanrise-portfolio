import Image from "next/image";
import fourpic from "../../../public/fourpic.png"
import Footer from "../component/footer";
import "./globals.css"

export default function Aboutpage (){
    return(
        <main className="about">
            <div className="head">
                <Image src={fourpic} alt="fourPic" width={300} height={300} className="image"/>
                <div className="text">
                    <div className="line"></div>
                    <h3>Take a Glimpse Into Our<br /> Contraction Voyage</h3>
                    <p>A Traiblazer in the Contraction Industry. Our Journey is One of Passion,<br /> Dedication, And A Relentless Pursuit of Excellence.</p>
                    <div className="box">
                        <div>
                            <h2>600+</h2>
                            <p>Worked With 600+ <br/>Companies</p>
                        </div>
                        <div>
                            <h2>800+</h2>
                            <p>Projects Completed <br/>Successfully</p>
                        </div>
                        <div>
                            <h2>99%</h2>
                            <p>We Stand With 99% <br/>Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}