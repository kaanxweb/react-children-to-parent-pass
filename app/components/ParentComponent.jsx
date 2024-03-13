"use client";
import { useState } from "react";
import FormSection from "./FormSection";
import ListData from "./ListData";

export default function ParentComponent() {
  const [inputData, setInputData] = useState([]);
  const handleInputChange = (newInputData) => {
    setInputData((prevData) => [...prevData, newInputData]);
  };
  const handleDelete = (index) => {
    setInputData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-green-200 px-5">
      <FormSection onInputChange={handleInputChange} />
      <ListData data={inputData} onDelete={handleDelete} />
    </div>
  );
}
