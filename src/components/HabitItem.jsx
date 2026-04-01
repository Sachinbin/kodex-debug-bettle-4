import { useState } from "react";
import { useHabit } from "../context/HabitContext";

const HabitItem = ({ habit }) => {
  console.log(habit)
  const { toggleHabit, deleteHabit, updateHabit, getStreak } = useHabit();

  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(habit);

  const today = new Date().toISOString().split("T")[1];
  const isDoneToday = habit.completedDates.includes(today);

  const handleSave = () => {
    updateHabit(habit.id, editData);
    setEditing(false);
  };


  return (
    <div>
      {editing ? (
        <input
          value={editData.name}
          onChange={(e) =>
            setEditData({ ...editData, name: e.target.value })
          }
        />
      ) : (
        <div className="h-[35%]  shadow-2xl rounded  bg-white p-4">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <p className="text-sm text-blue-500">{habit.category}</p>
              <p className="text-sm text-amber-600">{habit.priorityLavel}</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-sm">0 <span className="text-amber-600">^^</span></p>
              <p className="text-[10px] opacity-45">STREAK</p>
            </div>
          </div>
          <h3 className="font-bold text-[18px]">{habit.name}</h3>
          <h3 className="mt-1">{habit.motivation}</h3>
          <div className="flex mt-10 justify-between">
            <div>
              <p className="text-[12px] opacity-40">GOAL</p>
              <p className="text-[12px]">{habit.goalValue} min</p>
            </div>
           <div className="flex gap-4">
              <button>Edit</button>

            <button onClick={() => deleteHabit(habit.id)}>
              Delete
            </button>

            <button className="bg-blue-700 px-2 text-white font-bold rounded" onClick={() =>  toggleHabit(habit.id)}>
              Complete
            </button>
           </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitItem;