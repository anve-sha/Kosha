/* bot.js - Chat UI integration + adapter for your Bot.send() stub
   - Manages open/close
   - Renders user & bot messages
   - Persists recent history in localStorage for convenience
*/

(function () {
  const STORAGE_KEY = 'se_chat_history_v1';

  function qs(id) { return document.getElementById(id); }

  function loadHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveHistory(history) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history)); } catch (e) {}
  }

  // Render helpers
  function appendMessage(container, text, cls) {
    const div = document.createElement('div');
    div.className = `msg ${cls}`;
    div.textContent = text;
    container.appendChild(div);
    // scroll into view
    container.scrollTop = container.scrollHeight;
  }

  function renderHistory(container, history) {
    container.innerHTML = '';
    history.forEach(item => appendMessage(container, item.text, item.sender === 'user' ? 'user' : 'bot'));
  }

  // UI controls
  function openChat(chatEl) {
    chatEl.classList.add('open');
    // focus input
    const input = qs('chatInput');
    if (input) input.focus();
  }
  function closeChat(chatEl) {
    chatEl.classList.remove('open');
  }
  function toggleChat(chatEl) {
    chatEl.classList.toggle('open');
    if (chatEl.classList.contains('open')) {
      const input = qs('chatInput'); if (input) input.focus();
    }
  }

  // Hook into the existing Bot.send() if present. Bot.send should return a Promise<string>.
  async function sendToBot(message) {
    // If a global Bot exists with a send method, use it.
    if (window.Bot && typeof window.Bot.send === 'function') {
      try {
        const reply = await window.Bot.send(message);
        // If Bot.send resolves to an object, get .reply or stringify
        if (typeof reply === 'string') return reply;
        if (reply && reply.text) return reply.text;
        return (typeof reply === 'object') ? JSON.stringify(reply) : String(reply);
      } catch (err) {
        console.error('Bot.send error:', err);
        return 'Sorry — the bot encountered an error.';
      }
    }

    // Otherwise fallback to a canned response (dev mode)
    return 'Hi — I am SmartBot (demo). Try: "show transactions" or "budget status".';
  }

  // Wire up DOM on load
  document.addEventListener('DOMContentLoaded', () => {
    const chatEl = qs('chatbot');
    const toggleBtn = qs('chatToggleBtn');
    const closeBtn = qs('chatbotClose');
    const messagesEl = qs('chatMessages');
    const form = qs('chatForm');
    const input = qs('chatInput');

    if (!chatEl || !toggleBtn || !messagesEl || !form || !input) {
      console.warn('Chatbot UI elements not found. Skipping bot initialization.');
      return;
    }

    // load saved history
    const history = loadHistory();
    renderHistory(messagesEl, history);

    // toggle open
    toggleBtn.addEventListener('click', () => toggleChat(chatEl));
    closeBtn.addEventListener('click', () => closeChat(chatEl));

    // submit handler
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const text = input.value && input.value.trim();
      if (!text) return;
      // append user message
      appendMessage(messagesEl, text, 'user');
      history.push({ sender: 'user', text, timestamp: Date.now() });
      saveHistory(history);

      // clear input immediately
      input.value = '';
      input.disabled = true;

      // show typing indicator (bot)
      appendMessage(messagesEl, 'Typing…', 'bot');
      messagesEl.lastChild.classList.add('typing');

      // call bot
      const botReply = await sendToBot(text);

      // remove typing indicator
      const last = messagesEl.lastChild;
      if (last && last.classList.contains('typing')) {
        messagesEl.removeChild(last);
      }

      // append bot reply
      appendMessage(messagesEl, botReply, 'bot');
      history.push({ sender: 'bot', text: botReply, timestamp: Date.now() });
      saveHistory(history);

      input.disabled = false;
      input.focus();
    });

    // keyboard shortcut to open chat (optional)
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleChat(chatEl);
      }
    });

    // expose some helpers for debugging
    window.ChatBotUI = {
      open: () => openChat(chatEl),
      close: () => closeChat(chatEl),
      clearHistory: () => { localStorage.removeItem(STORAGE_KEY); renderHistory(messagesEl, []); }
    };
  });
})();
