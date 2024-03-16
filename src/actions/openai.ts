export const fetchWOTD = async () => {
  const response = await fetch('/api/openai/wotd');
  return response.json();
};

export default fetchWOTD;
