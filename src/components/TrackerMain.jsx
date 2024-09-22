import React from 'react';
import './tracker.css'
import { Routes, Route, Link } from 'react-router-dom';
import {Spends,Savings,Loans} from '../pages/Main'

function TrackerMain() {
  return (
    <div className='trackermain'>
      <div className='mainhead'>
        <h2>Heyy Tracker you can manage your spends, loans & savings here!!</h2>
      </div>
      <div className='mainbody'>
        <div className='bodyitems'>
          <div className='bodyitem1'><Link to="/spends">Spends</Link></div>
          <div className='bodyitem2'><Link to="/loans">Loans</Link></div>
          <div className='bodyitem3'><Link to="/savings">Savings</Link></div>
        </div>
      </div>
      <Routes>
        <Route path="/spends" element={<Spends />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/savings" element={<Savings />} />
      </Routes>
    </div>
  );
}

export default TrackerMain;
