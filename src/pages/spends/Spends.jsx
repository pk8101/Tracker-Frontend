import React, { useState } from 'react';
//import './tracker.css';

function Spends() {
  const [spends, setSpends] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddSpend = (e) => {
    e.preventDefault();
    const newSpend = { title, description, amount };
    setSpends([...spends, newSpend]);
    setTitle('');
    setDescription('');
    setAmount('');
  };

  return (
    <div className='spends'>
      <h1>Spends</h1>
      <form onSubmit={handleAddSpend}>
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
        <button type='submit'>Add Spend</button>
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
          {spends.map((spend, index) => (
            <tr key={index}>
              <td>{spend.title}</td>
              <td>{spend.description}</td>
              <td>{spend.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Spends;
