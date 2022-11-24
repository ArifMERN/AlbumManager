import React, { useContext, useState } from "react";
import { AlbumContext } from "../context/AlbumContext";
import { useNavigate } from "react-router";

const AddAlbum = () => {
  const navigate = useNavigate();
  const { changeInAlbums, albums } = useContext(AlbumContext);
  const [albumdata, setAlbumdata] = useState("");
  const addAlbum = () => {
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
            required
            placeholder="add the album...."
          />
          <button onClick={addAlbum}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddAlbum;
