import apiBackEnd from './api.Backend';
import { URL_BACK_CART } from './../../shared/constants/urls/urlBackEnd';

export function cartToBack(values) {
    console.log('values', values)
    return apiBackEnd.post(URL_BACK_CART, values)
}

export async function findProduct(id) {
    return await apiBackEnd.get(`/produit/${id}`)
}