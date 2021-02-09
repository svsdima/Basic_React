import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>Мой список дел</h1>
        <input placeholder="search" />
        <ul>
            <li>Выучить React</li>
            <li>Создать крутое приложение</li>
        </ul>
    </div>
);

ReactDOM.render(el, 
    document.getElementById('root'));