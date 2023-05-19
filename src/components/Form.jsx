import React, { useState } from "react";
import house from "./assets/mashHouse.png";
import Navbar from "./Navbar";

function Form() {
  const [partnerOption, setPartnerOption] = useState("");
  const [kidsOption, setKidsOption] = useState("");
  const [careerOption, setCareerOption] = useState("");
  const [carOption, setCarOption] = useState("");
  const [salaryOption, setSalaryOption] = useState("");
  const [deathOption, setDeathOption] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the selected options
    // Calculate the result based on the selected options
    const resultText = `You will marry ${partnerOption} and have ${kidsOption} kids together. You will work as a ${careerOption} for a living, make ${salaryOption} dollars a year, and drive a ${carOption}. You will die by ${deathOption}.`;
    setResult(resultText);
  };

  return (
    <div>
      <Navbar />
      <div
        className="flex justify-center items-center h-screen"
        style={{
          backgroundImage: `url(${house})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">MASH Game</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="text-center">
              <div className="mb-4">
                <label
                  htmlFor="mansion"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Love interest:
                </label>
                <input
                  type="text"
                  id="partner"
                  value={partnerOption}
                  onChange={(e) => setPartnerOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="apartment"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Amount of kids:
                </label>
                <input
                  type="text"
                  id="kids"
                  value={kidsOption}
                  onChange={(e) => setKidsOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="shack"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Career choice:
                </label>
                <input
                  type="text"
                  id="career"
                  value={careerOption}
                  onChange={(e) => setCareerOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="text-center">
              <div className="mb-4">
                <label
                  htmlFor="house"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Transportation:
                </label>
                <input
                  type="text"
                  id="transportation"
                  value={carOption}
                  onChange={(e) => setCarOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="house"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Salary:
                </label>
                <input
                  type="int"
                  id="salary"
                  value={salaryOption}
                  onChange={(e) => setSalaryOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="house"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Death:
                </label>
                <input
                  type="text"
                  id="death"
                  value={deathOption}
                  onChange={(e) => setDeathOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#F70753] text-white px-2 py-1 rounded-md col-span-2"
              >
                Submit
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-4 p-3 rounded-md bg-white">
              <h2 className="text-lg font-bold mb-2">Result:</h2>
              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
