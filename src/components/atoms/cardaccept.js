import React from "react";
import { Btn } from "./btn";
import { ModalAccept } from "./modalAccept";
export const CardAccept = ({ imageSource, docName, desc }) => {
  return (
    <>
      <div className="bg-white rounded w-9/12 h-44 m-auto mt-10 flex justify-between">
        <div>
          <p className=" text-gray-400 mr-8 mt-8">
            الاسم بالكامل <span className=" text-black p-5">{docName}</span>
          </p>
          <p className=" text-gray-400  mr-8 mt-8">
            التخصص <span className=" text-black p-5">{desc}</span>
          </p>
        </div>
        <div>
          <img src={imageSource} alt="doc pic" className="w-28 h-32 mt-7" />
        </div>
        <div className=" mt-8">
          {" "}
          <ModalAccept />
          <Btn stylee=" bg-white border border-silver-tree text-red h-10 ml-5">
            {" "}
            رفض
          </Btn>
        </div>
      </div>
    </>
  );
};
