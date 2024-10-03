import React from "react";

function Header({ pathname }) {
  return (
    <>
      <div className="header">
        <div className="logo flex justify-center items-center py-3 mt-3 border-b-2 border-primary_green ">
          <img src="src/assets/logo.png" alt="logo" className="w-32" />
        </div>
        <div className="details bg-base_green w-full my-3 py-3">
          <div className="info flex justify-center flex-col items-center">
            <span className="text-deep_green font-semibold">
              Scheduled - Order #662684
            </span>
            <h3 className="text-3xl my-2">Monday - 08 May</h3>
            <h4 className="text-gray-500">
              Edit by 11:59 pm on Thursday - 04th of May
            </h4>
          </div>
        </div>
      </div>
      <div className="step flex justify-center items-center">
        <div className="step-wraper flex flex-col justify-center items-center">
          <div className="step-stage flex">
            <div className="stage my-2 mx-3 bg-primary_green rounded-full w-10 h-10 flex justify-center items-center text-white">
              1
            </div>
            {pathname == "/order-details" && (
              <div className="stage my-2 mx-3 bg-primary_green rounded-full w-10 h-10 flex justify-center items-center text-white">
                2
              </div>
            )}
          </div>

          <span className="text-black">
            {pathname == "/"
              ? "Select Meals"
              : pathname == "/order-details"
              ? "Confirm Order"
              : ""}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
