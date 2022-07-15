import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ToDoItemModel } from '../../domain/to-do-item.model';
import * as actions from '../../store/actions';

interface ActionProps {
    addToList: (item: ToDoItemModel) => void;
}

class ToDoPost extends React.Component<ActionProps> {
    handleSubmit = (e: any) => {
    
        e.preventDefault();
        this.props.addToList({
            content: e.target.newToDo.value
        });
    };

    render() {

        return <form className="item" onSubmit={(e) => this.handleSubmit(e)}>
            <input className="new-to-do" type="text" id="newToDo" name="newToDo"></input>
            <button type="submit">Post ToDo</button>
        </form>;
    }
}

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
    return bindActionCreators({ 
        addToList: actions.addToList
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(ToDoPost);
