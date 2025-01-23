import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div>
      <table className="table-auto"></table>
      <thead>
        <tr>
          <th className="px-4 py-2 border border-gray-300">Description</th>
          <th className="px-4 py-2 border border-gray-300">Amount</th>
          <th className="px-4 py-2 border border-gray-300">Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className="px-4 py-2 border border-gray-300">
              {expense.description}
            </td>
            <td className="px-4 py-2 border border-gray-300">
              {expense.amount}
            </td>
            <td className="px-4 py-2 border border-gray-300">
              {expense.category}
            </td>
            <td>
              <button
                className="border border-red-500 text-red-500 bg-transparent hover:bg-red-600 hover:text-white font-bold py-2 px-4 rounded"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="px-4 py-2 border border-gray-300 text-center">
            Total
          </td>
          <td className="px-4 py-2 border border-gray-300 text-center">
            $
            {expenses
              .reduce((acc, expenses) => expenses.amount + acc, 0)
              .toFixed(3)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </div>
  );
};

export default ExpenseList;
