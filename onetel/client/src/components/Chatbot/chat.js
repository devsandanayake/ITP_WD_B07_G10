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
        { value: "Contact", label: "Contact us", trigger: "Contact" },
        { value: "More details", label: "More", trigger: "More" },
        { value: "Warranty Claim", label: "Claim", trigger: "Claim" }
      ]
    },
    {
      id: "Repair",
      message: "Please login to our wedsite and describe the problem in the repair form",
      end: true,
    },
    {
      id: "Contact",
      message: "Please dial our hotline '1446'",
      end: true,
    },
    {
      id: "More",
      message: "Please follow our FB page '",
      end: true,
    },
    {
      id: "Claim",
      message: "Please login to our website and describe the problem in the warranty claim form '",
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
