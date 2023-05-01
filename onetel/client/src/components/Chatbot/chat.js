import React from 'react'
import ChatBot from 'react-simple-chatbot';
import {Segment} from "semantic-ui-react"
import './chat.css'
export default function chat() {


    const steps = [
        {

            id: "Greet",
            message: "Hello, Welcome to our shop",
            trigger: "Done",
      
          },
      
          {
      
           id: "Done",
           message: "Please enter your name!",
           trigger: "waiting1",
      
          },
      
          {
      
            id: "waiting1",
            user: true,
            trigger: "Name",
      
          },
      
          {
      
            id: "Name",
            message: "Hi {previousValue}, Please select your issue",
            trigger: "issues",
      
          },
      
          {
      
            id: "issues",
            options: [
             {value: "Repair", label: "Repair Your Phone",trigger: "Repair"},
             {value: "Contact", label: "Contact us", trigger: "Contact"}
            ]
          },
          {
           id: "Repair",
           message:"Thanks for letting your issue, Our team will resolve your issue ASAP",
           end: true,
          },
          {
           id: "Contact",
           message:"Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
           end: true,
          },
      
        
      ];
   return (
     <div className='chat'><br/>
        <Segment floated="right">
        <ChatBot steps={steps}/>
        </Segment>
        </div>
   )
 }
 