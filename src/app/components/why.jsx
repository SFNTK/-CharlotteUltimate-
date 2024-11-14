"use client"
import { Card, CardContent } from '@/components/ui/card';
import React, { useEffect } from 'react';
import "./why.css"
import { Button } from '@/components/ui/button';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import gsap from 'gsap';

const Why = () => {
  const parachoose="Choose us for a cleaning experience that’s reliable, thorough, and tailored to your needs. Our experienced team brings attention to detail and a commitment to quality with every visit. We're here to make your life easier, so you can focus on what matters."
  const why1="Our team brings years of expertise and professionalism to each job. We pride ourselves on reliability, ensuring your space is cleaned with care and consistency."
  const why2="Every home and business has unique needs. We offer flexible plans, letting you select the services that fit your schedule and preferences perfectly."
  const why3="From residential to commercial spaces, we provide top-notch service. Our commitment is to leave every area spotless, creating a fresh, inviting environment for you."
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    
  
    const tls2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".why",
            start: "top 70%",
            end: "top -50%",
            toggleActions: "play none none reverse",

        }
        
    });
    const tls3 = gsap.timeline({
      scrollTrigger: {
          trigger: "#whycards",
          start: "top 70%",
          end: "top -50%",
          toggleActions: "play none none reverse",

      }
      
  });

  tls3.fromTo(".cardwhy",{
    y:10,opacity:0
  },{
    y:0,opacity:1,duration:1,stagger:.5
  })
    tls2.fromTo(".why h4",{y:10,opacity:0},{y:0,opacity:1,ease:"power1.inOut",duration:1})
    .fromTo(".why p",{y:10,opacity:0},{y:0,opacity:1,ease:"power1.inOut",duration: 1})

  },[])
    return (
     
        <div className="feat bg-gray pt-5 pb-5">
        <div className="why">
          <div className="row">
            <div className="section-head">
              <h4 className='text-darkblue'><span>Why Choose</span> Us?</h4>
              <p className='w-[89%]'>{ parachoose}</p>
            </div>
         
           
         
          </div>
          <div id='whycards'>
          <div className='cardwhy' >
              <div className="item"> <span className="icon feature_box_col_one"><img src='./planning.png'/></span>
                <h6>Experienced and reliable team</h6>
                <p>{why1}</p>
              </div>
            </div>
            <div className='cardwhy' >
              <div className="item"> <span className="icon feature_box_col_two"><img src='./rating.png'/></span>
                <h6>
                Flexible and customized cleaning plans</h6>
                <p>{why2}</p>
              </div>
            </div>
            <div className='cardwhy'>
              <div className="item"> <span className="icon feature_box_col_three"><img src='./cleaning.png'/></span>
                <h6>High-quality service </h6>
                <p>{why3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Why;
