import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { URL_INCRISPTION } from "../../shared/constants/urls/urlConstants"
import { defaultValueForgetPassword } from '../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormForgetPassword } from '../../shared/constants/formik-yup/yup/yupUser';
import { CustomInput } from './../../shared/components/form-and-error-components/InputCustom';
import axios from "axios";
import { useHistory } from "react-router-dom";

function ModalPasswordForget(props) {
    let history = useHistory();
    const sendMail= (formvalue) => {
        axios.post("http://localhost:3001/api/forgetPasswordModal", formvalue).then((res) => {
          if (res.status === 200) {
            props.closeModal(false);
            history.push("/login"); // permet de rediriger vers la route que lon veut on utilise un props par defaut qui contient history et push
          }
        });
      };

    return (
        <Formik
    initialValues={defaultValueForgetPassword}
    onSubmit={sendMail}
    validationSchema={schemaFormForgetPassword}
  >
  
  
    {(formik) => (
        <>
        <div className="drop-shadow-xl w-screen bg-white border-2 border-black rounded-lg ">
            <button  onClick={() => props.closeModal(false)} className="absolute left-0 top-0 h-16 w-16 mb-10">X</button>
            <div className="text-2xl text-left ml-3 ">
                <p className="ml-3 mt-10 text-gray-800">PC</p>
                <p className="font-bold text-left ml-3 text-slate-700 text-2xl mb-10 text-gray-800">Building</p>
            </div>
            <div className="modalTitle mt-2 mb-2 text-center">
                <p className="text-2xl font-bold text-gray-800 mb-8">
                    Mot de passe oublié?
                </p>
            </div>
            <div className="modalBody">
                <p className="text-xl text-center ml-4">Veuillez renseigner l'adresse email de votre compte pour recevoir </p>
                <p className="text-xl text-center">les instructions de réinitialisation de mot de passe</p>
                <Form >
                    <div className="flex justify-center">
                    <Field
                    type="email"
                    name="email"
                    placeholder="email"
                    component={CustomInput}
                    className="mb-4 mt-4"
                    />
                    </div>
                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            className="hover:bg-gray-600 group relative btn  w-60 bg-gray-800 text-white text-center mb-5 ">
                            Envoyer
                        </button>
                    </div>
                    <div>
                        <p className="mb-5 text-center">Besoin de créer un compte. <Link to = {URL_INCRISPTION} className="text-blue-800 font-bold underline mb-8">Inscrivez-vous</Link> </p>
                    </div>
                </Form>
            </div>
        </div>
        </>
    )}
    </Formik>
    
    )}

export default ModalPasswordForget;
