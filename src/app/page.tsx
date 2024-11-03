import Image from "next/image";
import men from "../../public/men.png"
import Customer from "./component/customer";
import Showcase from "./component/showcase";

export default function Hero (){
  return(
    <main className="hero">
      <div className="main-hero">
        <Image src={men} alt="menImage" width={350} height={400} className="image"/>
        <div className="text-hero">
          <h2>Crafting <br />Architectural <br />Wonders</h2>
          <p>Your Ideas & Dreams Are Treansformed by us Into Long-<br />Lesting, Engineered Buildings.</p>
          <div className="button">
            <a href="/contact"><button className="button-1">Contect Us</button></a>
            <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank"><button className="button-2">Free Consultation</button></a>
            <p><span className="span">*</span> All Our Projects Are Curated by Experts.</p>
          </div>
        </div>
        <Image src={men} alt="menImage" width={500} height={400} className="image-2"/>
      </div>
      <Customer/>
      <Showcase/>
    </main>
  )
}