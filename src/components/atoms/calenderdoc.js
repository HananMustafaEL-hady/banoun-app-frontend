import React from "react";
import Calender from "react-calendar";
import { Btn } from "./btn";
import "./calender.css";

export const CalenderDoc = () => {
  return (
    <div className=" mt-5   ">
      <div className="  my-14  mt-10  ">
        <h1 className="text-2xl  md:text-2xl mb-4">
             تحديد موعد جديد{" "}
        </h1>
      </div>

      {/* Green DIV */}

      <div className="bg-beryl-green-200 pb-8 ">
       
        <div className="block  lg:justify-around">
          <div className="text-center">
            <Calender className="mx-4  space-y-4 " />
          </div>

          {/* left section */}

          <div
            style={{
              maxWidth: "500px",
              marginTop: "50px",
              padding: "0 10px",
            }}
          >
            <h1>أختر التوقيت</h1>
            <div className=" bg-spring-rain-600 ">
            <div className="bg-beryl-green-300  py-4 rounded-md mt-1 flex gap-2 flex-wrap justify-around px-4 ">
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-silver-tree-700 text-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
              <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div>
            </div>
            </div>
            {/*  */}
            
             
             
            
          </div>
          <div className=" mt-3 ">
                <Btn
                  stylee="bg-silver-tree-700 text-white text-lg sm:px-1  w-11/12 h-10"
                  children="
                  تاكيد 
                  "
                />
              </div>
        </div>
      </div>
    </div>
  );
};

