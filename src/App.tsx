import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TodoListPage from '~/pages/TodoListPage';

const App = () => {
  return (
    <BrowserRouter basename="/test-task-space-scutum">
      <Routes>
        <Route path="/" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
