import React, { useState } from 'react';
import ModalPasswordForget from './ModalPasswordForget';

function PassworForget() {

    const [openModal,setOpenModal] = useState(false);

  return (
    <div className="text-sm ml-4 modal ">
    {openModal && <div className="absolute w-96 z-50 "><ModalPasswordForget closeModal={setOpenModal} /></div>}
    <p onClick={() => {
        setOpenModal(true)
        }}>
      <span className="font-medium text-primary-600 hover:text-primary-500 cursor-pointer">
        Mot de passe oublié ?
      </span>
    </p>
  </div>
  )
}

export default PassworForget;









