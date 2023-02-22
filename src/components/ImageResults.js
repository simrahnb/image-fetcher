import React, { useContext } from "react";

import Image from "./Image";
import Loading from "./Loading";

import { ImageContext } from "../App";

export default function ImageResults() {
  const { response, error, isLoading, fetchImages, initial, setInitial } =
    useContext(ImageContext);

  return (
    <div class=" mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div class="-m-1 flex flex-wrap md:-m-2">
        {isLoading && !initial ? (
          <Loading />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </div>
  );
}
