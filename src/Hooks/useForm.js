import { useState } from "react";

// armazena todos os tipos de campos que podem ser validados
const types = {
  email: {
    regex:
      /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i,
    message: "Informe um e-mail válido!",
  },
};

function useForm(type) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  // função para  validação
  function validate(value) {
    // se o tipo não for informado
    // isso significa que não queremos validar o campo
    if (type === false) return true;

    // se o campo estiver vazio
    if (!value) {
      setError("Preencha o campo!");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  // função que permite modificar o estado
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
