import { useState } from "react";

const EventRegForm = (...formValues) => {
  const [values, setValues] = useState(formValues);

  return [
    values,
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value + "changed" });
    }
  ];
};

export default EventRegForm;
