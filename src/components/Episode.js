import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { db } from "../firebase";


const Episode = (props) => {
      const [links, setLinks] = useState([]);
      //Este id para el parametro de la url
      const {id} = useParams();
      //Esta función hace la petición a firebase
      const getLinks = async () => {
        db.collection("links")
        .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLinks(docs);
      });
    };
    useEffect(() => {
      getLinks();
    }, []);
  return (
    <>
    {/* este link.map itera la respuesta, pero muestra info ajena a la del id */}
      {links.map((link) => (
        <p>
          {link.id}
        </p>
      ))}
      {/* Este id, es el de useParams, pero mostrado en pantalla */}
      {id}
    </>
  );
};

export default Episode;
