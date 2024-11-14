'use client'

import { useState } from 'react'

import { ChevronDown, Star, Phone, Mail, Clock, Facebook, Instagram, Sparkles, Building, Truck, Briefcase, PlusCircle, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Nav from './components/nav'
import Banda from './components/banda'
import Hero from './components/hero'
import About from './components/about'
import Pricing from './components/pricing'
import Services from './components/services'
import Why from './components/why'
import Calltoacton from './components/calltoacton'
import Faq from './components/faq'
import Timeline2 from './components/timeline2'

export default function Home() {
 const footerdata="Charlotte's Ultimate Cleaning Service, LLC. All rights reserved.";



  return (
    <div className="min-h-screen bg-background font-sans">
    <Banda/>
<Nav/>
      

      <main>
      <Hero/>
<About/>
<Services/>

<Pricing/>
      
     
<Why/>
<Calltoacton/>
<Timeline2/>
      

        <section id="contact" className="py-16">
          <div  >
  
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className=" px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            
<Card>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.5283765418626!2d-83.0651375252867!3d42.37388933422983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69010740d5d67f91%3A0x1d229f457e213b08!2sCharlotte&#39;s%20Ultimate%20Cleaning%20Services!5e0!3m2!1sen!2sma!4v1730676936302!5m2!1sen!2sma" width="100%" height="100%" style={{border:0}}  loading="lazy" ></iframe>
</Card>

              <div className='relative' >
              <img src='./cleaningstars.png' id='starscln'/>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2" />
                        <span>1-313-588-8898</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2" />
                        <span>info@cucleaning.com</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>Mon-Sat: 8am-6pm, Sun: Closed</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Follow Us</h4>
                      <div className="flex space-x-4">
                        <a href="#" className="text-muted-foreground hover:text-primary">
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a href="https://www.instagram.com/charlottes_ultimate_cleaning/" className="text-muted-foreground hover:text-primary">
                          <Instagram className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

       
      </main>

      <footer className="bg-darkblue px-4 text-primary-foreground">
        <div className="container py-8">
          <div className="flex items-start justify-center gap-9 ">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
         
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-foreground/80">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/charlottes_ultimate_cleaning/" className="hover:text-primary-foreground/80">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
            <p>&copy; {new Date().getFullYear()} | Designed By Soufiane Taki | {footerdata}</p>
          </div>
        </div>
      </footer>
    </div>

  );
}
