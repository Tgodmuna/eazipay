import React, { useState } from "react";

const EazipayForm = () => {
  const [entityType, setEntityType] = useState("individual");

  const handleEntityTypeChange = (event) => {
    setEntityType(event.target.value);
  };

  return (
    <div>
      //ran out of time to complete
   </div>
  );
};

export default EazipayForm;
