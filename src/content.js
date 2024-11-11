const textContent = document.body.innerText || "";

// Envía el texto extraído al script de fondo
chrome.runtime.sendMessage({ action: "SEND_TEXT", data: textContent });
