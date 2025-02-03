export default function Home() {
  return (
    <div className="mx-auto h-screen grid bg-bme-black relative overflow-hidden items-center">
      {/* background */}
      <div
        style={{ transform: 'rotate(45deg) translate(0%, 70%) ' }}
        className="w-[1500px] h-[1500px] bg-bme-purple absolute bottom-0 flex items-center select-none blur-3xl rounded-2xl"
      >
        <div className="relative h-[1000px] w-[1000px] bg-bme-yellow/65 mx-auto" />
      </div>
      {/* real content */}
      <div id="container" className="z-10">
        <h1 className="text-center text-bme-white text-5xl w-full font-comfortaa font-semibold">Work in progress...</h1>
      </div>
    </div>
  );
}
