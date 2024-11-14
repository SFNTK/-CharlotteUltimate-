import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { useEffect } from 'react';
import "./services.css";
import { CircleCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/navigation'
const Services = () => {
    const router = useRouter()
    gsap.registerPlugin(ScrollTrigger);
    const servicespara="Our cleaning services are tailored to meet the unique needs of both homes and businesses. Whether you need a basic surface clean or a deep, detailed service, we’ve got you covered! From kitchens and living spaces to office areas, our team is dedicated to providing a spotless environment so you can focus on what matters most. We also offer specialized services, including move-in/move-out cleanings, party prep and cleanup, and custom requests to ensure every corner of your space shines."
       
    useEffect(()=>{
        const tls3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#servicestxt",
                start: "top 99%",
                end: "top -50%",
                toggleActions: "play none none reverse",
        
            }
            
        });
        const tls4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#services img",
                start: "top 99%",
                end: "top -50%",
                toggleActions: "play none none reverse",
        
            }
            
        });

        tls4.fromTo("#services img",{
            x:-20,opacity:0
        },{x:0,opacity:1,ease:"power1.inOut",duration:1})

        tls3.fromTo("#servicestxt",{
            x:20,opacity:0
        },{x:0,opacity:1,ease:"power1.inOut",duration:1})
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#floating",
                start: "top 99%",
                end: "top -50%",
                toggleActions: "play none none reverse",
        
            }
            
        });
        tls2.fromTo(".floatingdiv",{
            y:10,opacity:0
        },{y:0,opacity:1,duration:1,stagger:.4}).fromTo(".floatingdiv",{y:5},{y:0,repeat:-1,stagger:.04,yoyo:true,duration:.7})
    },[])
    return (
        <div id='services'>
            <img src='./residential.png' />
            <div id='servicestxt'>
                <h2 >OUR SERVICES</h2>
                <p>
                    {servicespara}
                </p>
                <div className='bg-darkblue cursor-pointer text-white mt-2' onClick={()=>{
                    router.push('/#contact')
                }}>REQUEST A QUOTE</div>
            </div>
            <div id='floating'>
                <div className='floatingdiv  bg-semidark top-[2%] left-[5%]'>
                    <CircleCheck />    Residential Cleaning

                </div>
                <div className='floatingdiv  bg-semidark top-[55%] left-[20%]'>
                    <CircleCheck />    Small Business Cleaning

                </div>
                <div className='floatingdiv  bg-semidark top-[2%] right-[2%]'>
                    <CircleCheck />    PRE/AFTER PARTY Cleaning

                </div>
                <div className='floatingdiv  bg-semidark  top-[55%] right-[20%]'>
                    <CircleCheck />    Move-INS  &  Move-OUT Services

                </div>

                <div className='floatingdiv bg-semidark top-[5%] right-[40%]'>
                    <CircleCheck className='iconfloat' />   Special requests are welcomed

                </div>

            </div>
        </div>
    );
}

export default Services;
