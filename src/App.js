import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageAnalysis = useCallback(() => {
    // Logic for image analysis
  }, []);
  
  const handleImageGeneration = useCallback(() => {
    // Logic for image generation
  }, []);

  return (
    <div className="container">
      <h1>Image Imaginer</h1>
      <input
        className="textField"
        type="text"
        placeholder=" Image URL"
        value={imageUrl}
        onChange={({ target: { value } }) => setImageUrl(value)}
      />
      <button className="button" onClick={handleImageAnalysis}>
        Analyze Image
      </button>
      <button className="button" onClick={handleImageGeneration}>
        Generate Image
      </button>
    </div>
  );
}

export default App;