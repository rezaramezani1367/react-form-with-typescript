import React, { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import List from "./components/List";
import ModalEdit from "./components/ModalEdit";
import { FiPlusCircle } from "react-icons/fi";
import ModalCreate from "./components/ModalCreate";

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
      url: "/images/1.jpg",
      note: "آموزش تایپ  تایپ  تایپ تایپ تایپ اسکریپت",
    },
    {
      id: 1,
      name: "رضا رمضانی",
      age: 33,
      url: "/images/hamzehazizzadeh_image.jpg",
      note: "آموزش تایپ  تایپ  تایپ تایپ تایپ اسکریپت",
    },
  ]);

  return (
    <div className="container flex justify-center flex-col items-center font-vazir">
      <div className="my-3 p-4 font-bold text-2xl border shadow-xl w-full text-center">
        مدیریت اشخاص
      </div>

      <ModalCreate peoples={peoples} setPeople={setPeople} />
      <List peoples={peoples} setPeople={setPeople} />
    </div>
  );
};

export default App;
