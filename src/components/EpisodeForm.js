import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";

const EpisodesForm = (props) => {


  const initialStateValues = {
    episodeName: "",
    noEpisode:"",
    format: "QFDE",
    description: "",
    img: "",
    audio:"",
    specialGuest: "",
    igGuest:"",

  };

  const RYC = "RYC";
  const QFDE = "QFDE";

  const [values, setValues] = useState(initialStateValues);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const validURL = (str) => {
  //   var pattern = new RegExp(
  //     "^(https?:\\/\\/)?" + // protocol
  //     "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  //     "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  //     "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  //     "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
  //       "(\\#[-a-z\\d_]*)?$",
  //     "i"
  //   ); // fragment locator
  //   return !!pattern.test(str);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!validURL(values.igGuest)) {
    //   return toast("invalid url", { type: "warning", autoClose: 1000 });
    // }

    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group">
        <input
          type="text"
          value={values.episodeName}
          name="episodeName"
          placeholder="Nombre del capítulo"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Número de cápitulo"
          value={values.noEpisode}
          name="noEpisode"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <textarea
          rows="3"
          className="form-control"
          placeholder="Descripción del episodio"
          name="description"
          value={values.description}
          onChange={handleInputChange}
        ></textarea>
      </div>


      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del invitado"
          value={values.specialGuest}
          name="specialGuest"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa el ig del invitado"
          value={values.igGuest}
          name="igGuest"
          onChange={handleInputChange}
        />
      </div>
      
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa la url del audio"
          value={values.audio}
          name="audio"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Url para la imagen"
          value={values.img}
          name="img"
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <select onChange={handleInputChange} name="format" >
          <option value={ QFDE }>¿QFDE?</option>
          <option value={ RYC }>R Y C</option>
        </select>
      </div>



      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Save" : "Update"}
      </button>

    </form>
  );
};

export default EpisodesForm;
