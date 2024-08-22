const Contact = () => {
  return (
    <div className="flex">
      <div className="w-[695px]  border border-black h-[620px] flex-col items-start">
        <div className="flex flex-col p-10 text-left">
          <h1 className="text-6xl">To Contact Us</h1>
          <h2 className="mt-5 text-2xl">We will call you back</h2>
          <div className="flex gap-4 mt-4">
            <div className="border border-black w-[250px] h-[50px] p-2 text-gray-500">
              <h2>+380 XX XXX XX XX</h2>
            </div>
            <div className="border border-black w-[250px] h-[50px] p-2 justify-center text-center bg-black text-white">
              <h1>BOOK A CALL</h1>
            </div>
          </div>
          
        </div>
        <div className="flex border-t border-black mt-5">
            <div className="border-b border-r border-black w-[350px] h-[50px] p-2">
                <h1 className="text-2xl">Phone</h1>
            </div>
            <div className="border-b  border-black w-[350px] h-[50px] p-2">
                <h1 className="text-2xl">Address</h1>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
