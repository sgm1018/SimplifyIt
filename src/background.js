// background.ts

// Almacena el contenido de texto extraído
let extractedText = "";

// Escucha los mensajes del content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "SEND_TEXT") {
    extractedText = message.data;
    sendResponse({ status: "Text received" });
  }
});

// Permite que el popup obtenga el texto extraído
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "GET_TEXT") {
    sendResponse({ data: extractedText });
  }
});
