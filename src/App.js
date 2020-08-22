import React from 'react';
import { Route } from 'react-router-dom';
import DashBoard from './DashBoardHome';

function App() {
    return <Route path='/' component={DashBoard} />;
}

export default App;
