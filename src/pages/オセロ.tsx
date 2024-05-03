import { useSearchParams } from 'next/navigation';
import styles from './index.module.css';
import { useState } from 'react';
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [1, -1],
  [-1, 0],
  [-1, 1],
  [1, 1],
  [-1, -1],
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
    if (newBoard[y + 1] !== undefined && newBoard[y + 1][x] === 3 - turnColor) {
      if (newBoard[y + 2] !== undefined && newBoard[y + 2][x] === turnColor) {
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
      } else if (newBoard[y + 2] !== undefined && newBoard[y + 2][x] === 3 - turnColor) {
        if (newBoard[y + 3] !== undefined && newBoard[y + 3][x] === turnColor) {
          newBoard[y][x] = turnColor;
          setBoard(newBoard);
          setTurnColor(3 - turnColor);
        }
      }
    }

    newBoard[y][x] = turnColor;
    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
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
if (newBoard[y + 1] !== undefined && newBoard[y + 1][x] === 3 - turnColor) {
  if (newBoard[y + 2] !== undefined && newBoard[y + 2][x] === turnColor) {
    newBoard[y][x] = turnColor;
    setBoard(newBoard);
    setTurnColor(3 - turnColor);
  } else if (newBoard[y + 2] !== undefined && newBoard[y + 2][x] === 3 - turnColor) {
    if (newBoard[y + 3] !== undefined && newBoard[y + 3][x] === turnColor) {
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);
    }
  }
}

newBoard[y][x] = turnColor;
for (let distance = 1; distance < 8; distance++) {
  if (newBoard[y + distance] === undefined) {
    break;
  } else {
    if (newBoard[y + distance][x] === undefined) {
      break;
    } else if (newBoard[y + distance][x] === 0) {
      break;
    } else if (newBoard[y + distance][x] === turnColor) {
      newBoard[y][x] = turnColor;
      setBoard(newBoard);
      setTurnColor(3 - turnColor);
      break;
    } else if (newBoard[y + distance][x] === 3 - turnColor) {
      continue;
    }
  }
}
export default Home;
