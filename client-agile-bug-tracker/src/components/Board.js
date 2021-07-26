import React from "react";
import { getAllBoards } from "../api";
import { NavLink } from "react-router-dom";


class Board extends React.Component {
  render() {
    return (
      <>
        <h2>Boards</h2>
        <ul>
          {this.props.boards.map((board) => {
            return (
              <li key={board._id}>
                <NavLink to={`/Boards/${board._id}`}>
                  {board.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}


export default Board;