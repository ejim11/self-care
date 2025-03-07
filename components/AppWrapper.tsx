import React from "react";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-hidden">
      {/* <PaymentModal /> */}
      {children}
    </div>
  );
};

export default AppWrapper;
