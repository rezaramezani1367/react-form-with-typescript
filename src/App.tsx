import React, { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import AddPeople from "./components/AddPeople";
import List from "./components/List";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export interface IPeople {
  id: number;
  name: string;
  age: number;
  url: string;
  note?: string;
}
const App = () => {
  const [peoples, setPeople] = useState<IPeople[]>([
    {
      id: 1,
      name: "حسن رمضانی",
      age: 34,
      url: "/images/hamzehazizzadeh_image.jpg",
      note: "آموزش تایپ  تایپ  تایپ تایپ تایپ اسکریپت",
    },
  ]);

  return (
    <div className="container flex justify-center flex-col items-center font-vazir">
      <div className="my-3 p-4 font-bold text-2xl border shadow-xl w-full text-center">
        مدیریت اشخاص
      </div>
      <AddPeople peoples={peoples} setPeople={setPeople} />
      <List peoples={peoples} setPeople={setPeople} />
    </div>
  );
};

export default App;
