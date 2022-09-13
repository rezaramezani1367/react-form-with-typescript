import React, { useState } from "react";

import "./App.css";
import AddPeople from "./components/AddPeople";

import List from "./components/List";
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
      note:'آموزش تایپ  تایپ  تایپ تایپ تایپ اسکریپت'
    },
  ]);

  return (
    <div className="container flex justify-center flex-col items-center font-vazir">
      <div className="my-3 p-4 font-bold text-2xl border shadow-xl w-full text-center">
        مدیریت اشخاص
      </div>
      <List peoples={peoples} />
      <AddPeople />
      
    </div>
  );
};

export default App;
