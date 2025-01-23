import { useState, FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import "./Form.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z.number({ invalid_type_error: "Age filed is required" }).min(5),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="name" className="label mb-2">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="border border-gray-600 rounded-md px-1 py-2"
        />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="age" className="label mb-2">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="border border-gray-600 rounded-md px-1 py-2"
        />
        {errors.age && <p className="text-red-700">{errors.age.message}</p>}
        <button
          disabled={!isValid}
          className="bg-blue-600 text-white py-2 mt-4 w-28 rounded font-bold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
