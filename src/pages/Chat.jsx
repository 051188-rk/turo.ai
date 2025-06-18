import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaUserCircle, FaStar, FaChevronRight, FaSearch, FaPlus, FaRegHeart, FaCog, FaSignOutAlt, FaUser, FaQuestionCircle, FaPaintBrush } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './chat.css';

const GEMINI_API_KEY = 'AIzaSyA2UsIOyiImKt97oeKLi8iVAavsZ5Agx4c'; // <-- Replace with your real key
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + GEMINI_API_KEY;

const dummySidebar = [
  { icon: <FaPlus />, label: 'New chat' },
  { icon: <FaRegHeart />, label: 'Explore Gems' },
  { icon: <FaSearch />, label: 'Recent' },
  { icon: <FaChevronRight />, label: 'Show more' },
];

const dummyRecent = [
  'Friendly Greeting and Assist...',
  'Ready to Assist?',
  'Requesting Explicit Images: ...',
  'Cute Response:',
  'Bollywood: Overview and C...'
];

const PROFILE_EMAIL = 'rakeshkumar18pjkt@gmail.com'; // Placeholder email

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const [showHello, setShowHello] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setShowHello(false);
    setLoading(true);
    try {
      const res = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      });
      const data = await res.json();
      let botReply = '';
      if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
        botReply = data.candidates[0].content.parts[0].text;
      } else if (data && data.error && data.error.message) {
        botReply = 'Gemini API error: ' + data.error.message;
      } else {
        botReply = 'Sorry, no response. (Debug info: ' + JSON.stringify(data) + ')';
        console.error('Gemini API unexpected response:', data);
      }
      setMessages(msgs => [...msgs, { from: 'bot', text: botReply }]);
    } catch (err) {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Error fetching response from Gemini API.' }]);
      console.error('Gemini API fetch error:', err);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <div className="chat-root">
      {/* Sidebar */}
      <div className={`chat-sidebar${sidebarOpen ? '' : ' collapsed'}`}>
        <div className="chat-sidebar-header">
          <FaBars style={{ cursor: 'pointer', color: '#4DFF29' }} onClick={() => setSidebarOpen(o => !o)} />
          {sidebarOpen && <span style={{ fontWeight: 700, fontSize: 22, marginLeft: 10, color: '#fff' }}>Gemini</span>}
        </div>
        {sidebarOpen && (
          <>
            <button className="chat-sidebar-btn"><FaPlus className="icon" /> New chat</button>
            <button className="chat-sidebar-btn"><FaRegHeart className="icon" /> Explore Gems</button>
            <div className="chat-sidebar-recent-label">Recent</div>
            <div>
              {dummyRecent.map((item, i) => (
                <div key={i} className={`chat-sidebar-recent-item${i === 0 ? ' active' : ''}`}>{item}</div>
              ))}
            </div>
            <button className="chat-sidebar-btn"><FaChevronRight className="icon" /> Show more</button>
          </>
        )}
      </div>
      {/* Main Chat Area */}
      <div className="chat-main">
        {/* Top bar */}
        <div className="chat-topbar">
          <button className="chat-upgrade-btn"><FaStar style={{ color: '#4DFF29' }} /> Upgrade</button>
          <div style={{ position: 'relative' }}>
            <FaUserCircle size={36} className="chat-avatar" style={{ cursor: 'pointer' }} onClick={() => setDropdownOpen((v) => !v)} />
            {dropdownOpen && (
              <div className="profile-dropdown" ref={dropdownRef}>
                <div className="profile-dropdown-email"><FaUser style={{ marginRight: 8 }} />{PROFILE_EMAIL}</div>
                <div className="profile-dropdown-item"><FaStar style={{ marginRight: 8 }} />Upgrade plan</div>
                <div className="profile-dropdown-item"><FaPaintBrush style={{ marginRight: 8 }} />Personalize</div>
                <div className="profile-dropdown-item"><FaCog style={{ marginRight: 8 }} />Settings</div>
                <div className="profile-dropdown-divider" />
                <div className="profile-dropdown-item"><FaQuestionCircle style={{ marginRight: 8 }} />Help</div>
                <div className="profile-dropdown-item logout" onClick={handleLogout}><FaSignOutAlt style={{ marginRight: 8 }} />Log out</div>
              </div>
            )}
          </div>
        </div>
        {/* Chat area */}
        <div className="chat-area">
          {showHello && messages.length === 0 && !loading && (
            <div className="chat-hello">
              <span className="chat-hello-gradient">Hello, User!</span>
              <div className="sub">Hi there! How can I help you today?</div>
            </div>
          )}
          <div className="chat-bubbles">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble-row ${msg.from}`}>
                <div className={`chat-bubble${msg.from === 'user' ? ' user' : ''}`}>{msg.text}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-bubble-row bot">
                <div className="chat-bubble">
                  <span className="dot-flashing">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span style={{ marginLeft: 8 }}>Gemini is thinking…</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>
        {/* Input area */}
        <form onSubmit={handleSend} className="chat-input-form">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask Gemini"
            className="chat-input"
            autoFocus
          />
          <button type="submit" className="chat-send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;