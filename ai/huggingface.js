const API_TOKEN = process.env.HUGGINGFACE_TOKEN || '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';

export async function getAIResponse(prompt) {
  try {
    const formattedPrompt = `Provide 10 travel destination recommendations for:
Travel Type: ${prompt.travelType || 'general'}
Budget: ${prompt.budget || 'medium'}

Format each recommendation as:
1. [Destination]
- Reason: [text]
- Cost: [range]
- Best Time: [months]
- Activities: [list]
Separate with ====`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
      headers: { 
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ 
        inputs: formattedPrompt,
        parameters: {
          max_new_tokens: 1000,
          num_return_sequences: 1,
          do_sample: true
        }
      }),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    
    const result = await response.json();
    if (!result?.[0]?.generated_text) return getFallbackRecommendations(prompt);
    
    return result[0].generated_text
      .split('====')
      .slice(0,10)
      .map(r => r.trim())
      .filter(r => r);
      
  } catch (error) {
    console.error("AI Error:", error);
    return getFallbackRecommendations(prompt);
  }
}

function getFallbackRecommendations(prompt) {
  const type = prompt.travelType || 'general';
  const budget = prompt.budget || 'medium';
  
  const fallbacks = {
    relaxation: [
      `1. Bali, Indonesia
- Reason: Beautiful beaches for relaxation
- Cost: ${budget === 'low' ? '$800-$1200' : '$1200-$2000'}/week
- Best Time: April-October
- Activities: Beach yoga, Temple visits`
    ],
    adventure: [
      `1. Queenstown, New Zealand
- Reason: Adventure activities
- Cost: ${budget === 'low' ? '$1000-$1500' : '$1500-$2500'}/week
- Best Time: December-February
- Activities: Bungee jumping, Skiing`
    ],
    general: [
      `1. Paris, France
- Reason: Classic destination
- Cost: ${budget === 'low' ? '$1200-$1800' : '$1800-$3000'}/week
- Best Time: April-June
- Activities: Museums, Seine cruise`
    ]
  };

  return fallbacks[type] || fallbacks.general;
}
