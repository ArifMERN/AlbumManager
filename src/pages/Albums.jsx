import React, { useContext } from "react";
import Album from "../components/Album";
import { AlbumContext } from "../context/AlbumContext";

const Albums = () => {
  const { albums, loading } = useContext(AlbumContext);
  // console.log(albums);

  return (
    <div>
      {!loading ? (
        albums
          .sort((a, b) => b.id - a.id)
          .map((album) => {
            return <Album key={album.id} album={album.title} id={album.id} />;
          })
      ) : (
        <h1 className="loading">loading....</h1>
      )}
    </div>
  );
};

export default Albums;
