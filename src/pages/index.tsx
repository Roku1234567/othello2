import styles from './index.module.css';
import { useState } from 'react';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);

    const newBoard = structuredClone(board);
    newBoard[y][x] = turnColor;
    if (board[x + 1] !== undefined && board[y][x + 1] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      if (turnColor === 1) {
        newBoard[y][x] = turnColor;
        newBoard[y][x + 1] = turnColor;
      }
    }
    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);

      if (turnColor === 1) {
        newBoard[y][x] = turnColor;
        newBoard[y + 1][x] = turnColor;
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y + 2][x] = turnColor;
          if (turnColor === 1) {
            newBoard[y][x] = turnColor;
            newBoard[y + 3][x] = turnColor;
          }
        }
      } else if (turnColor === 2) {
        newBoard[y][x] = turnColor;
        newBoard[y + 1][x] = turnColor;
      }
      if (turnColor === 2) {
        newBoard[y][x] = turnColor;
        newBoard[y + 2][x] = turnColor;
      }
    }
    if (board[x - 1] !== undefined && board[y][x - 1] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      if (turnColor === 2) {
        newBoard[y][x] = turnColor;
        newBoard[y][x - 1] = turnColor;
      }
    }
    if (board[y - 1] !== undefined && board[y - 1][x] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.boardStyle}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cellStyle} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stoneStyle}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
