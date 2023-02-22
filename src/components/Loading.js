export default function Loading() {
    return (
      <div class="lg:w-2/2 md:w-1/3 mx-auto flex flex-wrap m-2">
        <strong>Loading images...</strong>
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
    );
  }
  