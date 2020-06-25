import styled from "styled-components";

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #ffffff;
  height: 40px;
  color: #a2a2a2;
  font-weight: 0;
  font-size: 14px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);

  .is-active {
    border: 1px solid rgba(175, 47, 47, 0.15);
    margin: 3px;
    padding: 3px 7px;
    border-radius: 3px;
  }

  .left_item {
    padding-left: 15px;
  }

  .navbar_links {
    display: flex;
  }

  .navbar_links a {
    text-decoration: none;
    color: #a2a2a2;
    font-size: 14px;
    margin: 3px;
    padding: 3px 7px;
  }

  a:hover {
    border: 1px solid rgba(175, 47, 47, 0.15);
    border-radius: 3px;
  }

  .clear_btn {
    position: relative;
    border: none;
    color: #a2a2a2;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    background: #ffffff;
  }
`;

export { NavbarStyle };
