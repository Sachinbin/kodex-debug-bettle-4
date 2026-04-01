import { useForm } from "react-hook-form";
import { useHabit } from "../context/HabitContext";

const HabitForm = () => {
  const { addHabit } = useHabit();

  const { register, handleSubmit, reset, formState: { errors }  } = useForm();

  const onCommit = (values) => {
    const payload = {
      ...values,
      id: crypto.randomUUID(),
      completed: false,
    };

    addHabit(payload);
    reset();
  };

  return (

    <form className="flex flex-col gap-4"

      onSubmit={handleSubmit(onCommit)}>
      <div className="flex flex-col">
        <label htmlFor="name">Habit Name</label>
        <input className="border border-0.6 p-1 rounded border-black focus:border-blue-500 outline-none"
          {...register("name",{required:"Please Enter the name"})} name="name" placeholder="e.g. Morning exercise" />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>
      


      <div className="flex gap-1 w-70">
        <div>
          <label htmlFor="goalVlaue">Daily Goal</label>
          <input className="border border-0.6 p-1 rounded border-black focus:border-blue-500 outline-none w-30"
            {...register("goalValue")} type="number" placeholder="30" />
        </div>
          <div>
          <label htmlFor="">Category</label>
          <select className="border p-1 w-30 rounded border-black focus:border-blue-500 outline-none" >
            <option value="minutes">Minutes</option>
            <option value="pages">Pages</option>
            <option value="reps">Reps</option>
            <option value="liters">Liters</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 w-70" >
        <div>
          <label htmlFor="">Start Date</label>
          <input className="border border-0.6 p-1 rounded border-black focus:border-blue-500 outline-none w-30"
            type="date" {...register("dateValue")} />
        </div>
         <div>
          <label htmlFor="">Category</label>
          <select {...register("catValues")} className="border p-1 w-30 rounded border-black focus:border-blue-500 outline-none" >
            <option value="minutes">Health</option>
            <option value="pages">Focus</option>
            <option value="reps">Growth</option>
            <option value="liters">Mindset</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Motivation</label>
        <textarea {...register("motivValue")} className="border border-0.6 p-1 rounded border-black focus:border-blue-500 outline-none "
          name="motivationValue" placeholder="Why is this important to you?"></textarea>
      </div>
      <div className="flex flex-col">
        <p>Priority Level</p>
        <div className="flex mt-0 gap-6">
          <div className="flex gap-2">
            <input {...register("priorityLavel")} type="radio" placeholder="Low" />
            <label htmlFor="">Low</label>
          </div>
          <div className="flex gap-2">
            <input {...register("priorityLavel")} type="radio" placeholder="Low" />
            <label htmlFor="">Medium</label>
          </div>
          <div className="flex gap-2">
            <input {...register("priorityLavel")} type="radio" placeholder="Low" />
            <label htmlFor="">High</label>
          </div>
        </div>
      </div>
      <button className="bg-blue-700 p-2 rounded cursor-pointer font-bold text-white" type="submit">Create Habit</button>
    </form>
  );
};

export default HabitForm;