import styles from './index.module.css';
import { useState } from 'react';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 2, 1],
    [0, 0, 0, 0, 0, 1, 1, 2],
    [0, 0, 0, 0, 2, 2, 2, 1],
    [0, 0, 0, 1, 1, 1, 1, 2],
    [0, 0, 2, 2, 2, 2, 2, 1],
    [0, 1, 1, 1, 1, 1, 1, 2],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);

    const newBoard = structuredClone(board);
    newBoard[y][x] = turnColor;
    if (board[x + 1] !== undefined && board[y][x + 1] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      for (let b = 0; b < 8; b++) {
        for (let g = 0; g < 8; b++) {
          if (board[y][x + g] === turnColor) {
            break;
          }
          if (board[y][x + g] === 0) {
            break;
          }
        }
        if (board[y][x + 2] === 0) {
          break;
        }

        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          if (newBoard[y][x + b] !== undefined) {
            newBoard[y][x + b] = turnColor;
          }
          if (board[x + b] !== undefined && board[y][x + b] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          if (newBoard[y][x + b] !== undefined) {
            newBoard[y][x + b] = turnColor;
          }
          if (board[x + b] !== undefined && board[y][x + b] === turnColor) {
            break;
          }
        }
      }
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
