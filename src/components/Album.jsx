import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../context/AlbumContext";
// import { Link } from "react-router-dom";

const Album = (album) => {
  const { changeInAlbums, albums } = useContext(AlbumContext);

  const [inputData, setInputData] = useState("");

  // handle Delete to delete the item.
  const handleDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method: "DELETE",
      }).then((response) => {
        response.json().then((data) => {
          let updatedAlbums = albums.filter((album) => album.id !== id);
          changeInAlbums(updatedAlbums);
          alert("deleted the entry");
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  // update
  const handleUpdate = (id, album) => {
    let ele = document.getElementById(id).childNodes[0];
    let button = document.getElementById(id).childNodes[1];
    ele.childNodes[0].setAttribute("class", "hideData");
    ele.childNodes[1].setAttribute("class", "");
    button.childNodes[0].setAttribute("class", "hideData");
    button.childNodes[1].setAttribute("class", "");
    setInputData(album);
  };
  // handle change in input
  const handleChange = (e) => {
    // e.preventDefault();
    setInputData(e.target.value);
    // console.log(inputData);
  };
  // console.log(album);
  const handleSave = async (id) => {
    let info = {
      id: albums.length + 1,
      title: inputData,
      userId: 10,
    };
    await fetch(`https://jsonplaceholder.typicode.com/albums/1`, {
      method: "PUT",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let updatedAlbums = albums;

        updatedAlbums.find((a) => a.id === id).title = inputData;
        changeInAlbums(updatedAlbums);
      });

    let ele = document.getElementById(id).childNodes[0];
    let button = document.getElementById(id).childNodes[1];
    ele.childNodes[0].setAttribute("class", "");
    ele.childNodes[1].setAttribute("class", "hideData");
    button.childNodes[0].setAttribute("class", "");
    button.childNodes[1].setAttribute("class", "hideData");
  };
  const handleEnter = (e, id) => {
    if (e.key === "Enter") handleSave(id);
  };
  // useEffect({}, []);
  // console.log(album.id);
  return (
    <div className="album" id={album.id}>
      <div className="albumData">
        <p>{album.album}</p>

        <input
          id="albumUpdate"
          type="text"
          className="hideData"
          value={inputData}
          onChange={handleChange}
          onKeyDown={(e, id) => {
            handleEnter(e, album.id);
          }}
          required
        />
      </div>
      <div className="buttons">
        <button
          className="update"
          onClick={() => {
            handleUpdate(album.id, album.album);
          }}
        >
          Update
        </button>
        <button
          className="hideData"
          onClick={() => {
            handleSave(album.id);
          }}
        >
          Save
        </button>
        <button
          className="delete"
          onClick={() => {
            handleDelete(album.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Album;
