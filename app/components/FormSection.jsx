"use client";

export default function FormSection({ onInputChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onInputChange(e.target.my_data.value);
    e.target.reset();
  };

  return (
    <>
      <h1 className="text-2xl font-bold py-3">Form Section Component</h1>
      <form className="flex gap-x-5" onSubmit={handleSubmit}>
        <label className="inline-block">Name:</label>
        <input type="text" name="my_data" className="border border-1" />
        <button type="submit" className="border border-1 px-5">
          Submit
        </button>
      </form>
    </>
  );
}
