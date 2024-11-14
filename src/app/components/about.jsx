"use client"
import React, { useEffect } from 'react';
import "./about.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const paraabout=`When you live a busy life, it is hard to find the time to organize and tidy your home or business. You can rely on us to take care of your property so that you can focus on what's important.
   We value reliability, trustworthiness, and professionalism in everything we do.`
useEffect(()=>{
  const tls2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#aboutimgscontainer",
        start: "top 99%",
        end: "top -50%",
        toggleActions: "play none none reverse",

    }
    
});
tls2.fromTo("#bigimageabout",{
  x:10,opacity:0
},{x:0,opacity:1,duration:.7})
.fromTo("#image2about",{y:10,opacity:0},{y:0,opacity:1,duration:.4})
.fromTo("#imageasset",{x:20,opacity:0},{x:0,opacity:1,duration:.4})
.fromTo("#imageasset",{rotate:100},{rotate:0,repeat:-1,yoyo:true,duration:3})

const tls3 = gsap.timeline({
  scrollTrigger: {
      trigger: "#abouttextcont",
      start: "top 99%",
      end: "top -50%",
      toggleActions: "play none none reverse",

  }
  
  
});

tls3.fromTo("#abouthelp",{y:10,opacity:0},{y:0,opacity:1,duration:2})
.fromTo("#paraabout",{x:-10,opacity:0},{x:0,opacity:1,duration:1})


},[])
    return (
        <section id="about" className="py-16 bg-muted">
          <div className="">
            <div id='contabt' className="flex justify-between flex-col flex-wrap justify-center align-center px-3 w-full md:flex-row">
              <div id='abouttextcont' >
                <h2 className="text-4xl font-bold mb-4" id='abt'>About Us</h2>
                <p id='abouthelp' className="mb-4 mt-5 text-darkblue md:mt-2">Helping you create a work and life balance.</p>
                <p className="mb-4" id='paraabout'>{paraabout}
                </p>
             
              </div>
              <div id='aboutimgscontainer' >
                <img src="./cleaningabout.png" id='bigimageabout' alt="Clean home" className="rounded-lg shadow-lg" />
                <img id='image2about'  src='./about2prime.png'/>
                <img id='imageasset' src='./cleaningasset.png'/>
              </div>
            </div>
          </div>
        </section>
    );
}

export default About;
