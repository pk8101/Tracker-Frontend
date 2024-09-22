import React, { useState } from 'react';
// import './tracker.css';

function Savings() {
  const [savings, setSavings] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddSaving = (e) => {
    e.preventDefault();
    const newSaving = { title, description, amount };
    setSavings([...savings, newSaving]);
    setTitle('');
    setDescription('');
    setAmount('');
  };

  return (
    <div className='savings'>
      <h1>Savings</h1>
      <form onSubmit={handleAddSaving}>
        <input 
          type='text' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder='Title' 
          required 
        />
        <input 
          type='text' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder='Description' 
          required 
        />
        <input 
          type='number' 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder='Amount' 
          required 
        />
        <button type='submit'>Add Saving</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {savings.map((saving, index) => (
            <tr key={index}>
              <td>{saving.title}</td>
              <td>{saving.description}</td>
              <td>{saving.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Savings;
