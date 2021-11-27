import {Outlet} from 'react-router-dom';

function TodoLayout() {
    return (
        <div>
            <h1>Todo Layout</h1>

            <hr />

            <Outlet />
        </div>
    )
}

export default TodoLayout;
