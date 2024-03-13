export default function ListData({ data, onDelete }) {
  return (
    <div className="bg-pink-50 mt-10">
      <h1 className="text-2xl font-bold py-3">List Data Component</h1>
      <hr />
      <ul className="bg-pink-100">
        {data.map((item, index) => (
          <li key={index} className="p-2 bg-pink-200 flex justify-between">
            {item}
            <button
              onClick={() => onDelete(index)}
              className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
