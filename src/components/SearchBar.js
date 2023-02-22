// hooks & components
import { useContext, useState, useEffect } from "react";
import { ImageContext } from "../App";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const { fetchImages } = useContext(ImageContext);

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    fetchImages(
      `search/photos?page=1&per_page=20&query=${searchValue}&client_id=wp4V2zmPPuNtShrse3_WBqmHSPuYXJE6EjsRxUROzKo`
    );
    setSearchValue("");
  };

  useEffect(() => {
    if (searchValue !== "") {
      fetchImages(
        `search/photos?page=1&per_page=20&query=${searchValue}&client_id=wp4V2zmPPuNtShrse3_WBqmHSPuYXJE6EjsRxUROzKo`
      );
    }
  }, [searchValue]);

  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto flex flex-wrap m-1.5">
      <input
        className="p-2 w-1/2 relative bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-600 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-style: italic mx-14"
        type="search"
        placeholder="Search for images"
        value={searchValue}
        onChange={onChange}
      ></input>
      <button
        onClick={handleSearch}
        disabled={!searchValue}
        className="flex mx-50 text-white bg-gray-400 border-0 py-2 px-9 focus:outline-none hover:bg-gray-600 rounded text-medium"
      >
        Submit
      </button>
    </div>
  );
}
