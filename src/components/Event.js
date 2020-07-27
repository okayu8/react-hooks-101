import React from "react";

const Event = ({ dispatch, event }) => {
  const handleClickDeleteButton = () => {
    const id = event.id;
    dispatch({
      type: "DELETE_EVENT",
      id,
    });
  };
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
