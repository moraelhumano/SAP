import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

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
             <div className="card mb-1 mt-4 " key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">

                <Link to={`/episodio/${link.id}`}>
                  <h4>{link.episodeName}</h4>
                </Link>                

              </div>
              <p>{link.description}</p>
              {link.specialGuest === "" ? (
                  <span></span>
                ) : (
                  <label> 
                  <p>{link.specialGuest}</p>  
                    <a href={link.igGuest} target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                </label>
                )}
            </div>
            <img src={link.img} /> 
            <iframe src={link.audio} />
            
          </div>


    </>
  );
};

export default Episode;
