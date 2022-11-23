import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { defaulValuesRegister } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { schemaFormRegister } from "../../shared/constants/formik-yup/yup/yupUser";
import { CustomInput } from "../../shared/components/form-and-error-components/InputCustom";
import axios from "axios";
import { ImSpinner10 } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { getPayloadToken } from "../../shared/services/tokenServices";




/**
 * Component Form Login
 * Use Formik to create the Form
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Youssef
 */

const FormInformations = () => {
   
let history = useHistory();
const [spinner, Setspinner] = useState(false);

const local = getPayloadToken();
const id = local.id;
const modifierUser = (formvalue) => {
    console.log("data",formvalue)
    axios.put(`http://localhost:3001/api/updateUSer/${id}`, formvalue).then((res) => {
      if (res.status === 200) {
        history.push("/profil"); // permet de rediriger vers la route que lon veut on utilise un props par defaut qui contient history et push
      }
    });
  };

return (
    <>
    {local &&
    <Formik
        initialValues={local}
        onSubmit={modifierUser}
        validationSchema={schemaFormRegister}
    >
        {(formik) => (
        <>
            <Form className="space-y-8">
            <div className="bg-white p-5 rounded-md w-auto space-y-5 py-12 px-10 sm:px-6 lg:px-10 shadow-2xl border ml-10">
                <Field
                type="text"
                name="nom"
                placeholder="Nom"
                component={CustomInput}
                className=""
                />

                <Field
                type="text"
                name="prenom"
                placeholder="Prenom"
                component={CustomInput}
                className=""
                />
        
                <Field
                type="text"
                name="telephone"
                placeholder="Telephone"
                component={CustomInput}
                className=" "
                />
                <Field
                type="email"
                name="email"
                placeholder="Email"
                component={CustomInput}
                className=""
                />
            
            </div>
            <button
                type="submit"
                className="px-8 py-2  bg-yellow-500 hover:bg-yellow-600 float-right rounded-md text-white text-sm font-medium"
               
            >
                Modifier
            </button>
            </Form>
        </>
        )}
    </Formik>}
    </>
);
        
};
export default FormInformations;
