import { ToDoListModel } from "../../domain/to-do-list.model";

const reducer = (state: ToDoListModel = {items: []}, action: any) => {
    switch (action.type) {
        case 'GET_LIST':
            return action.payload;
        case 'ADD_TODO':
            const items = [...state.items, action.payload];
            return {...state, items};
        default:
            return state;
    }
}

export default reducer;
