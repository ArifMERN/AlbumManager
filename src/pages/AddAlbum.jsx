import React, { useContext, useState, useRef } from "react";
import { AlbumContext } from "../context/AlbumContext";
import { useNavigate } from "react-router";

const AddAlbum = () => {
  const navigate = useNavigate();
  const { changeInAlbums, albums } = useContext(AlbumContext);
  const [albumdata, setAlbumdata] = useState("");
  const disable = useRef(null);
  const addAlbum = () => {
    disable.current.disabled = true;
    let data = { userId: 1, id: albums.length + 1, title: albumdata };
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        let prevAlbum = albums;
        prevAlbum.push(data);
        changeInAlbums(prevAlbum);
        disable.current.disabled = false;
        // alert("album created");
        navigate("/albums");
      });
  };
  const handleChage = (e) => {
    setAlbumdata(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") addAlbum();
  };
  return (
    <div className="addAlbum">
      <div className="card">
        <h1>Add Album</h1>
        <div className="data">
          <input
            type="text"
            onChange={handleChage}
            onKeyDown={handleEnter}
            placeholder="add the album...."
          />
          <button onClick={addAlbum} ref={disable}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAlbum;
