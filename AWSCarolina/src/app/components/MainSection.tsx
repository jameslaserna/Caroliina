import Image from 'next/image';

const MainSection = () => {
  return (
    <div className="bg-white font-sans">
      <div
        className="relative h-[600px] text-center flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/29585458/pexels-photo-29585458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Imagen de Freepik
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Imagen pequeña en la parte superior derecha */}
        <div className="absolute top-10 right-10 z-10 max-h-9">
          <Image
            src="https://images.pexels.com/photos/29585158/pexels-photo-29585158.jpeg?auto=compress&cs=tinysrgb&w=300" // Imagen de Freepik
            alt="Imagen pequeña"
            width={300}
            height={169}
          />
        </div>

        <div className="text-white px-6 sm:px-13 text-left max-w-3xl">
          <p className="text-lg mb-2 font-extralight opacity-80">Changing power for the world</p>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-8">
            New Energy for the Future
          </h1>
        </div>

        {/* Caja de información con estadísticas */}
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-[350px] absolute right-9 top-[80%] transform -translate-y-1/2">
          <div className="flex space-x-6">
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl font-bold">6k</h2>
              <p className="mt-2 text-sm sm:text-base">Toneladas de CO2 eliminadas</p>
            </div>
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl font-bold">315</h2>
              <p className="mt-2 text-sm sm:text-base">Proyectos completados</p>
            </div>
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl font-bold">120K</h2>
              <p className="mt-2 text-sm sm:text-base">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de confianza con logos */}
      <div className="py-16 px-8 bg-white text-center">
        <div className="flex items-center space-x-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Focusing on quality, we maintain customer trust
            </h2>
          </div>
          <div>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700 mb-8">
              With years of experience and high-quality standards, we deliver the best renewable energy solutions tailored to your needs.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
            <Image
              src="https://images.pexels.com/photos/4452510/pexels-photo-4452510.jpeg?auto=compress&cs=tinysrgb&w=300" // Imagen de Freepik
              alt="Logo 1"
              className="w-10 h-10"
              width={40}
              height={40}
            />
          </div>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_WFJFB-bES0HMIXEQet9RLDPquRPCDG7ag&s" // Logo 2
              alt="Logo 2"
              className="w-10 h-10"
              width={40}
              height={40}
            />
          </div>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_WFJFB-bES0HMIXEQet9RLDPquRPCDG7ag&s" // Logo 3
              alt="Logo 3"
              className="w-10 h-10"
              width={40}
              height={40}
            />
          </div>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_WFJFB-bES0HMIXEQet9RLDPquRPCDG7ag&s" // Logo 4
              alt="Logo 4"
              className="w-10 h-10"
              width={40}
              height={40}
            />
          </div>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_WFJFB-bES0HMIXEQet9RLDPquRPCDG7ag&s" // Logo 5
              alt="Logo 5"
              className="w-10 h-10"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      <footer className="text-center py-4">
        <p className="text-sm text-gray-600">
          Imagen por <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a> y <a href="https://www.google.com/imghp" target="_blank" rel="noopener noreferrer">Google</a>.
        </p>
      </footer>
    </div>
  );
};

export default MainSection;
