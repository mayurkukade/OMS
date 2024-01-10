const Home = () => {
  return (
    <>
      <div className=" w-full h-screen bg-[url(./img/Rectangle.png)] bg-cover">
        <div className="flex justify-between p-4 align-middle bg-white">
          <div>
            <img className="w-10" src="./img/Menu.svg" alt="Menu" />
          </div>
          <div className="flex gap-5">
            <div className="text-white text-xl font-medium font-[Fredoka One] bg-[#7071E8] px-5 py-2 rounded-md break-words">
              Sign Up
            </div>
            <div className="text-white text-xl font-medium font-[Fredoka One] bg-[#7071E8] px-5 py-2 rounded-md break-words">
              Log In
            </div>
          </div>
        </div>
        <div className="text-7xl font-[Fredoka One] font-semibold text-center break-words pt-40 flex justify-center">
          <h1 className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to bg-blue-500 bg-clip-text">
            One app to replace <br /> them all
          </h1>
        </div>
        <div className="text-black text-xl font-[Fredoka] font-semibold break-words text-center pt-4">
          Everyone working in a single platform <br /> to manage task
        </div>
        <div className="flex justify-center p-4">
          <div className="flex justify-center p-4 rounded-3xl gap-4 bg-gradient-to-r from-[#079CFF] from-16% via-[#7426FE] from-30% to-[#A90AF6]">
            <div className="text-white text-xl font-[Fredoka] font-semibold break-words">
              Get Started. Its Free
            </div>
            <img className="w-8" src="./img/Arrow.svg" alt="Arrow" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex">
            <img className="w-6" src="./img/Star.svg" alt="Star" />
            <img className="w-6" src="./img/Star.svg" alt="Star" />
            <img className="w-6" src="./img/Star.svg" alt="Star" />
            <img className="w-6" src="./img/Star.svg" alt="Star" />
            <img className="w-6" src="./img/Star.svg" alt="Star" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
