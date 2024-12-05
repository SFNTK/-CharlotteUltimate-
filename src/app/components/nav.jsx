"use client"
import "./nav.css"
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'

import { useState } from 'react'

const Nav = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [MenuOMenuiconpen, setMenuicon] = useState(false)
  const refmenu = useRef()
  useEffect(() => {
    if (isMenuOpen) {
      setMenuicon(<X  className=" iconmenu w-6 h-6" onClick={() => {
        setIsMenuOpen(false)
        refmenu.current.style.transform = "scaleY(0)";
      }} />)
      refmenu.current.style.transform="scaleY(1)"
    }else{
      setMenuicon(<Menu   onClick={()=>{
          setIsMenuOpen(true)
        }}  className={`h-6 w-6 iconmenu transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
      )
      refmenu.current.style.transform="scaleY(0)"
    }
  }, [isMenuOpen])
  return (
    <>
      <header id="nav" className="px-4 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="./logocharlotte.webp" alt="Logo" className="h-8 w-15" />

          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="listnav">Home</a>
            <a href="#about" className="listnav">About</a>
            <a href="#services" className="listnav">Services</a>
            <a href="#cardcont" className="listnav">Pricing</a>

          </nav>
         <a href="#contact"> <Button id="contactbtnnav" className="bg-lightblue color-darkblue hover:bg-semidark" 
        
        >CONTACT US</Button></a>
         
            {MenuOMenuiconpen}

        </div>
      </header>

      <div id="navphone"

        ref={refmenu}

      >
       
        <nav className="container navphoneinside py-4 flex flex-col w-full items-center space-y-2">
          <a href="#home" className="text-sm font-medium hover:underline bg-darkblue w-full py-2 text-center"
            onClick={() => {
setIsMenuOpen(false)            }}>Home</a>
          <a href="#about" className="text-sm font-medium hover:underline bg-darkblue w-full py-2 text-center" onClick={() => {
        setIsMenuOpen(false)  
          }}>About</a>
          <a onClick={() => {
       setIsMenuOpen(false)  
          }} href="#services" className="text-sm font-medium hover:underline bg-darkblue w-full py-2 text-center">Services</a>
          <a onClick={() => {
           setIsMenuOpen(false)  
          }} href="#testimonials" className="text-sm font-medium hover:underline bg-darkblue w-full py-2 text-center">Testimonials</a>
          <a onClick={() => {
           setIsMenuOpen(false)  
          }} href="#contact" className="text-sm font-medium hover:bg-semidark bg-darkblue w-full py-2 text-center" >Contact</a>
        </nav>
      </div>

    </>
  );
}

export default Nav;
