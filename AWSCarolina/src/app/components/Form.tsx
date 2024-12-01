
import Image from 'next/image'
const Form = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            See how we solve 
            <span className="text-green-500">problems, right on target</span>
          </h1>
          <p className="text-gray-600">
            This project was one of a kind, the pivot of our future as a team. Were more confident as a company, thanks to this wonderful technology.
          </p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://images.pexels.com/photos/29585192/pexels-photo-29585192/free-photo-of-tranquilo-lago-artico-con-montanas-nevadas.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Project image"
            className="w-full h-auto rounded-lg shadow-lg"
            width={400}  // Ajusta el valor según lo necesites
            height={300}  // Esto no es posible en Next.js, se debe especificar un valor para la altura
          />
        </div>
      </div>

      <hr className="border-gray-300" />

      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold">
              Its time to support zero pollution,  with renewable resources
            </h2>
            <p className="text-gray-400">
              A cleaner environment makes for a healthier future. Lets work together to bring new
              technology to life for everyone.
            </p>
          </div>

          <div className="flex flex-col items-end space-y-4">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">🔗</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">🔗</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">🔗</a>
              </li>
            </ul>
            <p className="text-gray-600 text-sm">© 2024 Your Company. All Rights Reserved.</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col gap-6 md:flex-row justify-between items-center text-sm">
          <div>
            <h2 className="font-bold text-lg">Elegant</h2>
            <p>Elevate Your Style Today</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-4 md:mt-0">
            <div>
              <h3 className="font-bold">Pages</h3>
              <ul>
                <li>Home</li>
                <li>New Collection</li>
                <li>Contact</li>
                <li>Delivery</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Legal information</h3>
              <ul>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};


export default Form;
