import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schemaFormAvis } from "../../shared/constants/formik-yup/yup/yupUser";
import { defaultValueAvis } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Filter = (props) => {
    let history = useHistory();
    const local = props;
    const [spinner, Setspinner] = useState(false);
    const Filtercategorie = (data) => {
        Setspinner(true);
        axios
            .post("http://localhost:3001/api/produit/filtercategorie", data)
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
        <Formik >

            {(props) => (
                <Form method="POST" className='py-2 ml-4 w-1/3'>
                    <p className='text-xl'>Filter</p>
                    <div>
                        <p className='mt-2 mb-1'><strong>Marque</strong></p>
                        <Field as="select" name="categorie" className='w-full p-1 uppercase'>
                            <option value="lenovo">Lenovo</option>
                            <option value="hp">Hp</option>
                            <option value="mackbook">Mackbook</option>
                            <option value="dell">DELL</option>
                            <option value="asus">Asus</option>
                            <option value="acer">Acer</option>
                            <option value="toshiba">Toshiba</option>
                        </Field>
                    </div>
                    <div>
                        <p className='mt-2 mb-1'><strong>Système d'exploitation</strong></p>
                        <Field as="select" name="systeme" className='w-full p-1 uppercase'>
                            <option value="lenovo">Windows</option>
                            <option value="hp">MacOs</option>
                            <option value="mackbook">Lunix</option>
                            <option value="dell">Unix</option>
                            <option value="asus">Endroid</option>
                            <option value="acer">iOS</option>
                        </Field >
                    </div>
                    <div>
                        <p className='mt-2 mb-1'><strong>Processeur</strong></p>
                        <Field as="select" name="processeur" className='w-full p-1'>
                            <option value="lenovo">AMD Ryzen 3</option>
                            <option value="hp">AMD Ryzen 5</option>
                            <option value="mackbook">AMD Ryzen 7</option>
                            <option value="dell">Intel Core i3</option>
                            <option value="asus">Intel Core i5</option>
                            <option value="acer">Intel Core i7</option>
                            <option value="toshiba">Intel Core i9</option>
                        </Field>
                    </div>
                    <div>
                        <p className='mt-2 mb-1'><strong>RAM</strong></p>
                        <Field as="select" name="systeme" className='w-full p-1 uppercase'>
                            <option value="lenovo">4GB</option>
                            <option value="hp">8GB</option>
                            <option value="mackbook">16GB</option>
                            <option value="dell">32GB</option>
                            <option value="asus">64GB</option>
                            <option value="acer">128GB</option>
                        </Field>
                    </div>
                    <div>
                        <p className='mt-2 mb-1'><strong>Stockage</strong></p>
                        <Field as="select" name="systeme" className='w-full p-1 uppercase'>
                            <option value="lenovo">125GB</option>
                            <option value="hp">250GB</option>
                            <option value="mackbook">500GB</option>
                            <option value="dell">600GB</option>
                            <option value="asus">800GB</option>
                            <option value="acer">1000GB</option>
                        </Field>
                    </div>
                    <div>
                        <p className='mt-2 mb-1'><strong>Carte graphique</strong></p>
                        <Field as="select" name="systeme" className='w-full p-1 uppercase'>
                            <option value="lenovo">NVIDIA GeForce</option>
                            <option value="hp">MSI R5750 PM2D</option>
                            <option value="mackbook">PNY GeForce</option>
                            <option value="dell">XFX Radeon HD 5850</option>
                            <option value="asus">ATI Radeon 4870 X2</option>
                        </Field>
                    </div>
                    <div>
                        <p className='mt-2 mb-1'><strong>Taille écran</strong></p>
                        <Field as="select" name="systeme" className='w-full p-1 uppercase'>
                            <option value="lenovo">8 pouces</option>
                            <option value="hp">9 pouces</option>
                            <option value="mackbook">10 pouces</option>
                            <option value="dell">11 pouces</option>
                            <option value="asus">12 pouces</option>
                            <option value="acer">13 pouces</option>
                            <option value="asus">14 pouces</option>
                            <option value="acer">15 pouces</option>
                        </Field>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Filter;