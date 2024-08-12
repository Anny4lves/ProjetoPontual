import React from 'react'
import './HeaderMatutino.css'
import { useNavigate } from 'react-router-dom'

const HeaderMatutino = () => {

  const navigate = useNavigate();
  
  return (
    <div className='headerMatutino'>
    <div className='logo'>
        <img src="/img/WhatsApp_Image_2024-08-03_at_22.37.48-copia-removebg-preview.png" alt="" />
    </div>
  <button className="btnVoltar" type='button' onClick={()=> navigate(-1)}>Voltar</button>
</div>
  )
}

export default HeaderMatutino;
