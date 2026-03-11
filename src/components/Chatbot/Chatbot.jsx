import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chatbotData from "./chatbotData";
import "./Chatbot.css";

/* Icônes inline pour éviter une dépendance externe */
const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentNodeId, setCurrentNodeId] = useState("welcome");
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  /* Initialise la conversation au premier nœud */
  useEffect(() => {
    const welcomeNode = chatbotData["welcome"];
    setMessages([{ type: "bot", text: welcomeNode.message }]);
  }, []);

  /* Auto-scroll vers le dernier message */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChoiceClick = (choice) => {
    // Ajoute le choix utilisateur dans le fil
    const updatedMessages = [
      ...messages,
      { type: "user", text: choice.label },
    ];

    if (choice.path) {
      // Navigation vers une page du site
      setMessages([
        ...updatedMessages,
        { type: "bot", text: `Je vous redirige vers ${choice.label}...` },
      ]);
      setTimeout(() => {
        navigate(choice.path);
        setIsOpen(false);
      }, 600);
      return;
    }

    // Avance dans l'arbre de conversation
    const nextNode = chatbotData[choice.nextId];
    setCurrentNodeId(choice.nextId);
    setMessages([
      ...updatedMessages,
      { type: "bot", text: nextNode.message },
    ]);
  };

  const handleReset = () => {
    const welcomeNode = chatbotData["welcome"];
    setCurrentNodeId("welcome");
    setMessages([{ type: "bot", text: welcomeNode.message }]);
  };

  const currentChoices = chatbotData[currentNodeId]?.choices || [];

  return (
    <div className="chatbot">
      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <span className="chatbot-header-title">Assistant RealTiMES</span>
            <div className="chatbot-header-actions">
              <button
                className="chatbot-header-button"
                onClick={handleReset}
                title="Recommencer"
              >
                ↻
              </button>
              <button
                className="chatbot-header-button"
                onClick={() => setIsOpen(false)}
                title="Fermer"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-bubble chatbot-bubble--${message.type}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Boutons de choix */}
          <div className="chatbot-choices">
            {currentChoices.map((choice, index) => (
              <button
                key={index}
                className="chatbot-choice-button"
                onClick={() => handleChoiceClick(choice)}
              >
                {choice.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        className={`chatbot-toggle ${isOpen ? "chatbot-toggle--active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ouvrir l'assistant"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}
