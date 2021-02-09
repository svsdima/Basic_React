import React from 'react';
import ReactDOM from 'react-dom';

/* Компонент списка дел */
const TodoList = () => {
    return (
        <ul>
            <li>Выучить React</li>
            <li>Создать крутое приложение</li>
        </ul>
    );
}

/* Компонент шапки */
const AppHeader = () => {
    return <h1>Мой список дел</h1>
}

/* Компонент поиска */
const SearchPanel = () => {
    return <input placeholder="search" />
}

/* Компонент, который собирает другие компоненты в единое целое */
const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root'));