import React, { useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as backend_idlFactory } from '../../declarations/sample_project_backend';
import './App.css'; 

const App = () => {
  const [idea, setIdea] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState('');

  const submitIdea = async () => {
    const agent = new HttpAgent();
    const backendActor = Actor.createActor(backend_idlFactory, {
      agent,
      canisterId: process.env.CANISTER_ID_SAMPLE_PROJECT_BACKEND,
    });

    try {
      const response = await backendActor.generateIdea(idea);
      setGeneratedIdea(response);
    } catch (error) {
      console.error('Error generating idea:', error);
    }
  };

  return (
    <div className="container">
      <h1>Idea Generator</h1>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter your idea prompt..."
        className="textarea"
      />
      <button onClick={submitIdea} className="button">Generate Idea</button>
      <div className="result">
        <h2>Generated Idea</h2>
        <textarea
          value={generatedIdea}
          readOnly
          className="textarea"
          placeholder="Generated idea will appear here..."
        />
      </div>
    </div>
  );
};

export default App;
