import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './main.scss';
import Garage from '../garage/garage';
import Winners from '../winners/winners';
import NotFoundPage from '../notfound/notfound';

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Garage />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default Main;
