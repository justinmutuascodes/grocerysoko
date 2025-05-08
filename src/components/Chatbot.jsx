import { useState, useRef, useEffect } from 'react';
const Chatbot = () => {
  let [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello I'm your chatbot. Type 'quit' to end the chat." }
  ]);
  const [userInput, setUserInput] = useState('');
  const endOfChatRef = useRef(null);

  const pairs = [
    [/(hi|hey|hello|hola|good\s(morning|afternoon|evening))/i, [
      "Hi, how can I help you today?",
      "Hello there, how can I assist you?",
      "Hiiii, what can I do for you?"
    ]],
    [/(.*)(delivery time|period| time span)(.*)/i, [
      "The ordered goods should be delivered within the same day with a maximum time of 24hrs depending on the location to which the shipping is done. Any delay will be communicated effectively and necessary refunds given. Kindly read on our terms and conditions on the same."
    ]],
    [/(.*)(company|groceries)(.*)/i, [
      "We offer you the best in town – from land to buildings. Would you like to know more about our real estate or consultancy services?"
    ]],
    [/(.*)(duration|how long|length|weeks|months)(.*)/i, [
      "We process your details in no time and deliver a response exactly when you need it."
    ]],
    [/(.*)(apply|register|join|help|guidance)(.*)/i, [
      "You can join by registering online at https://jay1442/pythonanywhere.com/signup or by visiting our office in person."
    ]],
    [/(.*)(locations|places|areas|covered|located|address)(.*)/i, [
      "At the moment we are only functional in Nariobi but with time we are planning to expand further."
    ]],
    [/(.*)(spoilt)(.*)/i, [
      "We ensure quality preservation facilities during transportation and delivery especially for perishable goods. In case any of your ordered goods is spoilt, kindly report immediately after receiving the package otherwise it'll be invalid."
    ]],
    [/(.*)(login|sign\s?in|log\s?in)(.*)/i, [
      "To log in, just go to https://titusshopify.com/login and enter your credentials. Let me know if you need help resetting your password."
    ]],
    [/(.*)(contact)(.*)(details)(.*)/i, [
      "In case of any specific need, reach out on our contacts: 0783189138 or 073311321. Reach out via our email: gogetgroceries@yahoo.com "
    ]],
    [/(.*)(payment|pay|transaction)(.*)(mpesa|m-pesa)(.*)/i, [
      "Yes, we accept MPesa payments! Once you're ready to purchase, our team will share the Paybill details and steps."
    ]]
];
  
  const fallbackResponses = [
    "Sorry, I didn't get that.",
    "Please clarify.",
    "Pardon me?"
    
  ];

  const getResponse = (input) => {
    for (const [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = userInput.trim();
    if (!trimmed) return;

    const newMsgs = [...messages, { sender: 'user', text: trimmed }];

    if (trimmed.toLowerCase() === 'quit') {
      newMsgs.push({ sender: 'bot', text: 'Goodbye! Talk later.' });
    } else {
      const response = getResponse(trimmed);
      newMsgs.push({ sender: 'bot', text: response });
    }

    setMessages(newMsgs);
    setUserInput('');
  };

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="maincss">
    {
    !open && (
    <div onClick={() => setOpen(true)}>
    <svg id='openchat'  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="" className="bg-transparent bi bi-chat-square-heart " viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
    <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
  </svg>
  </div>
    )}

    {open && (
        <div id='chatbot' className='maincss card justify-content-center p-4' style={{ maxWidth: '500px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
            <div className="ms-auto">
            <svg id='x' onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle m-2" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
            </div>
        <h2 className='text-white' id='chatbot' >Lets Chat</h2>
        <div style={{
        border: '1px solid #ccc',
        padding: '10px',
        height: '300px',
        overflowY: 'auto',
        marginBottom: '10px',
        borderRadius: '30px',
        backgroundColor: '#4d0011',
        color: '#fff'
        }}>
        {messages.map((msg, index) => (
        <div key={index} style={{
        textAlign: msg.sender === 'user' ? 'right' : 'left',
        margin: '5px 0'
        }}>
        <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
        </div>
        ))}
        <div ref={endOfChatRef} />
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
        id='typemsg'
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
        style={{ flex: 1, padding: '8px' }}
        />
        <button id='typemsg' type="submit" style={{ padding: '8px 16px' }}>Send</button>
        </form>
        </div>
    )}

</div>

);
};
 

export default Chatbot;