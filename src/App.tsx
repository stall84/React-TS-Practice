import React from 'react';

import Todos from './components/TodoList';


const App: React.FC = () => {

  const todos = [{
    id: 't1',
    text: 'Finish the course'
},
{
    id: 't2',
    text: 'Get some lunch'
},
{
    id: 't3',
    text: 'Call your mama'
},
{
    id: 't4',
    text: 'Choke a Chicken'
}];
// We will want to send our data/props down from the topmost level (practically). Thus will be done
// from here in App component

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
