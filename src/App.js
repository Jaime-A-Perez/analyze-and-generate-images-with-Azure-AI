import React, { useState, useCallback } from 'react';
import './App.css';
import analyzeImage from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  const handleImageAnalysis = useCallback(async () => {
    try {
      const data = await analyzeImage(imageUrl);
      setImageData(data);
      setError(null);
    } catch (error) {
      setError(error.toString()); 
    }
  }, [imageUrl]);

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
      {error && <div>{error}</div>}
      {imageData && <DisplayResults data={imageData} imageUrl={imageUrl} />}
    </div>
  );


  function DisplayResults({ data, imageUrl }) {
    return (
      <div className="container">
        <h2>Resultados del análisis de imagen:</h2>
        {data && (
          <div>
            <h3>Descripción:</h3>
            <p className='p'>{data.captionResult.text}</p>
            <h3>Tags:</h3>
            <ul className='p'>
              {data.tagsResult.values.map((value, index) => (
                <li key={index}>{value.name}</li>
              ))}
            </ul>
          </div>
        )}
        <h2>Imagen procesada:</h2>
        <div>
        <img className='image' src={imageUrl} alt="Imagen procesada" />
        </div>
      </div>
    );
  }
}
export default App;

