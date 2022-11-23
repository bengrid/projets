import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  URL_HOME,
  URL_LOGIN,
  URL_ADMIN_HOME,
  URL_INCRISPTION,
  URL_TEST,
  URL_CONTACT,
  URL_MESSAGE,
  URL_LISTE_PRODUIT,
  URL_LISTE_PRODUIT_RECH,
  URL_DETAIL_PRODUIT,
  URL_PROFIL,
  URL_FORGETPASSWORD,
  URL_PANIER,
  URL_PAIEMENT,
  URL_INFORMATIONS,
  URL_VAL_COMMANDE
} from "../shared/constants/urls/urlConstants";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import AdminHomeView from "../views/AdminHomeView";
import ProfilView from '../views/ProfilView'
import ContactView from "../views/ContactView";
import PaiementView from "../views/PaiementView";
import ValidationView from "../views/ValidationView";
import ListeProduitView from "../views/ListeProduitView";
import ListeTousProuduitView from "../views/ListeTousProuduitView";
import PanierView from "../views/PanierView";
import test from "../views/test";
import { customHistory } from "../shared/services/historyServices";
import { ROLE_ADMIN } from "../shared/constants/rolesConstant";
import { PrivateRoute } from "../shared/components/utils-components/PrivateRoute";
import MessageContact from "../components/Contact/MessageContact";
import DetailsProduits from "../components/Produits/DetailsProduits";
import ForgetPassword from "../components/account/ForgetPassword";
import InformationsView from "../views/InformationsView";





/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  return (
    <Switch history={customHistory}>
      <Route path={URL_LOGIN} component={LoginView} />
      <Route path={URL_INCRISPTION} component={RegisterView} />



      <PrivateRoute
        path={URL_ADMIN_HOME}
        component={AdminHomeView}
        roles={[ROLE_ADMIN]}
      />
      <Route path={URL_PROFIL} component={ProfilView} />
      <Route exact path={URL_TEST} component={test} />
      <Route exact path={URL_HOME} component={HomeView} />
      <Route exact path={URL_CONTACT} component={ContactView} />
      <Route exact path={URL_MESSAGE} component={MessageContact} />
      <Route exact path={URL_LISTE_PRODUIT} component={ListeTousProuduitView} />
      <Route exact path={URL_VAL_COMMANDE} component={ValidationView} />
      <Route exact path={`${URL_LISTE_PRODUIT_RECH}/:keyword`} component={ListeProduitView} />
      <Route exact path={`${URL_DETAIL_PRODUIT}/:_id`} component={DetailsProduits} />
      <Route exact path={`${URL_FORGETPASSWORD}/:token`} component={ForgetPassword} />
      <PrivateRoute exact path={URL_PANIER} component={PanierView} />
      <PrivateRoute exact path={URL_PAIEMENT} component={PaiementView} />
      <Route exact path={URL_INFORMATIONS} component={InformationsView} />

    </Switch>
  );
};

export default Routes;
