import React, { Dispatch, FC, SetStateAction } from "react";
import { IPeople, Toast } from "../App";
import { CgCloseO } from "react-icons/cg";



interface IProps {
  peoples: IPeople[];
  setPeople: Dispatch<SetStateAction<IPeople[]>>;
}

const List: FC<IProps> = ({ peoples, setPeople }) => {
  const deletePeople = (index: number): void => {
    Toast.fire({
      icon: "error",
      title: "کاربر با موفقیت حذف شد.",
    });
    let newPeoples: IPeople[] = [...peoples];
    newPeoples.splice(index, 1);
    setPeople(newPeoples);
  };

  const renderList: JSX.Element[] = peoples.map((people, index: number) => {
    return (
      <div className="grid grid-cols-3 border p-4 relative" key={people.id}>
        <img
          className="w-2/3 justify-self-center self-center"
          src={people.url}
          alt="img"
        />
        <div className="col-span-2 pl-8">
          <div className="grid grid-cols-3 items-center mb-1">
            <span className="font-bold bg-slate-100 border p-1 h-full">
              نام
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

        {/* close component*/}
        <div
          className="absolute top-2 left-2 btn-close"
          onClick={() => deletePeople(index)}
        >
          <CgCloseO />
        </div>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2" dir="rtl">
      {renderList}
    </div>
  );
};

export default List;
