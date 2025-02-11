
import { categories } from "../../App";

const ExpenseForm = () => {
  return (
    <form>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="description" className="label mb-2">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="px-1 py-2 border border-gray-700 rounded-mb"
        />
      </div>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="" className="label mb-2">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="px-1 py-2 border border-gray-700 rounded-mb"
        />
      </div>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="category" className="label mb-2">
          Category
        </label>
        <select
          id="category"
          className="block w-full px-3 py-2 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="bg-blue-600 text-white py-2 w-20 ml-3 rounded font-bold">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
