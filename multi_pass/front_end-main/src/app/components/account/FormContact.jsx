import React, { useState } from "react";
import { FormHelperText } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemaFormContact } from "../../shared/constants/formik-yup/yup/yupUser";
import { defaultValueContact } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import axios from "axios";
import { ImSpinner10 } from "react-icons/im";
import { useHistory } from "react-router-dom";

const FormContact = (props) => {
  let history = useHistory();
  const local = props.data;
  const [spinner, Setspinner] = useState(false);
  const handleSubmit = (data) => {
    Setspinner(true);
    axios
      .post("http://localhost:3001/api/contact", data)
      .then(function (res, err) {
        //handle succes
        if (res.status === 200) {
          Setspinner(false);
          history.push("/message")
        } else {
          console.log("error" + err);
        }
      });
  };

  return (
    <>
      <Formik
        initialValues={defaultValueContact}
        validationSchema={schemaFormContact}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form method="POST" className=" space-y-6">
            <div className="md:flex md:flex-row space-x-0 space-y-6 md:space-y-0 md:space-x-4 items-center justify-start">
              <div className="md:w-1/2 w-full">
                <Field
                  as="input"
                  name="nom"
                  type="text"
                  placeholder="Nom"
                  className="w-full shadow-md py-1  border border-gray-300 rounded mt-1"
                  value={local && local.nom }
                />
                <FormHelperText error>
                  <ErrorMessage name="nom" component="div" />
                </FormHelperText>
              </div>
              <div className="md:w-1/2 w-full">
                <Field
                  as="input"
                  name="prenom"
                  type="text"
                  placeholder="Prénom"
                  className="w-full shadow-md py-1  border border-gray-300 rounded mt-1"
                  value={local && local.prenom}
                />
                <FormHelperText error>
                  <ErrorMessage name="prenom" component="div" />
                </FormHelperText>
              </div>
            </div>
            <div>
              <Field
                as="input"
                name="telephone"
                type="tel"
                placeholder="Téléphone"
                className="w-full shadow-md py-1 px-2 border border-gray-300 rounded mt-1"
                value={local && local.telephone}
              />
              <FormHelperText error>
                <ErrorMessage name="telephone" component="div" />
              </FormHelperText>
            </div>
            <div>
              <Field
                as="input"
                name="email"
                type="email"
                placeholder="Adresse Email"
                className="w-full shadow-md py-1 px-2 border border-gray-300 rounded mt-1"
                value={local && local.email}
              />
              <FormHelperText error>
                <ErrorMessage name="email" component="div" />
              </FormHelperText>
            </div>
            <div>
              <Field
                as="input"
                name="numero_commande"
                type="text"
                placeholder="Numéro de Commande"
                className="w-full shadow-md py-1 px-2 border border-gray-300 rounded mt-1"
                value={local && local.numero_commande}
              />
              <FormHelperText error>
                <ErrorMessage name="numero_commande" component="div" />
              </FormHelperText>
            </div>
            <div>
              <Field
                as="textarea"
                name="message"
                type="text"
                placeholder="Ecrivez votre message ici"
                className="ring-1 shadow-md ring-gray-300 w-full h-40 p-2 border border-gray-300 rounded-medium outline-none focus:ring-2 focus:ring-teal-300"
                value={local && local.message}
              />
              <FormHelperText error>
                <ErrorMessage name="message" component="div" />
              </FormHelperText>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-24 my-4 bg-yellow-500 hover:bg-yellow-700 rounded-md text-black-500 text-medium "
                disabled={spinner}
              >
                {spinner && <ImSpinner10 className="animate-spin" />}
                ENVOYER
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormContact;
