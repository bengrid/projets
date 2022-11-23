import React from 'react';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
import { Formik, Form, Field } from "formik";
import { defaultValueForgetPasswordValidate } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import {schemaFormForgetPasswordValidate} from './../../shared/constants/formik-yup/yup/yupUser'
import { useHistory } from "react-router-dom";
import { forgetPasswordValidate } from '../../api/backend/account';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const ForgetPassword = () => {
    let history = useHistory();
   
      const newPasswordValidate =  (formvalue) => {
       const url = window.location.href
       const array = url.split('/');
       const index=array.length-1
       const token = array[index]
       formvalue.token = token

       forgetPasswordValidate(formvalue).then((res) => {

          if (res.status === 200) {
            toast.success('Votre nouveau mot de passe a été enregistré');
            history.push("/login"); // permet de rediriger vers la route que lon veut on utilise un props par defaut qui contient history et push
          }
        });
       }
  return(
    <Formik
    initialValues={defaultValueForgetPasswordValidate}
    onSubmit={newPasswordValidate}
    validationSchema={schemaFormForgetPasswordValidate}
  >
  {(formik) => (
    <div>
        <h1 className="text-2xl text-center font-bold text-gray-800"> Modification du Mot de Passe </h1>

        <Form className="flex justify-center mt-10">
        <div className="grid grid-rows-2 ">
            <div className="text-center">
                <label className="text-center text-xl mt-3">Nouveau Mot de passe</label>
            </div>
            <div className="mb-4">
                <Field 
                className="flex text-center mx-auto"
                type="password"
                name="password"
                placeholder="Nouveau mot de passe"
                component={CustomInput}
                
                />
            </div>
            <div className="text-center mt-4 mb-4">
                <label className="text-center text-xl mt-3">Confirmez votre Mot de passe</label>
            </div>
            <div>
                <Field 
                className="flex text-center mx-auto mt-4"
                type="password"
                name="confirmPassword"
                placeholder="Confirmation du mot de passe"
                component={CustomInput}
                />
            </div>
            
            <div className="mt-8 flex justify-center">
            <button 
            type="submit" 
            className="hover:bg-gray-600 group relative btn  w-60 bg-gray-800 text-white text-center">
            Valider
        </button>
            </div>
            </div>
        
        </Form>
    </div>
  )}
    </Formik>
  
  )
};

export default ForgetPassword;

