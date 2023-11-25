async function analyzeImage(imageUrl) {
  const apiKey = secrets.AZURE_ENVIRONMENT_COMPUTER_VISION_KEY_5FL42GW39; 

  const endpoint = 'https://testcomputervision11.cognitiveservices.azure.com/computervision/imageanalysis:analyze';
  const params = {
    features: 'caption,read,tags,objects',
    'model-version': 'latest',
    language: 'en',
    'api-version': '2023-02-01-preview'
  };

  try {
    const response = await fetch(`${endpoint}?${new URLSearchParams(params)}`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: imageUrl }),
    });
    
    if (!response.ok) {
      const errorText = await response.text(); 
      throw new Error(errorText);

    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('', error); 
    console.error('Tipo de error:', error.constructor.name); 
    throw error; 
  }
}

export default analyzeImage;

