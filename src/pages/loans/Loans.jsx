import React, { useState } from 'react';


function Loans() {
  const [loans, setLoans] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddLoan = (e) => {
    e.preventDefault();
    const newLoan = { title, description, amount };
    setLoans([...loans, newLoan]);
    setTitle('');
    setDescription('');
    setAmount('');
  };

  return (
    <div className='loans'>
      <h1>Loans</h1>
      <form onSubmit={handleAddLoan}>
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
        <button type='submit'>Add Loan</button>
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
          {loans.map((loan, index) => (
            <tr key={index}>
              <td>{loan.title}</td>
              <td>{loan.description}</td>
              <td>{loan.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loans;
