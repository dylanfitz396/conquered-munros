import { useEffect } from "react";
import { Fruit } from "../types";
import { FruitContextType, useFruitContext } from "../context/fruit";

const alphabeticallyOrderFruit = (fruitData: Array<Fruit>) => fruitData.sort(function (a: Fruit, b: Fruit) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

const useFruit = () => {
  const fruitContext = useFruitContext() as FruitContextType;
  const { setAllFruit } = fruitContext;
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('https://www.fruityvice.com/api/fruit/all');
          if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
          }
      
          const data = await res.json();
          const alphabeticallyOrderedFruit = alphabeticallyOrderFruit(data);
          setAllFruit(alphabeticallyOrderedFruit);
        }
        fetchData();
      }, [setAllFruit])
}

export default useFruit;