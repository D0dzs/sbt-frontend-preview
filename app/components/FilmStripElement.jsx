const FilmStripElement = ({ imageURL }) => {
  return (
    <div className="relative flex flex-col shrink-0 overflow-hidden -m-px">
      <img src={'/hero/dfilmstrip.svg'} alt="Filmstrip" className="z-10 h-full dark:hidden" />
      <img src={'/hero/lfilmstrip.svg'} alt="Filmstrip" className="z-10 hidden h-full dark:block" />
      <div className="absolute top-1/2 left-1/2 aspect-[4/3] w-full -translate-x-1/2 -translate-y-1/2">
        <img src={imageURL} alt="somthing" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default FilmStripElement;
