import React from 'react'
import { Card } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import './FooterApp.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram  } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";

const FooterApp = () => {
    return (
      <Card className='footer'>
        <div>
           <footer className='footer'>

             <div className='container'>

               <img className='logo'

               src={logo}/>

               <div className='uno'>
                 <h4 className='contacto'>
                  Nos puedes contactar 
                  </h4>
                  <p className='telefono'> <FaPhoneAlt/> </p >
                  <p className='correo'> < FaEnvelope/> </p >
                  <p className='ubicacion'> < MdLocationPin/> </p >
               </div>

               <div className='dos'>
                  <h4 className='Redes'>
                  Nos puedes encontrar
                  </h4>
                  <p className='facebook'> <GrFacebook/> </p >
                  <p className='instagram'> <GrInstagram/> </p >
                  <p className='youtube'> <GrYoutube/> </p >
               </div>
               
               </div>

           </footer>  
        </div>
        </Card>
    )
}

export default FooterApp
