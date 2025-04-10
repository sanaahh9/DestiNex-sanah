import { useState } from 'react';
import './App.css';

function App() {
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    travelType: 'adventure',
    budget: 'medium'
  });

  const getRecommendation = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preferences })
      });
      const data = await response.json();
      setRecommendation(data.recommendation);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>DestiNex Travel Recommendations</h1>
      <div className="preferences">
        <select 
          value={preferences.travelType}
          onChange={(e) => setPreferences({...preferences, travelType: e.target.value})}
        >
          <option value="adventure">Adventure</option>
          <option value="relaxation">Relaxation</option>
          <option value="cultural">Cultural</option>
        </select>
        <select
          value={preferences.budget}
          onChange={(e) => setPreferences({...preferences, budget: e.target.value})}
        >
          <option value="low">Low Budget</option>
          <option value="medium">Medium Budget</option>
          <option value="high">High Budget</option>
        </select>
        <button onClick={getRecommendation} disabled={loading}>
          {loading ? 'Loading...' : 'Get Recommendation'}
        </button>
      </div>
      {recommendation && (
        <div className="recommendation">
          <h2>Recommended Destination</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
