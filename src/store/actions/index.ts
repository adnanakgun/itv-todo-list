import { ToDoItemModel } from "../../domain/to-do-item.model";
import { ToDoListModel } from "../../domain/to-do-list.model";
import LocalStorageService from "../../services/local-storage.service";

export const getList = () => (dispatch: any) => {
    const list: ToDoListModel = LocalStorageService.getToDoList();

    dispatch({
        type: 'GET_LIST',
        payload: list
    });
};

export const addToList = (item: ToDoItemModel) => async (dispatch: any) => {

    await dispatch({
        type: 'ADD_TODO',
        payload: item
    });
};
