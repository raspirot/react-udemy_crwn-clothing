import styles from 'styled-components';

export const CartDropdownContainer = styles.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const CartDropdownCartItemsContainer = styles.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartDropdownCartItemsEmptyMessage = styles.span`
  font-size: 18px;
  margin: 50px auto;
`;

