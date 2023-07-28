"use client"

import { useState } from "react";
import Modal from "../../components/Modal";
import Navbar from "../../components/Navbar";
import { Fruit } from "../types";
import useFruit from "../hooks/useFruit";
import { FruitContextType, useFruitContext } from "../context/fruit";

const defaultFruit = {
  name: '',
  id: 0,
  family: '',
  order: '',
  genus: '',
  nutritions: {
    calories: 0,
    fat: 0,
    sugar: 0,
    carbohydrates: 0,
    protein: 0,
  }
}

export default function Home() {
  const { allFruit } = useFruitContext() as FruitContextType;
  const [selectedFruit, setSelectedFruit] = useState<Fruit>(defaultFruit);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (fruit: Fruit) => {
    setSelectedFruit(fruit);
    setShowModal(true);
  }

  useFruit();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar/>
      <h1 className="text-2xl">Welcome to Know Your Fruit!</h1>
      <p>Get reliable nutritional information about all your well known household fruits by exploring the list below.</p>
      <br/>
      <h2 className="text-xl">List of common fruit:</h2>
      {showModal ? <Modal fruit={selectedFruit} setShowModal={setShowModal}></Modal> : null}
      {allFruit.map((fruit: Fruit, index: number) => {
        return <button onClick={() => handleButtonClick(fruit)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-80" key={index}>{fruit.name}</button>
      })}
    </main>
  )
}
