import React, { useReducer } from 'react';
import CompA from './components/CompA';

// Context
export const ButtonContext = React.createContext();

// useReducer initial state
let initialButtonState = { value: '' };

// useReducer reducer function
const buttonReducer = (state, action) => {
  switch (action.content) {
    case 'posts':
      return { value: action.content };
    default:
      console.log('nu nelabai dar');
  }
};

const fetch = (param) => {
  console.log('fetchApi+', param);
};

function App() {
  const [state, dispatch] = useReducer(buttonReducer, initialButtonState);
  return (
    <>
      <ButtonContext.Provider value={{ dispatch }}>
        <main>
          <CompA />
        </main>
      </ButtonContext.Provider>
    </>
  );
}

export default App;
