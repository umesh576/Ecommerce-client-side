/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import dynamic from "next/dynamic";
// import Select from "react-select";
const Select = dynamic(() => import("react-select"), { ssr: false });

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
        defaultValue={null}
        control={control}
        render={({ field: { value, ...others } }) => {
          return (
            <section>
              <Select {...others} options={options} />
            </section>
          );
        }}
      />
    </>
  );
};

export default SelectGenader;
