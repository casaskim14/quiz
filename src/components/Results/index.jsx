import React from 'react';

export default function Results() {
  return (
    <div className="p-[30px] bg-slate-100 h-screen">
      <div className="flex flex-row">
        <div className="flex flex-row justify-end">
          <p>Close Button</p>
        </div>
      </div>

      <div className="mt-[40px]">
        <p>Image Here</p>
        <p>Results of Fantasy Quiz #156</p>
      </div>

      <div className="shadow border bg-white">
        <div className="flex flex-row justify-between">
          <p>Icon here</p>
          <p>Correct Predictions</p>
          <p>120</p>
        </div>
      </div>

      <div className="shadow border bg-white">
        <div className="flex flex-row justify-between">
          <p>Icon here</p>
          <p>Correct Predictions</p>
          <p>120</p>
        </div>
      </div>

      <button
        type="button"
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait mt-[40px]"
      >
        Back
      </button>
    </div>
  );
}
