import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters " })
    .max(50),
  amount: z
    .number({ invalid_type_error: "amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onClick={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="description" className="label mb-2">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="px-1 py-2 border border-gray-700 rounded-mb"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-red-600">{errors.description.message}</p>
        )}
      </div>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="" className="label mb-2">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="px-1 py-2 border border-gray-700 rounded-mb"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-red-600">{errors.amount.message}</p>
        )}
      </div>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="category" className="label mb-2">
          Category
        </label>
        <select
          id="category"
          className="block w-full px-3 py-2 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          {...register("category")}
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-600">{errors.category.message}</p>
        )}
      </div>
      <button className="bg-blue-600 text-white py-2 w-20 ml-3 rounded font-bold">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
