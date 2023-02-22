export default function Image({ data }) {
  return (
    <div class="flex w-1/2 flex-wrap">
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img
          class="w-full p-1 md:p-2"
          src={data.urls.small}
          alt={data.alt_description}
        />
      </a>
    </div>
  );
}
