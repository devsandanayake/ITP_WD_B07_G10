import React from 'react'
//import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function AddOrder() {

 const {id} = useParams()


  return (
    <div>   {id}
    </div>
  )
}
