import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setForm] = useState(initialForm);
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setForm({
          ...formState,
          [name]: value
        })
    }

  return {
    formState,
    onInputChange
  }
}
