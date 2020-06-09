import React from "react";

function Heading() {
  const date = new Date();
  const hour = date.getHours();
  let greeting;
  const constantStyle = {
    color: ""
  };

  if (hour < 12) {
    greeting = "Good morning";
    constantStyle.color = "red";
  } else if (hour < 18) {
    greeting = "Good afternoon";
    constantStyle.color = "green";
  } else {
    greeting = "Good night";
    constantStyle.color = "blue";
  }

  return (
    <div>
      <p style={constantStyle}>{"The time and date is : " + date}</p>
      <h1 style={constantStyle}>{greeting}</h1>
    </div>
  );
}

export default Heading;
