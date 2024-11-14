"use client"
import React, { useEffect, useState } from 'react';
import "./pricing.css"
import { Check, TriangleAlert } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/navigation'
import gsap from 'gsap';
const Pricing = () => {
    const router = useRouter()
    gsap.registerPlugin(ScrollTrigger);
    const [pricingcard, setpricing] = useState(<></>)
    const [pricingcard2, setpricing2] = useState(<></>)
    const pricing = [{
        key:1,
        plan: "BASIC",
        image:'./cleaning.png',
        price: " $150",
        note: "(Exterior Only)",
        type: 'planItem--pro',
        includes: [{key:1,name:"Refrigerator"}
            , {key:2,name:"Stove"}
            , {key:3,name:"Microwave"}
            , {key:4,name:"Sweep/ Mop"}
            , {key:5,name:"Cabinets"}]
    },
    {key:2,
        plan: "DEEP",
        note: '(Exterior and Interior)',
        image:'./cleaning-service.png',
        type: "planItem--entp",
        price: "$200",
        includes: [{key:1,name:"Refrigerator"}
            , {key:2,name:"Stove"}
            , {key:3,name:"Microwave"}
            , {key:4,name:"Sweep/ Mop"}
            , {key:5,name:"Cabinets"},
            {key:6,name:"Windows"},
            {key:7,name: "Ceiling fans "}
          

           ]
    }
    ]
    const pricing2=[{
        key:1,
        plan: "BASIC",
        price: " $150",
        image:'./cleaning.png',
        note: "(Exterior Only)",
        type: 'planItem--pro',
        includes: [
            , {key:2,name:"Wip Down"}
           
            , {key:4,name:"Sweep/ Mop"}
            , {key:5,name:"Cabinets"}]
    },
    {key:2,
        plan: "DEEP",
        note: '(Exterior and Interior)',
        type: "planItem--entp",
        image:'./cleaning-service.png',
        price: "$200",
        includes: [
            , {key:2,name:"Wip Down"}
    
            , {key:4,name:"Sweep/ Mop"},
         
            {key:6,name:"Windows"},
            {key:7,name: "Ceiling fans "}
          

           ]
    }
    ]

    useEffect(() => {
        const pricingcrd = pricing.map(data => {
            return <Card key={data.key} className={`plananim planItem ${data.type}`}>
                 
                <div className="card">
                    <div className="card__header2">
                       <img className='iconcard' src={data.image}/>
                        <h2 >{data.plan}</h2>
                      
                       
                    </div>
          
                    
                </div>
                <span className='mt-2'> {data.note}</span>
                <div className="price"><span className="text-black font-bold" >Starting at /</span> {data.price}</div>

                <ul className="featureList">
           {data.includes.map(data2=>{
            return <li key={data2.key}><Check className={`${data.type=="planItem--entp" ?  "text-white" : "text-darkblue"}`}/>{data2.name}</li>
           })}
                </ul>

                <button onClick={()=>{
                    router.push('/#contact')
                }} className={`button ${data.type=="planItem--entp" ? "bg-white text-darkblue" : "bg-darkblue text-white"}`}>BOOK NOW</button>
           
            </Card>
        })
        const pricingcrd2 = pricing2.map(data => {
            return <Card key={data.key} className={`planItem ${data.type}`}>
                 
                <div className="card">
                    <div className="card__header2">
                       <img src={data.image} className='iconcard'/>
                        <h2 className='font-bold'>{data.plan}</h2>
                       
                    </div>
                    
                </div>

                <div className="price"><span className="text-black font-bold" >Starting at/ </span> {data.price}</div>

                <ul className="featureList">
           {data.includes.map(data2=>{
            return <li key={data2.key}><Check className={`${data.type=="planItem--entp" ?  "text-white" : "text-darkblue"}`}/>{data2.name}</li>
           })}
                </ul>

                <button onClick={()=>{
                    router.push('/#contact')
                }} className={`button ${data.type=="planItem--entp" ? "bg-white text-darkblue" : "bg-darkblue text-white"}`}>BOOK NOW</button>
           
            </Card>
        })
        setpricing(pricingcrd)
        setpricing2(pricingcrd2)

        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".plansHero",
                start: "top 90%",
                end: "top -50%",
                toggleActions: "play none none reverse",
    
            }
            
        });
        tls2.fromTo(".plansHero__title",{y:10,opacity:1},{opacity:1,y:0,duration:1,stagger:.5})
       
        const tls3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".planItem__container",
                start: "top 90%",
                end: "top -50%",
                toggleActions: "play none none reverse",
    
            }
            
        });
        tls3.fromTo(".plananim",{y:10,opacity:0},{opacity:1,y:0,duration:1,stagger:.5})


    }, [])
    return (
    <div id='cardcont'>
            <section className="plans__container">
            <div className="plans">
                <div className="plansHero">
                    <h1 className="plansHero__title">Residential Cleaning Pricing</h1>
            
                </div>
                <div className="planItem__container">



                 {pricingcard}
                 <Card className={`planItem planItem--pro`}>
                 
                 <div className="card">
                     <div className="flex items-center gap-x-1 flex-row">
                         <div className=""><TriangleAlert className='text-darkblue'/></div>
                         <h2 className='font-bold'>Things Not Included </h2>
                        
                     </div>
                     
                 </div>
 
                 
                 <ul className="featureList">
           
            <li ><Check className={"text-darkblue" }/>organizing $25 and up</li>
            <li ><Check className={"text-darkblue" }/>chandeliers $25 and up</li>
            <li ><Check className={"text-darkblue" }/>wall wipe down $10 per room</li>
            <li ><Check className={"text-darkblue" }/>laundry $10 per load (folding included)</li>
            <li ><Check className={"text-darkblue" }/>wall wipe down $10 per room</li>
            <li ><Check className={"text-darkblue" }/>Must provide vacuum and Broom</li>
       
         
                 </ul>
 
                 <button className={`button bg-darkblue text-white`}>BOOK NOW</button>
            
             </Card>
        

                </div>
            </div>
        </section>

        <section className='plans__container px-12' >
            <div >
            <div className="plansHero">
                    <h1 className="plansHero__title">Business Cleaning Pricing</h1>
                
                </div>
              
                <div className="planItem__container">



                 {pricingcard2}
              

                </div>
            </div>
        </section>
    </div>
    );
}

export default Pricing;
