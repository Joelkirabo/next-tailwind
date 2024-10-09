import Link from "next/link";

import Hero from "@/components/Hero";
import Subhero from "@/components/Subhero";
import Provide from "@/components/Provide";
import Superbly from "@/components/Superbly";
import Ceo from "@/components/Ceo";
import Faq from "@/components/Faq";
import Digital from "@/components/Digital";
import Messages from "@/components/Messages";
import Ready from "@/components/Ready";
import Footer from "@/components/Footer";
export default function Home() {

  return (
    <>
          <Hero />
          <Subhero/>  
          <Provide/>
          <Superbly/>

          <div className="bg-gray-50">{/*downer div*/}
              <Ceo/>
              <Faq/>
              <Digital/>
              <Messages/>
              <Ready/>
              <Footer/>
          </div>    
    </>
  );
}








