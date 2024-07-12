"use client"

import RadioGroup from "@/component/RadioGroup";
import { Sticks } from "@/interfaces";
import { useState } from "react";


export default function Home() {

  const options: Sticks[] = [
    {
      value: "3",
      label: "3 Sticks (-32%)",
      extraInfo: "$64.00/each",
      isBest: true
    },
    {
      value: "2",
      label: "2 Sticks (-22%)",
      extraInfo: "$71.00/each",
      isBest: false
    },
    {
      value: "1",
      label: "1 Sticks (-15%)",
      extraInfo: "",
      isBest: false
    },
  ]

  const [selectedVal, setSelectedVal] = useState('3')
  
  const onChange = (value: string) => {
    setSelectedVal(value)
  }

  return (
    <div className="text-xl">
      <RadioGroup options={options} selectedValue={selectedVal} onChange={onChange} />
    </div>
  );
}
