import styles from './index.module.css';
import { useState } from 'react';
const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);

    const newBoard = structuredClone(board);
    newBoard[y][x] = turnColor;

    for (const direction of directions) {
      const dx = direction[0];
      const dy = direction[1];

      if (board[y + 1 * dy] !== undefined && board[y + 1 * dy][x + 1 * dx] === 3 - turnColor) {
        for (let b = 1; b < 8; b++) {
          console.table(newBoard);

          if (board[y + b * dy] !== undefined && board[y + b * dy][x + b * dx] === turnColor) {
            newBoard[y][x] = turnColor;
            setTurnColor(3 - turnColor);
            setBoard(newBoard);
            break;
          }
          if (board[y + b * dy] !== undefined && board[y + b * dy][x + b * dx] === 3 - turnColor) {
            // continue;
          }
          if (board[y + b * dy] !== undefined && board[y + b * dy][x + b * dx] === 0) {
            for (let c = b - 1; 0 < c; c--) {
              newBoard[y + c * dy][x + c * dx] = 3 - turnColor;
            }

            break;
          }
          if (board[y + b * dy] !== undefined && board[y + b * dy][x + b * dx] === undefined) {
            for (let c = b - 1; 0 < c; c--) {
              newBoard[y + c * dy][x + c * dx] = 3 - turnColor;
            }

            break;
          }
          if (
            newBoard[y + b * dy] !== undefined &&
            newBoard[y + b * dy][x + b * dx] !== undefined
          ) {
            newBoard[y + b * dy][x + b * dx] = turnColor;
          }
        }
      }
    }
  };
  return (
    <div className={styles.container}>
      {turnColor === 1 ? '黒' : '白'}

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
