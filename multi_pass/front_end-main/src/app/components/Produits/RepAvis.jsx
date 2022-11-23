import React from "react";
import { FormHelperText } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemaFormRep } from "../../shared/constants/formik-yup/yup/yupUser";
import { defaultValueRep } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import axios from "axios";
import {VscClose} from "react-icons/vsc"
import { useHistory } from "react-router-dom";

function RepAvis(props) {
  let history = useHistory();
  const local = props.data;
  const handleSubmit = (data) => {
    
    axios
      .post(`http://localhost:3001/api/produit/avis/message`, data)
      .then( (res, err) => {
        //handle succes
        
          history.push(`/listeProduit`)
         
          if(err) console.log("error" + err);
        
      });
  };
  return (
    <>
      <Formik
        initialValues={defaultValueRep}
        validationSchema={schemaFormRep}
        onSubmit={handleSubmit}
      >
        <Form method="POST"  className=" space-y-6 p-4 absolute inset-x-1/4 border-2 bg-white border-gray-300 rounded" >
          <button onClick={() => props.setAvis(false)}><VscClose className= "absolute w-4 h-4 right-0 top-0 cursor-pointer text-gray-400"  /></button>  
            <div>
              <Field
                as="textarea"
                name="message"
                type="text"
                placeholder="Donnez nous votre avis"
                className="ring-1 shadow-md ring-gray-300 w-full h-40 p-2 border border-gray-300 rounded-medium outline-none focus:ring-2 focus:ring-teal-300"
                value={local && local.message}
              />
              <FormHelperText error>
                <ErrorMessage name="comment" component="div" />
              </FormHelperText>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className= " p-1 my-4 bg-gray-200 hover:bg-yellow-700 rounded-sm" 
                
              >
                Donnez votre avis
              </button>
            </div>
          </Form>
      </Formik>
    </>
  );
};

export default RepAvis;


