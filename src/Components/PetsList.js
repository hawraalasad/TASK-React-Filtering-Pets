import pets from "../petsData";
import PetItem from "./PetItem";
import React, { useState } from "react";
import Search from "./Search";
import petsData from "../petsData";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  console.log(type);
  const petsQuery = petsData.filter((pet) => {
    if (query.toLowerCase() === "") {
      return true;
    } else {
      return pet.name.toLowerCase().includes(query.toLowerCase());
    }
  });

  const petType = petsQuery.filter((pet) => pet.type.includes(type));

  const petList = petType.map((pet) => <PetItem pet={pet} key={pet.id} />);

  const handleType = (event) => {
    setType(event.target.value);
  };
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <Search setQuery={setQuery} />
              </div>
              <br />
              Type:
              <select onChange={handleType} className="form-select">
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
