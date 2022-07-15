import React from 'react';
import { connect } from 'react-redux';
import { ToDoListModel } from '../../domain/to-do-list.model';
import { ToDoItemModel } from '../../domain/to-do-item.model';
import * as actions from '../../store/actions';
import { bindActionCreators, Dispatch } from 'redux';
import ToDoPost from '../ToDoPost/ToDoPost';

interface ActionProps {
    getList: () => void;
}

interface ToDoProps {
    state: ToDoListModel;
}

class ToDoList extends React.Component<ToDoProps & ActionProps> {

    componentDidMount() {
        this.props.getList();
    }

    renderList() {
        return this.props.state.items?.map((item: ToDoItemModel, index: number) => {
            return (
                <div className="item" key={index}>
                    <div className="content">
                        <div className="description">
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        
        return (
            <div className="ui relaxed divided list">
                <h2>ITV To Do List</h2>
                <ToDoPost/>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state: {todo: ToDoListModel}): ToDoProps => {
    return { state: state.todo };
}

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
    return bindActionCreators({ getList: actions.getList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
