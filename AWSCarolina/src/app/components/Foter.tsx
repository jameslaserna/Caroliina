import Image from 'next/image';

const Foter = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">
            We offer quality
            <span className="font-normal">with the best materials and service</span>
          </h2>

          <div className="bg-white p-8 rounded shadow mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded shadow text-center">
                <Image
                  src="https://images.pexels.com/photos/29584452/pexels-photo-29584452/free-photo-of-monstruo-de-kee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Quality Service"
                  className="mx-auto mb-4 w-16 h-16"
                  width={64}
                  height={64}
                />
                <h3 className="text-xl font-semibold">Quality Service</h3>
                <p className="text-gray-600 text-sm mt-2">
                  We ensure our customers receive the best quality service in the industry.
                </p>
              </div>
          
              <div className="bg-white p-6 rounded shadow text-center">
                <Image
                  src="https://images.pexels.com/photos/29584452/pexels-photo-29584452/free-photo-of-monstruo-de-kee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Customer Support"
                  className="mx-auto mb-4 w-16 h-16"
                  width={64}
                  height={64}
                />
                <h3 className="text-xl font-semibold">Customer Support</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Our team is available 24/7 to help you with your needs.
                </p>
              </div>
             
              <div className="bg-white p-6 rounded shadow text-center">
                <Image
                  src="https://images.pexels.com/photos/29584452/pexels-photo-29584452/free-photo-of-monstruo-de-kee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Innovative Solutions"
                  className="mx-auto mb-4 w-16 h-16"
                  width={64}
                  height={64}
                />
                <h3 className="text-xl font-semibold">Innovative Solutions</h3>
                <p className="text-gray-600 text-sm mt-2">
                  We provide solutions tailored to your specific energy needs.
                </p>
              </div>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded shadow text-center">
                <Image
                  src="https://images.pexels.com/photos/29584452/pexels-photo-29584452/free-photo-of-monstruo-de-kee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Quality Service"
                  className="mx-auto mb-4 w-16 h-16 rounded-full"
                  width={64}
                  height={64}
                />
                <h3 className="text-xl font-semibold">Quality Service</h3>
                <p className="text-gray-600 text-sm mt-2">
                  We ensure our customers receive the best quality service in the industry.
                </p>
              </div>
         
              <div className="bg-white p-6 rounded shadow text-center">
                <Image
                  src="https://images.pexels.com/photos/29584452/pexels-photo-29584452/free-photo-of-monstruo-de-kee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Customer Support"
                  className="mx-auto mb-4 w-16 h-16"
                  width={64}
                  height={64}
                />
                <h3 className="text-xl font-semibold">Customer Support</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Our team is available 24/7 to help you with your needs.
                </p>
              </div>
        
              <div className="bg-white p-6 rounded shadow text-center">
                <Image
                  src="https://images.pexels.com/photos/29584452/pexels-photo-29584452/free-photo-of-monstruo-de-kee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Innovative Solutions"
                  className="mx-auto mb-4 w-16 h-16"
                  width={64}
                  height={64}
                />
                <h3 className="text-xl font-semibold">Innovative Solutions</h3>
                <p className="text-gray-600 text-sm mt-2">
                  We provide solutions tailored to your specific energy needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Trusted service,{" "}
              <span className="font-normal text-gray-600">for your various needs</span>
            </h2>
            <button className="bg-green-500 text-white px-6 py-2 rounded mt-6">
              Get Started
            </button>
            <div className="grid grid-cols-2 gap-0 mt-6 border border-gray-200">
              <div className="bg-gray-100 p-4 rounded shadow border-b border-r border-gray-200">
                <h3 className="text-lg font-semibold">Service 1</h3>
                <p className="text-gray-600 text-sm mt-2">Description of service 1.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow border-b border-gray-200">
                <h3 className="text-lg font-semibold">Service 2</h3>
                <p className="text-gray-600 text-sm mt-2">Description of service 2.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow border-r border-gray-200">
                <h3 className="text-lg font-semibold">Service 3</h3>
                <p className="text-gray-600 text-sm mt-2">Description of service 3.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <h3 className="text-lg font-semibold">Service 4</h3>
                <p className="text-gray-600 text-sm mt-2">Description of service 4.</p>
              </div>
            </div>
          </div>
         
          {/* Imagen separada y más grande */}
          <div className="rounded overflow-hidden mt-4 md:mt-0 md:ml-[-50px] md:ml-[30px]">
            <Image
              src="https://images.pexels.com/photos/12762122/pexels-photo-12762122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=236.25&fit=crop&h=382.5"
              alt="Service Image"
              className="w-[400px] h-[500px] object-cover"
              width={400}
              height={500}
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Foter;
