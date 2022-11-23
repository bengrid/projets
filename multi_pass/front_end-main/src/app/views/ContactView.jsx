import React from "react";
import FormContact from "./../components/account/FormContact";

const ContactView = (props) => {
  const local = props.data;
  return (
    <>
      <div className="container mx-auto bg-white p-5 rounded-md  max-w-md w-full space-y-8 py-12 px-10 sm:px-6 lg:px-10 shadow-2xl border ">
        <div>
          <h1 className="text-center font-serif text-2xl text-gray-800 ">
            Nous Contacter
          </h1>
        </div>
        <hr />
        <FormContact data={local} />
      </div>
    </>
  );
};

export default ContactView;
