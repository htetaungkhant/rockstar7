const redux = require('redux');

const store = redux.createStore(function (state = [], action) {
    if (action.type === 'ADD') {
        return [...state, action.data];
    }
    if (action.type === 'DEL') {
        return state.filter(i => i.name !== action.data.name);
    }
});

store.subscribe(function () {
    console.log(store.getState());
});

store.dispatch({ type: 'ADD', data: { name: 'htet' } });
store.dispatch({ type: 'ADD', data: { name: 'aung' } });
store.dispatch({ type: 'DEL', data: { name: 'aung' } });
store.dispatch({ type: 'ADD', data: { name: 'khant' } });

