import React from "react";
import { Formik, Form, Field } from "formik";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { defaulValuesLogin } from "./../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { schemaFormLogin } from "./../../shared/constants/formik-yup/yup/yupUser";
import ErrorMessSmall from "./../../shared/components/form-and-error-components/ErrorMessSmall";
import {
  CustomCheckbox,
  CustomInput,
} from "../../shared/components/form-and-error-components/InputCustom";
import { URL_INCRISPTION } from "../../shared/constants/urls/urlConstants";
import PassworForgetText from "./PassworForgetText";




/**
 * Component Form Login
 * Use Formik to create the Form
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Peter Mollet
 */



const FormLogin = ({ submit, errorLog }) => (
  
  

  <Formik
    initialValues={defaulValuesLogin}
    onSubmit={submit}
    validationSchema={schemaFormLogin}
  >
  
  
    {(formik) => (
      <>
     
        <Form className="mt-8 space-y-8">
          <div className="rounded-md shadow-sm space-y-6 ">
            <Field
              type="email"
              name="email"
              placeholder="email"
              component={CustomInput}
              className=""
              noError
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              component={CustomInput}
              className=""
              noError
            />
          </div>
          
            <div className="flex items-stretch">
              <div className="py-4">
              <Field
                name="rememberMe"
                label="Se souvenir de moi"
                component={CustomCheckbox}
                value={true}
              />
              </div>
              <div className="py-4 ml-4 border ">            
              
              
              </div>
            </div>
          
          

          <div >
          <div className="flex justify-start">
      <PassworForgetText/>
      </div>
            <button
              type="submit"
              className="hover:bg-gray-600 group relative btn  w-full bg-gray-800 text-white text-center"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3 ">
                <LockClosedIcon
                  className="h-5 w-5 text-colornav-100 group-hover:text-gray-700"
                  aria-hidden="true"
                />
      
              </span>
          
              CONNEXION
            </button>
          </div>
          <div className="text-center">
            <p>
              Je n'ai pas de compte.
              <Link to={URL_INCRISPTION}>
                <span className="text-primary-500"> Je m'inscris</span>
              </Link>
            </p>
          </div>
          {errorLog && (
            <ErrorMessSmall middle message="Login/Password incorrect(s)" />
          )}
        </Form>
      </>
    )}
  </Formik>
);

/**
 * Component Login
 *
 * will need in props:
 *  - Submit Function
 *  - errorLog boolean
 *  - validationSchema
 *
 * See above for information
 *
 * @author Peter Mollet
 */
const Login = (props) => {
  return (
    <div className="bg-white p-4 rounded-md shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8 mt-16 container mx-auto  ">
      <div>
        <h2 className="mt-6 text-center text-3xl font-serif text-gray-800">
        CONNEXION
        </h2>
      </div>

      <hr />
      <FormLogin {...props} />
    </div>
  );
};

export default Login;
