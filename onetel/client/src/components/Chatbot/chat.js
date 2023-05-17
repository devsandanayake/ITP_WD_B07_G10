import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from "semantic-ui-react";
import './chat.css';

export default function Chat() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our shop. Please enter your name!",
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
        { value: "Repair", label: "Repair Your Phone", trigger: "Repair" },
        { value: "Contact", label: "Contact us", trigger: "Contact" }
      ]
    },
    {
      id: "Repair",
      message: "Thanks for letting us know about your phone repair issue. Our team will resolve it ASAP.",
      end: true,
    },
    {
      id: "Contact",
      message: "Thanks for contacting us. Our team will get back to you soon.",
      end: true,
    },
  ];

  return (
    <div className='chat'>
      <Segment floated="right">
        <ChatBot steps={steps} />
      </Segment>
    </div>
  );
}
