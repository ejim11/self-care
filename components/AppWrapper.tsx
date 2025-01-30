import React from "react";
// import PaymentModal from "./PaymentModal";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* <PaymentModal /> */}
      {children}
    </div>
  );
};

export default AppWrapper;
