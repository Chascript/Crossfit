import fs from 'fs/promises'; // Import fs promises API
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI();

export default class OpenAIRepository {
  static async insertWOTD() {
    if (!process.env.WOTD_PROMPT) {
      return { error: 'WOTD_PROMPT not set' };
    }
    const prompt: string = process.env.WOTD_PROMPT;
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      temperature: 1,
      max_tokens: 350,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: 'gpt-3.5-turbo',
    });
    if (!completion.choices[0].message.content) {
      return { error: 'No response from GPT-3' };
    }

    const responseData = JSON.parse(completion.choices[0].message.content);

    // Write JSON data to a file
    const filePath = 'wotd_response.json';
    console.log('Saving JSON data to', filePath);
    try {
      await fs.writeFile(filePath, JSON.stringify(responseData, null, 2), { flag: 'w' });
      console.log('JSON data has been saved to', filePath);
      return true;
    } catch (err) {
      console.error('Error saving JSON file:', err);
      return { error: 'Error saving JSON file' };
    }
  }
}
