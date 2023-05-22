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

  const partners = ["Brooke", "Lisa", "Michael", "Sarah", "Carl", "Jess"];
  const kids = ["0", "1", "2", "3", "5", "10"];
  const careers = [
    "Engineer",
    "Teacher",
    "Doctor",
    "Artist",
    "Janitor",
    "Developer",
  ];
  const cars = ["Sedan", "SUV", "Sports Car", "Truck", "Lambo", "bike"];
  const salaries = ["$50,000", "$80,000", "$100,000", "$150,000"];
  const deaths = ["Old Age", "Accident", "Disease", "Natural Causes", "Hotdog"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the selected options
    // Calculate the result based on the selected options

    const selectedPartner =
      partnerOption || partners[Math.floor(Math.random() * partners.length)];
    const selectedKids =
      kidsOption || kids[Math.floor(Math.random() * kids.length)];
    const selectedCareer =
      careerOption || careers[Math.floor(Math.random() * careers.length)];
    const selectedCar =
      carOption || cars[Math.floor(Math.random() * cars.length)];
    const selectedSalary =
      salaryOption || salaries[Math.floor(Math.random() * salaries.length)];
    const selectedDeath =
      deathOption || deaths[Math.floor(Math.random() * deaths.length)];

    const resultText = `You will marry ${selectedPartner} and have ${selectedKids} kids together. You will work as a ${selectedCareer} for a living, make ${selectedSalary} a year, and drive a ${selectedCar}. You will die by ${selectedDeath}.`;
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
          <p className="text-center text-xl text-red-500">
            Click submit for a random outcome or input your own answers!
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="text-center">
              <div className="mb-4">
                <label
                  htmlFor="partner"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Love interest:
                </label>
                <input
                  type="text"
                  id="partner"
                  value={partnerOption}
                  onChange={(e) => setPartnerOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="kids"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Amount of kids:
                </label>
                <input
                  type="text"
                  id="kids"
                  value={kidsOption}
                  onChange={(e) => setKidsOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-1"
                />
              </div>
              <div>
                <label
                  htmlFor="career"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Career choice:
                </label>
                <input
                  type="text"
                  id="career"
                  value={careerOption}
                  onChange={(e) => setCareerOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-1"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="text-center">
              <div className="mb-4">
                <label
                  htmlFor="transportation"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Transportation:
                </label>
                <input
                  type="text"
                  id="transportation"
                  value={carOption}
                  onChange={(e) => setCarOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-1"
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
                  className="border border-gray-300 rounded-md p-1"
                />
              </div>
              <div>
                <label
                  htmlFor="death"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Death:
                </label>
                <input
                  type="text"
                  id="death"
                  value={deathOption}
                  onChange={(e) => setDeathOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-1"
                />
              </div>
            </div>

            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#F70753] text-white px-8 py-2 rounded-md col-span-2"
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
