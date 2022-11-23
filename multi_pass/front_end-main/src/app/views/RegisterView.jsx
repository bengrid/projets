import React from "react";
import FormRegister from "../components/account/FormRegister";

const RegisterView = () => {
  return (
    <>
      <div className="container mx-auto bg-white p-5 rounded-md  max-w-md w-full space-y-8 py-12 px-10 sm:px-6 lg:px-10 shadow-2xl border md:mb-4">
        <div>
          <h2 className="text-center font-serif text-2xl text-gray-800">
            Creer un Compte
          </h2>
        </div>
        <hr />
        <FormRegister />
      </div>
    </>
  );
};

export default RegisterView;
