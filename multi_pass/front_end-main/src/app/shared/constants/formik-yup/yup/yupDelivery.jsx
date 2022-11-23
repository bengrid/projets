import * as Yup from 'yup';

export const schemaFormDelivery = Yup.object().shape({
    livraison: Yup.boolean().required().oneOf([0,1], 'Veuillez sélectionner un mode de livraison'),
})