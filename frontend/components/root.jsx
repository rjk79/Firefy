import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Root = ({ store }) => (
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <HashRouter>
                <App />
            </HashRouter>
        </DndProvider>
    </Provider>
);

export default Root;