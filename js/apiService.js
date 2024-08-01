import { API_URL } from "./config.js";

export const getData = async () => {
  const response = await fetch(`${API_URL}api/goods`);
  const data = await response.json();
  return data;
};

export const sentData = async (data) => {
  try {
    console.log("Sending data:", data); // Логирование данных перед отправкой
    const response = await fetch(`${API_URL}api/order`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorText = await response.text(); // Получение текста ошибки
      console.error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
      throw new Error(`Server error: ${response.status}`);
    }
    const result = await response.json();
    console.log("Response data:", result); // Логирование данных ответа
    return result;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};