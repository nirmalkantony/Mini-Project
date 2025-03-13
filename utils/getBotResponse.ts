export const getBotResponse = (message: string) => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! How can I assist you with your travel plans today?";
  } else if (lowerMessage.includes("recommend")) {
    return "I can suggest some great itineraries! Do you prefer beaches, mountains, or cultural experiences?";
  } else if (lowerMessage.includes("budget")) {
    return "Our travel packages range from ₹3,000 to ₹10,000. Let me know your budget preference!";
  } else if (lowerMessage.includes("goodbye")) {
    return "Goodbye! Have a great day and safe travels!";
  } else {
    return "I'm not sure how to respond to that. Could you please rephrase your question?";
  }
};
