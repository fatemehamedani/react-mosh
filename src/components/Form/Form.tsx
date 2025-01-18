import { useState, FormEvent } from "react";
import "./Form.css";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col my-4 w-56 px-3">
        <label htmlFor="name" className="label mb-2">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="border border-gray-600 rounded-md px-1 py-2"
        />
      </div>
      <div className="flex flex-col my-4 w-56 px-3">
        <label htmlFor="age" className="label mb-2">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
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
