/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
// import selection from './../app/selection/selection
interface IProps {
  control: any;
}
const SelectGenader: React.FC<IProps> = ({ control }) => {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  return (
    <>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => {
          return (
            <section>
              <Select {...field} options={options} />
            </section>
          );
        }}
      />
    </>
  );
};

export default SelectGenader;
