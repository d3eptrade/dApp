import React from "react";

const TabEmptyBoxRow = () => {
  return (
    <div >
      {[1, 2, 3, 4].map((e) => (
        <div
          key={e}
        ></div>
      ))}
    </div>
  );
};

export default TabEmptyBoxRow;
