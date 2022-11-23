
import apiBackEnd from './api.Backend';
import { URL_BACK_AUTHENTICATE, URL_BACK_CONFIRMPASSWORDVALIDATE } from './../../shared/constants/urls/urlBackEnd';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values)
}

export function likessend(values) {
    return apiBackEnd.put("/produit/avis/likes", values)
}

export function dropcomm(values) {
    return apiBackEnd.put("/produit/avis/drop", values)
}

export function likesdrop(values) {
    return apiBackEnd.put("/produit/avis/unlikes", values)
}
export function forgetPasswordValidate(values) {
    return apiBackEnd.post(URL_BACK_CONFIRMPASSWORDVALIDATE, values)
}