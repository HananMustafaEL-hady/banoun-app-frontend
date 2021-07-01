import React from "react";
import { PaymentSteps } from "../molecules/paymentSteps";
import visa from "../../assets/visa.png";

export const PaymentTwo = () => {
  return (
    <div class="w-full py-6 mx-0">
      <PaymentSteps
        bg2="bg-silver-tree text-white  "
        icon1={<i class="fas fa-check text-silver-tree"></i>}
      />
      <div className="w-2/5 mx-96 mt-10 space-y-4 mx-8">
        <h1 className="text-xl"> طريقة الدفع</h1>
        <div className="text-lg">
          <input type="radio" name="cash" value="cash" /> &nbsp;
          <label for="cash"> الدفع نقدا</label>
        </div>

        <div className="text-lg">
          <input type="checkbox" name="Online" value="Online" />
          &nbsp;
          <label for="Online">الدفع بالبطاقة </label>
          <img className="inline mr-10" src={visa} />
        </div>
        <div className="flex justify-between w-2/3 pb-10 pt-8 ">
          <div>
            <button>الغاء</button>
          </div>
          <div>
            <button>السابق</button>
          </div>
          <div>
            <button>التالي</button>
          </div>
        </div>
      </div>
    </div>
  );
};
