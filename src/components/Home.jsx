import React from "react";
import Navbar from "./Navbar";
import house2 from "./assets/coverHouse.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div name="home" className="h-screen w-full bg-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full w-full md:w-1/2">
            <h3 className="text-2xl">Welcome to</h3>
            <h2 className="text-8xl sm:text-7xl font-bold text-[#030201]">
              MASH
            </h2>
            <p className="text-black py-4 max-w-3xl mx-auto text-xl">
              Having a tough time figuring out what you want to do with your
              future? Join our MASH and let us make the tough choices for you.
            </p>
            <p>
              Returning player?{" "}
              <span>
                <Link to="/login" className="underline">
                  Login
                </Link>
              </span>{" "}
              to view your saved Games and share with friends.
            </p>
            <div>
              <Link
                to="/Form"
                smooth
                duration={500}
                className="group text-[#ffffff] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#010100] cursor-pointer hover:text-black hover:bg-[#ffffff] hover:border-black hover:border-2"
              >
                Play Game
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={house2}
              alt="my profile"
              className="object-scale-down mx-auto rounded-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
