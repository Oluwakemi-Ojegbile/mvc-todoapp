import styled from "styled-components";

const AddTodoStyle = styled.div`
  .title {
    color: rgba(175, 47, 47, 0.15);
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
  }
  .todo_box {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 9fr;
    background: #ffffff;
    border: none;
    box-sizing: border-box;
    border-bottom: 0.5px solid rgb(231, 230, 230);
    box-shadow: inset 0 -2px 1px #cecece;
  }
  .input_box {
    font-weight: 100;
    outline: none;
    height: 65px;
    border: none;
    font-size: 25px;
    font-family: inherit;
  }
  input::placeholder {
    color: #e0dfdf;
    font-style: italic;
    font-weight: 100;
  }
  .hide_icon {
    visibility: hidden;
  }

  .show_icon {
    display: grid;
    visibility: inherit;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .show_icon img {
    width: 15px;
    height: 15px;
  }
`;
export { AddTodoStyle };
