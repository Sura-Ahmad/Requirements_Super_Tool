const BASE_URL = "http://127.0.0.1:8005";

export const getDomainQuestions = async (domain) => {
  const response = await fetch(
    `${BASE_URL}/domains/${domain}/elicitation-questions`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch domain questions");
  }

  return response.json();
};
