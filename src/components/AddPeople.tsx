import { ErrorMessage, FormikProps, useFormik } from "formik";
import React, { Dispatch, FC, SetStateAction } from "react";
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
const AddPeople: FC<IProps> = ({ peoples, setPeople }) => {
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
    <div className="m-3 border p-3 w-full md:w-1/2">
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
  );
};

export default AddPeople;
