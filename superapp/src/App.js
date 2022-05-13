import './App.css';
import './Message.css';
import React from 'react';
import Router from './pages/Router';
import { AuthProvider } from './hooks/AuthProvider';

export default function App() {
  return (
      <div className="App">
        <AuthProvider>
          <Router />
        </AuthProvider>
      </div>           
  );
}