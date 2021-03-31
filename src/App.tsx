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

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
