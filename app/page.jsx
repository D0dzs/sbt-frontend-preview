import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="mx-auto grid bg-bme-black items-center justify-center h-screen">
      <Navbar />
      <h1 className="text-center text-5xl font-poppins font-semibold bg-gradient-to-r from-bme-purple to-bme-orange p-2 text-transparent bg-clip-text">
        Work in progress...
      </h1>
    </div>
  );
}
