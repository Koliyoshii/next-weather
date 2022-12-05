import React from "react";

function ErrorIndicator() {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col items-center w-50">
        <div className="w-11 overflow-hidden inline-block">
          <div className=" h-6 w-6 bg-silver rotate-45 transform origin-bottom-left"></div>
        </div>
        <div className="bg-silver w-100 h-auto p-5  rounded-2xl">
          <p className=" text-dark font-semibold ">Die eingegeben Stadt gibt es nicht.</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorIndicator;
