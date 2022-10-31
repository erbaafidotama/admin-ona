import React from 'react'
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const gotoProfessionalInfoForm = () => {
    navigate("/professionalInfo")
  }
  return (
    <div>
      <h1>This is home page.</h1>
      <h2 className="text-2xl cursor-pointer" onClick={gotoProfessionalInfoForm}>Click This: Professional Info Form</h2>
    </div>
  )
}

export default Home
