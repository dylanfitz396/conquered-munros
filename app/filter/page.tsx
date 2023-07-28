'use client'

import Dropdown from "@/components/Dropdown";
import Navbar from "../../components/Navbar";

export default function Filter() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar/>
      <h2 className="text-xl">Choose from the below filters</h2>
      <Dropdown dropdownHeading="Food attribute" dropdownItems={['family', 'order', 'genus']} />
    </main>
  )
}
