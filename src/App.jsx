import { useState } from "react";
import { useForm } from "react-hook-form";
import hono from "./image/hono.jpg";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "18",
    gender: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultvalue: formData });

  const onSubmit = (data) => {
    console.log(data);
    alert(`${data.name}  a été enregistré `);
  };

  return (
    // <div className="bg-[url('./image/hono.jpg')] h-[300px] w-[300px] bg-cover  ">
    <div className="  flex flex-col gap-8 bg-yellow-800 py-4 w-[320px] h-[320px] rounded-[20px] relative right-[50px]  ">
      <div>
        <h3 className="text-center font-bold text-lg text-yellow-500 ">
          GESTION DE CONTACTS
        </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="flex gap-4 relative left-[20px]">
            <label className="text-yellow-400">Nom :</label>
            <input
              className="border border-black-700 hover:border-black-700  outline-black-500 outline-solid outline bg-yellow-900 relative left-[38px] text-yellow-500"
              name="name"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span style={{ color: "blue" }}>ce champ est obligatoire</span>
            )}
          </div>
          <div className="flex gap-4 relative left-[20px]">
            <label className="text-yellow-400">Telephone :</label>
            <input
              className="border border-black-700 hover:border-black-700 outline-black-500 outline-solid outline bg-yellow-900 text-yellow-500 "
              name="phone"
              type="text"
              {...register("phone", { pattern: /^[0-9]{10}$/i })}
            />
            {errors.name && (
              <span style={{ color: "blue" }}>ce champ est obligatoire</span>
            )}
          </div>
          <div className="flex  gap-4 relative left-[20px]">
            <label className="text-yellow-400">Email :</label>
            <input
              className="border border-black-700 hover:border-black-700 outline-black-500 outline-solid outline bg-yellow-900 relative left-[35px] text-yellow-500"
              name="email"
              type="email"
              {...register("email")}
            />
          </div>
          <div className="flex gap-4 relative left-[20px]">
            <label className="text-yellow-400">Age :</label>
            <input
              className="border border-black-700 hover:border-black-700 outline-black-500 outline-solid outline   bg-yellow-900 relative left-[45px] text-yellow-500"
              name="age"
              type="number"
              {...register("age")}
            />
          </div>
          <div className="flex gap-4 relative left-[20px]">
            <label className="text-yellow-400">Genre</label>
            <select
              {...register("gender")}
              className="  relative left-[36px] outline-black-500 text-yellow-500 outline-solid outline bg-yellow-900"
            >
              <option value="female">Femme</option>
              <option value="male">Homme</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <button
            className="mt-8 self-center text-yellow-500 font-bold bg-yellow-900 rounded-[20px] w-[120px]  "
            type="submit"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default App;
