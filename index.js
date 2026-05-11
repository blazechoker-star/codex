require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function completeCode(prompt) {
  try {
    const response = await openai.completions.create({
      model: 'code-davinci-002',
      prompt: prompt,
      max_tokens: 256,
      temperature: 0.5,
    });

    return response.choices[0].text;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}

module.exports = { completeCode };

// Example usage
if (require.main === module) {
  const prompt = 'Write a function to reverse a string in JavaScript:\n';
  
  completeCode(prompt)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
}
