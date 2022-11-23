import React, { useState } from "react";
import { FormHelperText } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemaFormAvis } from "../../shared/constants/formik-yup/yup/yupUser";
import { defaultValueAvis } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import axios from "axios";
import { VscClose } from "react-icons/vsc"
import { FaStar } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { getPayloadToken } from "../../shared/services/tokenServices";

function Avis(props) {
  const token = getPayloadToken();
  const tokenId = token.id
  console.log("user id", tokenId)
  let history = useHistory();
  const locale = props;
  const handleSubmit = (data) => {
    data.produit = props.id;
    data.userid = tokenId;
    axios
      .post(`http://localhost:3001/api/produit/avis`, data)
      .then((res, err) => {
        //handle succes

        history.push(`/`)

        if (err) console.log("error" + err);

      });
  };
  const [rating, setRating] = useState(false);
  const [ratingp, setRatingp] = useState(false);
  const [ratingq, setRatingq] = useState(false);
  const stars = Array(5).fill(0);

  return (
    <>
      <Formik
        initialValues={defaultValueAvis}
        validationSchema={schemaFormAvis}
        onSubmit={handleSubmit}
      >
        <Form method="POST" className=" space-y-6 p-4 absolute inset-x-1/4 border-2 bg-white border-gray-300 rounded" >
          <button onClick={() => props.setAvis(false)}><VscClose className="absolute w-4 h-4 right-0 top-0 cursor-pointer text-gray-400" /></button>
          <div className="md:flex md:flex-row space-4">
            <Field
              as="input"
              name="nom"
              type="text"
              placeholder="Votre nom"
              className="w-full shadow-md py-1 px-2 border border-gray-300 rounded mt-1"
              value={locale && locale.nom}
            />
            <FormHelperText error>
              <ErrorMessage name="nom" component="div" />
            </FormHelperText>
          </div>
          <div className="md:flex md:flex-row justify-center items-center md:space-x-12 space-x-0">
            <div className="space-y-3 ">
              <p className="uppercase text-center"><strong>Utlisation</strong></p>
              <div className="flex justify-center">
                {
                  stars.map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <div key={index}>
                        <label>
                          <Field as="input" name="rating" type="radio" className="hidden"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                          />
                          <FaStar
                            className={ratingValue <= rating ? "text-yellow-400 cursor-pointer text-2xl " : "text-gray-400 text-2xl cursor-pointer"}
                          />
                        </label>
                      </div>
                    )
                  })
                }
                <FormHelperText error>
                  <ErrorMessage name="rating" component="div" />
                </FormHelperText>
              </div>
            </div>

            <div className="space-y-3">
              <p className="uppercase text-center"><strong>Prix</strong></p>
              <div className="flex justify-center">
                {
                  stars.map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <div key={index}>
                        <label>
                          <Field as="input" name="ratingp" type="radio" className="hidden"
                            value={ratingValue}
                            onClick={() => setRatingp(ratingValue)}
                          />
                          <FaStar
                            className={ratingValue <= ratingp ? "text-yellow-400 cursor-pointer text-2xl " : "text-gray-400 text-2xl cursor-pointer"}
                          />
                        </label>
                      </div>
                    )
                  })
                }
                <FormHelperText error>
                  <ErrorMessage name="ratingp" component="div" />
                </FormHelperText>
              </div>
            </div>

            <div className="space-y-3">
              <p className="uppercase text-center"><strong>Qualité</strong></p>
              <div className="flex justify-center">
                {
                  stars.map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                      <div key={index}>
                        <label>
                          <Field as="input" name="ratingq" type="radio" className="hidden"
                            value={ratingValue}
                            onClick={() => setRatingq(ratingValue)}
                          />
                          <FaStar
                            className={ratingValue <= ratingq ? "text-yellow-400 cursor-pointer text-2xl " : "text-gray-400 text-2xl cursor-pointer"}
                          />
                        </label>
                      </div>
                    )
                  })
                }
                <FormHelperText error>
                  <ErrorMessage name="ratingq" component="div" />
                </FormHelperText>
              </div>
            </div>
          </div>

          <div>
            <Field
              as="textarea"
              name="comment"
              type="text"
              placeholder="Donnez nous votre avis"
              className="ring-1 shadow-md ring-gray-300 w-full h-40 p-2 border border-gray-300 rounded-medium outline-none focus:ring-2 focus:ring-teal-300"
              value={locale && locale.comment}
            />
            <FormHelperText error>
              <ErrorMessage name="comment" component="div" />
            </FormHelperText>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className=" p-1 my-4 bg-gray-200 hover:bg-yellow-700 rounded-sm"

            >

              Donnez votre avis
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Avis;


