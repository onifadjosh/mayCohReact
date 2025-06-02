import React from "react";

const Button = ({ title, price, shout }) => {
  //interpolation in react, is just without the dollar sign of template literals
  var namee = "Buy me";

  const alertSomething = (nameOfPerson) => {
    alert(`hello, I am ${nameOfPerson}`);
  };
  return (
    <button className="butn" onClick={() => shout("Pamilerin")}>
      {title}

      <p>{"$" + price}</p>
    </button>
  );
};

export default Button;
