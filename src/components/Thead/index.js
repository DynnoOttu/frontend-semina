import React from "react";
function Thead({ text }) {
  return (
    <thead className="thead-dark">
      <tr>
        {text.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Thead;
