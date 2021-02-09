import React from 'react';
import ReactDOM from 'react-dom';

const items = ['Выучить React', 'Создать крутое приложение'];

/* Компонент списка дел */
const TodoList = () => {
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
}

/* Компонент шапки */
const AppHeader = () => {
    return <h1>Мой список дел</h1>
}

/* Компонент поиска */
const SearchPanel = () => {
    const searchText = "Введите текст для поиска",
          searchStyle = {
              fontSize: '15px'
          }

    return <input 
    placeholder={searchText}
    style={searchStyle} />
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