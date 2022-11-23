import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { defaulValuesRegister } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { schemaFormRegister } from "../../shared/constants/formik-yup/yup/yupUser";
import { CustomInput } from "../../shared/components/form-and-error-components/InputCustom";
import axios from "axios";
import { ImSpinner10 } from "react-icons/im";
import { useHistory } from "react-router-dom";


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

const FormRegister = () => {
  let history = useHistory();
  const [spinner, Setspinner] = useState(false);

  const createUser = (formvalue) => {
    Setspinner(true);
    axios.post("http://localhost:3001/api/register", formvalue).then((res) => {
      if (res.status === 200) {
        Setspinner(false);
        history.push("/login"); // permet de rediriger vers la route que lon veut on utilise un props par defaut qui contient history et push
      }
    });
  };
  return (
    <>
      <Formik
        initialValues={defaulValuesRegister}
        onSubmit={createUser}
        validationSchema={schemaFormRegister}
      >
        {(formik) => (
          <>
            <Form className="space-y-6">
              <div className="rounded-md shadow-sm space-y-6 ">
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
                  name="adresse"
                  placeholder="Adresse"
                  component={CustomInput}
                  className=""
                /><Field
                type="text"
                name="codePostal"
                placeholder="Code Postal"
                component={CustomInput}
                className=""
              />
              <Field
                  type="text"
                  name="ville"
                  placeholder="ville"
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
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  component={CustomInput}
                  className=" "
                />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirme ton password"
                  component={CustomInput}
                  className=" "
                />
              </div>
              <button
                type="submit"
                className="hover:bg-gray-600 group relative btn  w-full bg-gray-800 text-white text-center  "
                disabled={spinner}
              >
                {spinner && <ImSpinner10 className="animate-spin" />}
                Envoyer
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
export default FormRegister;
