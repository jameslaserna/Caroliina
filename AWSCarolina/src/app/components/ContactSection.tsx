const ContactSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      

     
      <footer className="w-full mt-16 bg-gray-900 p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 md:flex-row justify-between items-center text-sm">
          <div>
            <h2 className="font-bold text-lg">Elegant</h2>
            <p>Elevate Your Style Today!</p>
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
            <div>
              <h3 className="font-bold">Contact us</h3>
              <ul className="flex gap-4">
                <li>🔗</li>
                <li>🔗</li>
                <li>🔗</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
