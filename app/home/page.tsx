interface Fruit {
  name: string;
  id: number;
  familty: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  }
}

export default async function Home() {
  const fetchData = async () => {
    console.log('fetching data');
    const res = await fetch('https://www.fruityvice.com/api/fruit/all');
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json();
  }

  const fruits = await fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl">Know your fruit</h1>
      <br/>
      <h2 className="text-xl">List of Munros:</h2>
      {fruits.map((fruit: Fruit, index: number) => {
        return <li key={index}>{fruit.name}</li>
      })}
    </main>
  )
}
