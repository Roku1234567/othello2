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
    const dx = 1;
    const dy = 0;
    for (const direction of directions) {
    }

    if (board[y + 1 * dy] !== undefined && board[y + 1 * dy][x + 1 * dx] === 3 - turnColor) {
      for (let b = 1; b < 8; b++) {
        console.table(newBoard);

        if (newBoard[y + b * dy] !== undefined && newBoard[y + b * dy][x + b * dx] !== undefined) {
          newBoard[y + b * dy][x + b * dx] = turnColor;
        }
        if (board[y + b * dy] !== undefined && board[y + b * dy][x + b * dx] === turnColor) {
          newBoard[y][x] = turnColor;
          setTurnColor(3 - turnColor);
          setBoard(newBoard);
          break;
        }
        if (board[y + b * dy] !== undefined && board[y + b * dy][x + b * dx] === 3 - turnColor) {
          continue;
        }
        if (board[y + b * dy] !== undefined && board[y + b * dy][x + b * dx] === 0) {
          for (b; 0 < b; b--) {
            newBoard[y + b * dy][x - b * dx] = 3 - turnColor;
          }

          break;
        }
        if (board[y + b * dy] !== undefined && board[y + b * dy][x + b * dx] === undefined) {
          for (b; 0 < b; b--) {
            newBoard[y + b * dy][x - b * dx] = 3 - turnColor;
          }

          break;
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
