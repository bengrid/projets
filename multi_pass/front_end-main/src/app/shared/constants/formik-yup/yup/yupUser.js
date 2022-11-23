import * as Yup from 'yup';

export const schemaFormLogin = Yup.object().shape({
    email: Yup.string().email().required('Required input'),
    password: Yup.string().required('Required input'),
});

export const schemaFormRegister = Yup.object({
    nom: Yup.string()
        .min(4, '4 caractères minimum ')
        .max(20, 'le nom est trop long')
        .required('Champ obligatoire'),
    prenom: Yup.string()
        .min(4, '4 caractères minimum ')
        .max(20, 'le nom est trop long')
        .required('Champ obligatoire'),
    adresse: Yup.string().required('Champ obligatoire'),
    codePostal: Yup.string().required('Champ est obligaoire'),
    ville: Yup.string().required('Champ est obligaoire'),
    telephone: Yup.number()
        .typeError('Verifier votre numero de telephone svp')
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('Champ obligatoire'),
    email: Yup.string().email('Email nest pas valide').required('Champ obligatoire'),
    password: Yup.string()
        .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
        .required('Champ obligatoire'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Erreure dans le mot de passe ')
        .required('Champ obligatoire'),
});
export const schemaFormContact = Yup.object().shape({
    nom: Yup.string().max(20).required('Le nom est requis'),
    prenom: Yup.string().max(20).required('Votre prénom est requis'),
    telephone: Yup.string().max(20).required('Entrez un numéro de téléphone valide'),
    email: Yup.string()
        .required('Le Champ email est est réquis')
        .email('Veuillez entrer une adresse email valide'),
    numero_commande: Yup.string().required(),
    message: Yup.string()
        .max(500, 'Votre message doit se limiter au plus 500')
        .required('Pourqoui nous contacter'),
});
export const schemaFormForgetPassword = Yup.object().shape({
    email: Yup.string().email('Email nest pas valide').required('Champ obligatoire'),
});
export const schemaFormForgetPasswordValidate = Yup.object({
    password: Yup.string()
        .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
        .required('Champ obligatoire'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Erreure dans le mot de passe ')
        .required('Champ obligatoire'),
});

export const schemaFormAvis = Yup.object().shape({
  nom: Yup.string().max(20).required("Le nom est requis"),
  rating: Yup.number().max(20).required("Notez de 1 à 5 étoiles"),
  ratingp: Yup.number().max(10).required("Notez de 1 à 5 étoiles"),
  ratingq: Yup.number().max(10).required("Notez de 1 à 5 étoiles"),
  comment: Yup.string().max(500, "Votre message doit se limiter au plus 500")
});

export const schemaFormRep = Yup.object().shape({
  message: Yup.string().max(500).required("Le nom est requis"),
});