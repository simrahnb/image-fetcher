import './input.css'

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import ImageResults from "./components/ImageResults";

// hooks
import { useAxios } from "./hooks/useAxios";
import { useState } from "react";
import { createContext } from "react";

// context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const [initial, setInitial] = useState(false);
  const { response, isLoading, error, fetchImages } = useAxios(
    `search/photos?page=1&per_page=20&client_id=wp4V2zmPPuNtShrse3_WBqmHSPuYXJE6EjsRxUROzKo`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchImages,
    searchImage,
    setSearchImage,
    initial,
    setInitial,
  };

  return (
    <ImageContext.Provider value={value}>
      <Header />
      <SearchBar />
      <ImageResults />
    </ImageContext.Provider>
  );
}

export default App;
