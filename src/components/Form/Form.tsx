import { useState, FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import "./Form.css";


interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="name" className="label mb-2">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="border border-gray-600 rounded-md px-1 py-2"
        />
        {errors.name?.type === "required" && (
          <p className="text-red-700">The name filed is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-red-700">The name must be at least 3 characters</p>
        )}
      </div>
      <div className="flex flex-col my-4 w-72 px-3">
        <label htmlFor="age" className="label mb-2">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="border border-gray-600 rounded-md px-1 py-2"
        />
        <button className="bg-blue-600 text-white py-2 mt-4 w-28 rounded font-bold">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
