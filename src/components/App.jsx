import { useState } from 'react';
import '../scss/App.scss';
import Form from './Form';

// Fichero src/components/App.jsx
const App = () => {
  const translator = (texto) => {
    return texto.replace(/[aeiou]/gi, 'i');
  };

  const [textValue, setInputValue] = useState('');

  const onChange = (value) => {
    setInputValue(value);
  };

  const textoh = 'hola, qué tal';
  console.log(translator(textoh));
  return (
    <>
      <Form onChange={onChange} />
      <p>{translator(textValue)}</p>
    </>
  );
};

export default App;
