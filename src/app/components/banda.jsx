import { Instagram, Mail, Phone } from 'lucide-react';
import React from 'react';

const Banda = () => {
    return (
        <div id='banda'>
          <div>
          <Mail />
         info@cucleaning.com
          </div>
          <div>
            
            <a href="https://www.instagram.com/charlottes_ultimate_cleaning/">
            <Instagram/>
            </a>
            

          </div>
      
            <a href="tel:1-313-588-8898">
            <div> 
              <Phone/>
            1-313-588-8898
          </div>
            </a>
           
        </div>
    );
}

export default Banda;
