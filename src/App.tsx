import React from 'react';
import './App.css';
import { Input } from './components';
import LoanEnum from './common/enums/LoanEnum'
import { useForm, SubmitHandler } from "react-hook-form"

export interface IFormInput {
  totalAmount: string
}

function App() {
  const { register, handleSubmit } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Input title={LoanEnum.TOTAL_AMOUNT} register={register} />
          <button type="submit">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
