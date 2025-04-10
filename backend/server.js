import express from 'express';
import cors from 'cors';
import { getAIResponse } from '../ai/huggingface.js';
import { readFile } from 'fs/promises';
const config = JSON.parse(await readFile(new URL('../config/default.json', import.meta.url)));

const app = express();

// Middleware
app.use(cors({
  origin: config.server.corsOrigins
}));
app.use(express.json());

// AI Recommendation Endpoint
app.post('/api/recommend', async (req, res) => {
  try {
    const { preferences } = req.body;
    const prompt = `The best destination for ${preferences.travelType} travelers with budget ${preferences.budget} is <mask>.`;
    
    const recommendation = await getAIResponse(prompt);
    res.json({ recommendation });
  } catch (error) {
    console.error('Recommendation error:', error);
    res.status(500).json({ error: 'Failed to get recommendation' });
  }
});

// Start server
app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.port}`);
});
