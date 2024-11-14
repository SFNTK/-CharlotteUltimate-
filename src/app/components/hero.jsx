"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import "./hero.css"
import { Calendar, Sparkles } from 'lucide-react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type'
import gsap from 'gsap';
import { useRouter } from 'next/navigation'
const Hero = () => {
  const router = useRouter()
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const text = SplitType.create('#home h1')
  
    const tls2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top 50%",
            end: "top -50%",
            toggleActions: "play none none reverse",

        }
        
    });

    

    tls2.fromTo("#home .char",{
      opacity: 0,
       y:10
  }
    
      ,{
      opacity:1,y:0,duration:1,stagger:.05,ease:"power1.inOut"
    },"firstanim")
    .fromTo("#home p",{y:5,opacity:0},{opacity:1,y:0,duration:.5,ease:"power1.inOut"})
    .fromTo(".herobtn",{y:5,opacity:0},{opacity:1,y:0,duration:.5,ease:"power1.inOut"})
    .fromTo("#cleaninghero",{
      opacity:0,y:-5
    },{y:0,opacity:1,duration:1,ease:"power1.inOut"})

    .fromTo("#cleaninghero",{
      y:10
    },{y:0,repeat: -1,yoyo:true,duration:1})
    .fromTo("#sparkles",{
      rotate:30
    },{rotate:0,repeat: -1,yoyo:true,duration:1})



  },[])
  const h2hero=" Charlotte's Ultimate Cleaning Service"
const spanhero="so you don't have to!"
    return (
        <section id="home" className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" >
       <img src='./CLEANING4.png' className='z-10' id='cleaninghero' />
        <div className="absolute inset-0 bg-black/50"/>
       
        <div  className="flex flex-col items-center justify-center relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" >
          {h2hero}
          </h1>
          <p className="phro mb-5  flex items-center justify-center">
We clean <Sparkles id="sparkles" className="inline-block mx-2" /> {spanhero}
</p>

         
          <div >
            <div size="lg" onClick={()=>{
router.push('/#contact')
            }} className="herobtn mr-4 transition duration-300 ease-in-out bg-darkblue font-bold hover:bg-semidark hover:text-black ">
               <Calendar/> GET A FREE ESTIMATE
               </div>
           
          </div>
        </div>
      </section>
    );
}

export default Hero;
