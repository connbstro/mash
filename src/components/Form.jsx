import React, { useState } from "react";
import house from "./assets/mashHouse.png";
import Navbar from "./Navbar";

function Form() {
  const [partnerOption, setPartnerOption] = useState("");
  const [partnerOption2, setPartnerOption2] = useState("");
  const [kidsOption, setKidsOption] = useState("");
  const [careerOption, setCareerOption] = useState("");
  const [carOption, setCarOption] = useState("");
  const [salaryOption, setSalaryOption] = useState("");
  const [deathAgeOption, setDeathAgeOption] = useState("");
  const [deathOption, setDeathOption] = useState("");
  const [result, setResult] = useState("");

  const partners = ["John", "Lisa", "Michael", "Sarah", "Brooke", "Jess"];
  const kids = ["0", "1", "2", "3", "5", "10"];
  const careers = [
    "Engineer",
    "Teacher",
    "Doctor",
    "Artist",
    "Developer",
    "Lawyer",
  ];
  const cars = ["Sedan", "SUV", "Sports Car", "Truck", "Bike", "Lambo"];
  const salaries = [
    "$50,000",
    "$80,000",
    "$100,000",
    "$150,000",
    "$0",
    "$1,000,000",
  ];
  const deathAges = ["70", "80", "90", "100", "25", "40", "50"];
  const deaths = [
    "Old Age",
    "Accident",
    "Disease",
    "Natural Causes",
    "Skydiving",
    "Hotdog",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let selectedPartner;
    if (partnerOption && partnerOption2) {
      // Randomly pick one of the two assigned values
      const randomIndex = Math.random() < 0.5 ? 0 : 1;
      selectedPartner = [partnerOption, partnerOption2][randomIndex];
    } else {
      // If either of the fields is empty, select the non-empty value or choose a random value
      selectedPartner =
        partnerOption ||
        partnerOption2 ||
        partners[Math.floor(Math.random() * partners.length)];
    }
    const selectedKids =
      kidsOption || kids[Math.floor(Math.random() * kids.length)];
    const selectedCareer =
      careerOption || careers[Math.floor(Math.random() * careers.length)];
    const selectedCar =
      carOption || cars[Math.floor(Math.random() * cars.length)];
    const selectedSalary =
      salaryOption || salaries[Math.floor(Math.random() * salaries.length)];
    const selectedDeathAge =
      deathAgeOption || deathAges[Math.floor(Math.random() * deathAges.length)];
    const selectedDeath =
      deathOption || deaths[Math.floor(Math.random() * deaths.length)];

    const resultText = `You will marry ${selectedPartner} and have ${selectedKids} kids together. You will work as a ${selectedCareer} for a living, make ${selectedSalary} a year, and drive a ${selectedCar}. You will die at the age of ${selectedDeathAge} by ${selectedDeath}.`;
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
            Click Submit for a random result or input your own answers
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
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
                <br />
                <input
                  type="text"
                  id="partner2"
                  value={partnerOption2}
                  onChange={(e) => setPartnerOption2(e.target.value)}
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
              <div className="mb-4">
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

            {/* Middle Column */}
            <div className="text-center">
              <div className="mb-4">
                <label
                  htmlFor="deathAge"
                  className="block mb-2 font-bold text-2xl text-black bg-opacity-50 rounded-full"
                >
                  Death age:
                </label>
                <input
                  type="text"
                  id="deathAge"
                  value={deathAgeOption}
                  onChange={(e) => setDeathAgeOption(e.target.value)}
                  className="border border-gray-300 rounded-md p-1"
                />
              </div>
              {/* ... */}
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
                  type="text"
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
                  Cause of death:
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
            <div className="col-span-3 flex justify-center">
              <button
                type="submit"
                className="bg-[#F70753] text-white px-8 py-2 rounded-md"
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
