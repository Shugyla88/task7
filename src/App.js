// src/App.js

import React from 'react';
import './App.css'; // Подключаем файл стилей
import ImageGallery from './components/ImageGallery';
import PerformanceAnalysis from './components/PerformanceAnalysis';

function App() {
  return (
    <div className="app">
      <h1>Image Gallery App</h1>
      <ImageGallery />
      <PerformanceAnalysis />
    </div>
  );
}

export default App;
