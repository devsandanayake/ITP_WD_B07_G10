import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom' 
const MaybeShowNavBar=({ children}) =>{
    
      const location =  useLocation();
        
       const [showNavBar, setShowNavBar] = useState(false)
       
       useEffect(() =>{
         console.log('this is location: ', location)
          if (location.pathname === '/login') {
                setShowNavBar(false)
         
          }else if(location.pathname === '/register'){
            setShowNavBar(false)
          }else if(location.pathname === '/admin'){
                  setShowNavBar(false) 
          }else if(location.pathname === '/delivery/ad'){
              setShowNavBar(false)   

          }else if(location.pathname === '/customer/ad'){
            setShowNavBar(false)  
          } 
          
          else{
            setShowNavBar(true)
          } 
           
        }, [location])
        return (
           <div>{showNavBar && children} </div>
          )
        }
export default MaybeShowNavBar