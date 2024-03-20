function Form({ onChange }) {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };
  return (
    <form className='main'>
      <label htmlFor='textarea'>Escribe aquí</label>
      <textarea
        placeholder='escriba si se atreve...'
        id='textarea'
        onChange={handleChange}
      ></textarea>
    </form>
  );
}

export default Form;
