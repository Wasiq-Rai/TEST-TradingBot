



import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import ContactOne from "@/components/Contact/ContactOne";
import Roadmap from "@/components/Roadmap/Roadmap";
import Sales from "@/components/Sales/Sales";
import TeamOne from "@/components/Team/TeamOne";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "@/layouts/LayoutOne";
import SignUp from "@/components/Signup/SignUp";
import Login from "@/components/Login/Login";
import AboutUs from "@/components/About-us/About-Us";
import ContactOneForm from "@/components/Contact/ContactOneForm";
import Pricing from  '@/components/Pricing/Pricing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bigtech - ICO & Crypto Landing Page Template</title>
        <meta name="description" content="" />
      </Head>

    
      <LayoutOne>
        <main className="fix">

          <Login>

          </Login>
          
          <SignUp>

          </SignUp>

          <AboutUs>

          </AboutUs>
          <Banner />
          <WhoWeAre
          title="Build By <span>Traders</span>, For <span>Traders</span>."
          content={""}
          image={"/img/images/who-we-are-chart.png"} 
          />
          <WhyChooseUs />
          <WhoWeAre
          title="<span>Trading</span> Bot"
          content={"Trading bot use the Deep learning based Algorithms to take decision and predict NSDAQ stock market’s prices and help you to grow up your funds with absolute precision.  "}
          image={"/img/images/robot.png"} 
          />

          <TeamOne />
          <ContactOneForm />
          {/* <Pricing> */}

          {/* </Pricing> */}
        </main>
      </LayoutOne>
    </>
  );
}
