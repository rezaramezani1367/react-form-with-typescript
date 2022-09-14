import { FormikProps, useFormik } from "formik";
import React, { Dispatch, FC, SetStateAction } from "react";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { IPeople, Toast } from "../App";
interface MyFormValues {
  name: string;
  age: number | string;
  url: string;
  note?: string;
}
interface IProps {
  peoples: IPeople[];
  setPeople: Dispatch<SetStateAction<IPeople[]>>;
}
const ModalCreate: FC<IProps> = ({ setPeople, peoples }) => {
  const [showModal, setShowModal] = React.useState(false);
  const formik: FormikProps<MyFormValues> = useFormik<MyFormValues>({
    initialValues: {
      name: "",
      age: "",
      url: "",
      note: "",
    },
    onSubmit: (values, { resetForm }) => {
      Toast.fire({
        icon: "success",
        title: "کاربر با موفقیت ثبت شد.",
      });
      setPeople([
        ...peoples,
        {
          ...values,
          age: Number(values.age),
          id: Math.floor(Math.random() * 1000000),
        },
      ]);
      resetForm();
      setShowModal(false);
    },
    validate: (values) => {
      let errors: any = {};
      if (!values.name) {
        errors.name = "فیلد نام باید پر شود";
      }
      if (!values.age) {
        errors.age = "فیلد سن باید پر شود";
      }
      if (!values.url) {
        errors.url = "فیلد آدرس باید پر شود";
      }
      return errors;
    },
    onReset: (values) => {
      return {
        name: "",
        age: "",
        url: "",
        note: "",
      };
    },
  });
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-3">
          <button className="" onClick={() => setShowModal(true)}>
            <div className="border py-2 px-8 flex items-center gap-3 font-bold shadow-sm mt-1 hover:bg-slate-100 transition-all">
              اضافه کردن کاربر
              <FiPlusCircle className="text-2xl text-red-600" />
            </div>
          </button>
        </div>
      </div>
      {showModal && (
        <div
          onClick={(e) => {
            if ((e.target as Element).id == "main-box") {
              setShowModal(false);
            }
          }}
          id="main-box"
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10"
        >
          <div className="bg-white p-2 rounded w-96 animate-fadein shadow-2xl">
            <h1 className="font-semibold text-center text-xl text-blue-700 mb-2">
              ایجاد کاربر
            </h1>
            <div className="border p-3 w-full">
              <form onSubmit={formik.handleSubmit} noValidate>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className={
                    formik.errors.name && formik.touched.name
                      ? "input-text input-error"
                      : "input-text"
                  }
                  name="name"
                  type="text"
                  placeholder="نام و نام خانوادگی ..."
                />
                {formik.errors.name && formik.touched.name && (
                  <div className="text-red-600 text-xs mb-2 font-bold ">
                    <span className="w-2 h-2 bg-red-600 inline-block rounded-full ml-2"></span>
                    {formik.errors.name}
                  </div>
                )}
                <input
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  min="1"
                  className={
                    formik.errors.age && formik.touched.age
                      ? "input-text input-error"
                      : "input-text"
                  }
                  name="age"
                  type="number"
                  placeholder="سن..."
                />
                {formik.errors.age && formik.touched.age && (
                  <div className="text-red-600 text-xs mb-2 font-bold">
                    <span className="w-2 h-2 bg-red-600 inline-block rounded-full ml-2"></span>
                    {formik.errors.age}
                  </div>
                )}
                <input
                  onChange={formik.handleChange}
                  value={formik.values.url}
                  className={
                    formik.errors.url && formik.touched.url
                      ? "input-text input-error"
                      : "input-text"
                  }
                  name="url"
                  type="text"
                  placeholder="آدرس URL..."
                />
                {formik.errors.url && formik.touched.url && (
                  <div className="text-red-600 text-xs mb-2 font-bold">
                    <span className="w-2 h-2 bg-red-600 inline-block rounded-full ml-2"></span>
                    {formik.errors.url}
                  </div>
                )}
                <textarea
                  onChange={formik.handleChange}
                  value={formik.values.note}
                  className="input-text h-36"
                  name="note"
                  placeholder="توضیحات..."
                />
                <div className="text-center">
                  <button type="submit" className="btn-add">
                    ثبت
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ModalCreate;
