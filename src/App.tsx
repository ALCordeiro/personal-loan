import React from 'react';
import './App.css';
import { Input } from './components';
import LoanEnum from './common/enums/LoanEnum'
import { useForm, SubmitHandler } from "react-hook-form"
import Select from './components/Select';

export interface IFormInput {
  totalAmount: string;
  loanPurpose: string;
}

function App() {
  const { register, handleSubmit } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const handleSelect = (option: { value: string; label: string }) => {
    console.log('Selected option:', option);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Input title={LoanEnum.TOTAL_AMOUNT} register={register} />
          <br></br>
          <Select options={options} onSelect={handleSelect} placeholder="Select an option" />
          <br></br>
          <button type="submit">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
