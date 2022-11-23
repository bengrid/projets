import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  URL_HOME,
  URL_INCRISPTION,
  URL_LOGIN,
} from "./../../shared/constants/urls/urlConstants";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLogged,
  signOut,
} from "../../shared/redux-store/authenticationSlice";
import logo from "../../assets/images/PCbuilding_logo-1.png";
import Navigation from "./Navigation";
import { CgSearch } from "react-icons/cg";
import IconPanier from './../cart/IconPanier';

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="top-0  z-50 w-full shadow-md bg-colornav-100">
      {/*youssef a enlevé le fixed*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 md:space-x-10">
          <div>
            <img
              className="h-16 w-auto sm:h-16 cursor-pointer"
              // src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
              src={logo}
              alt="Pc Building"
              width={64}
              height={64}
              onClick={() => {
                history.push(URL_HOME);
              }}
            />
          </div>

          <div className="w-3/5">
            <SearchBar />
          </div>

          <div className="flex">
            <div className="hidden md:flex items-center justify-end flex-1">
              <ConnectionBtn />
            </div>
            <div className="hidden md:block">
              <IconPanier />
            </div>
          </div>
        </div>

        <div>
          <Navigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const SearchBar = () => {
  const [keyword, setKeyword] = useState();
  let history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/rech/${keyword}`);
      window.location.reload();
    } else {
      history.push("/");
    }

  };
  return (
    <form onSubmit={submitHandler}>
      <div className="pt-2 relative mx-auto text-gray-600 ml-auto sm:ml-5">
        <input
          className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm  sm:pr-0 sm:px-1 sm:justify-center"
          type="search"
          placeholder="Cherchez un produit ..."
          onChange={(e) => setKeyword(e.target.value.trim())}
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <CgSearch className="text-black-600 h-4 w-4 " />
        </button>
      </div>
    </form>
  );
};

const ConnectionBtn = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  if (isLogged)
    return (
      <button
        className="ml-8 btn btn-green"
        onClick={() => dispatch(signOut())}
      >
        Sign out
      </button>
    );
  else
    return (
      <>
        <Link to={URL_LOGIN}>
          <div className="link">Sign in</div>
        </Link>
        <Link to={URL_INCRISPTION}>
          <button className="ml-8 btn btn-green">Sign up</button>
        </Link>
      </>
    );
};
