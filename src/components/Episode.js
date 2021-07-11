import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { db } from "../firebase";


const Episode = (props) => {
  const [link, setLink] = useState({});
  //Este id para el parametro de la url
  const {id} = useParams();
  //Esta función hace la petición a firebase
  const getLink = async () => {
    db.collection('links').doc(id).get().then(doc => {
      console.log(doc.data());
      setLink(doc.data());
    })
  }
  useEffect(() => {
    getLink();
  }, []);
  return (
    <>
      <p>{ link.episodeName }</p>
    </>
  );
};

export default Episode;
