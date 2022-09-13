import React, { FC } from "react";
import { IPeople } from "../App";

interface IProps {
  peoples: IPeople[];
}

const List: FC<IProps> = ({ peoples }) => {
  const renderList: JSX.Element[] = peoples.map((people) => {
    return (
      <div className="grid grid-cols-4 border p-4" key={people.id}>
        <img
          className="w-2/3 justify-self-center self-center"
          src={people.url}
          alt="img"
        />
        <div className="col-span-2">
          <div className="grid grid-cols-3 items-center mb-1">
            <span className="font-bold bg-slate-100 border p-1 h-full">
              نام{" "}
            </span>
            <span className="font-bold col-span-2 border p-1 h-full text-blue-800">
              {people.name}
            </span>
          </div>
          <div className="grid grid-cols-3 items-center mb-1">
            <span className="font-bold  bg-slate-100 border p-1 h-full">
              سن
            </span>
            <span className="font-bold col-span-2 border p-1 h-full text-blue-800">
              {people.age} سال
            </span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <span className="font-bold  bg-slate-100 border p-1 h-full">
              توضیحات
            </span>
            <span className="font-bold col-span-2 border p-1 h-full text-blue-800 line-clamp-1">
              {people.note}
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2" dir="rtl">
      {renderList}
    </div>
  );
};

export default List;
