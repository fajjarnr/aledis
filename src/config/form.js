import {useState} from 'react';

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  return [
    values,
    (formType, formValue) => {
      return setValues({...values, [formType]: formValue});
    },
  ];
};

export default useForm;
