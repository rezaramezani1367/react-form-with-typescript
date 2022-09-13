import { ErrorMessage, FormikProps, useFormik } from "formik";
import React from "react";

interface MyFormValues {
  name: string;
  age?: number;
  url: string;
  note?: string;
}
const AddPeople = () => {
  const formik: FormikProps<MyFormValues> = useFormik<MyFormValues>({
    initialValues: {
      name: "",
      age: undefined,
      url: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate:(values)=>{
      console.log(values);
      let errors:any={};
      if(!values.name){
        errors.name="فیلد نام باید پرشود"
      }
      if(!values.age){
        errors.age="فیلد سن باید پرشود"
      }
      if(!values.url){
        errors.url="فیلد آدرس باید پرشود"
      }
      return errors;
    }
  });
  return (
    <div className="m-3 border p-3 w-full md:w-1/2">
      <form onSubmit={formik.handleSubmit} noValidate>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          className="input-text"
          name="name"
          type="text"
          placeholder="نام و نام خانوادگی ..."
        />
        {formik.errors.name && formik.touched.name  && (
          <div className="text-red-600 text-xs mb-2 font-bold px-2">
            {formik.errors.name}
          </div>
        )}
        <input
          onChange={formik.handleChange}
          value={formik.values.age}
          className="input-text"
          name="age"
          type="number"
          placeholder="سن..."
        />
         {formik.errors.age && formik.touched.age  && (
          <div className="text-red-600 text-xs mb-2 font-bold px-2">
            {formik.errors.age}
          </div>
        )}
        <input
          onChange={formik.handleChange}
          value={formik.values.url}
          className="input-text"
          name="url"
          type="text"
          placeholder="آدرس URL..."
        />
        {formik.errors.url && formik.touched.url  && (
          <div className="text-red-600 text-xs mb-2 font-bold px-2">
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
