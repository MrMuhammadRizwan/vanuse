import React, { useState, useEffect } from "react";
import HeaderBar from "../components/header/headerBar";
import SearchCard from "../components/searchCard/searchCard";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const authorized = useSelector((state) => state.authorized);
  useEffect(() => {
    let user = localStorage.getItem("token");
    if (user) {
      dispatch({
        type: "SET_AUTHORIZED",
        user: user,
      });
    } else {
      dispatch({
        type: "SET_UNAUTHORIZED",
      });
    }
  }, []);
  return (
    <>
      <HeaderBar authorized={authorized}/>
      <main className='main-content'>
        <div className='banner-container'>
          <SearchCard authorized={authorized}/>
        </div>
      </main>
    </>
  )
}
