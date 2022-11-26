import { createContext, useEffect, useState } from "react";
import Albums from "../pages/Albums";

export const AlbumContext = createContext();
export const AlbumContextProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [updatedAlbum,setUpdatedAlbum]= useState([]);
  const changeInAlbums = (updatedAlbum) => {
    setAlbums([...updatedAlbum]);
  };
  const getAlbums = async () => {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/albums").then(
      (Response) => {
        Response.json().then((albums) => {
          setAlbums(albums);
          setLoading(false);
        });
      }
    );
  };
  useEffect(() => {
    getAlbums();
  }, [Albums]);
  return (
    <AlbumContext.Provider value={{ albums, loading, changeInAlbums }}>
      {children}
    </AlbumContext.Provider>
  );
};
