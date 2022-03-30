import React from 'react';

function ListModel(props: any) {
  const { name } = props;
  return (
    <>
      <div className="c-cb">
        <input id="todo-0" type="checkbox" />
        <label className="todo-label" htmlFor="todo-0">
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          save
          <span className="visually-hidden" />
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </>
  );
}
export default ListModel;
