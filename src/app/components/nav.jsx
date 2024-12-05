"use client"
import "./nav.css"
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'

import { useState } from 'react'

const Nav = () => {
  const router = useRouter()
 
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

    

    </>
  );
}

export default Nav;
