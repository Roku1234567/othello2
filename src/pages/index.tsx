import styles from './index.module.css';
import { useState } from 'react';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
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
      for (let b = 0; b < 8; b++) {
        if (board[y][x + 2] === 0) {
          break;
        }

        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y][x + b] = turnColor;
          if (board[x + b] !== undefined && board[y][x + b] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          newBoard[y][x + b] = turnColor;
          if (board[x + b] !== undefined && board[y][x + b] === turnColor) {
            break;
          }
        }
      }
    }
    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      for (let a = 0; a < 8; a++) {
        if (board[y + 2][x] === 0) {
          break;
        }

        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y + a][x] = turnColor;
          if (board[y + a] !== undefined && board[y + a][x] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          newBoard[y + a][x] = turnColor;
          if (board[y + a] !== undefined && board[y + a][x] === turnColor) {
            break;
          }
        }
      }
    }
    if (board[x - 1] !== undefined && board[y][x - 1] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      for (let b = 0; b < 8; b++) {
        if (board[y][x - 2] === 0) {
          break;
        }

        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y][x - b] = turnColor;
          if (board[x - b] !== undefined && board[y][x - b] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          newBoard[y][x - b] = turnColor;
          if (board[x - b] !== undefined && board[y][x - b] === turnColor) {
            break;
          }
        }
      }
    }
    if (board[y - 1] !== undefined && board[y - 1][x] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      for (let a = 0; a < 8; a++) {
        if (board[y - 2][x] === 0) {
          break;
        }
        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y - a][x] = turnColor;
          if (board[y - a] !== undefined && board[y - a][x] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          newBoard[y - a][x] = turnColor;
          if (board[y - a] !== undefined && board[y - a][x] === turnColor) {
            break;
          }
        }
      }
    }

    if (
      board[y - 1] !== undefined &&
      board[y - 1][x - 1] !== undefined &&
      board[y - 1][x - 1] === 3 - turnColor
    ) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      for (let a = 0; a < 8; a++) {
        if (board[y - 2][x - 2] === 0) {
          break;
        }
        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y - a][x - a] = turnColor;
          if (board[y - a][x - a] !== undefined && board[y - a][x - a] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          newBoard[y - a][x - a] = turnColor;
          if (board[y - a][x - a] !== undefined && board[y - a][x - a] === turnColor) {
            break;
          }
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 1][x - 1] !== undefined &&
      board[y + 1][x - 1] === 3 - turnColor
    ) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      for (let a = 0; a < 8; a++) {
        if (board[y + 2][x - 2] === 0) {
          break;
        }
        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y + a][x - a] = turnColor;
          if (board[y + a][x - a] !== undefined && board[y + a][x - a] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          newBoard[y + a][x - a] = turnColor;
          if (board[y + a][x - a] !== undefined && board[y + a][x - a] === turnColor) {
            break;
          }
        }
      }
    }
    if (
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] !== undefined &&
      board[y - 1][x + 1] === 3 - turnColor
    ) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      for (let a = 0; a < 8; a++) {
        if (board[y - 2][x + 2] === 0) {
          break;
        }
        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y - a][x + a] = turnColor;
          if (board[y - a][x + a] !== undefined && board[y - a][x + a] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          newBoard[y - a][x + a] = turnColor;
          if (board[y - a][x + a] !== undefined && board[y - a][x + a] === turnColor) {
            break;
          }
        }
      }
    }
    if (
      board[y + 1] !== undefined &&
      board[y + 1][x + 1] !== undefined &&
      board[y + 1][x + 1] === 3 - turnColor
    ) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
      for (let a = 0; a < 8; a++) {
        if (board[y + 2][x + 2] === 0) {
          break;
        }
        console.table(newBoard);
        if (turnColor === 1) {
          newBoard[y][x] = turnColor;
          newBoard[y + a][x + a] = turnColor;
          if (board[y + a][x + a] !== undefined && board[y + a][x + a] === turnColor) {
            break;
          }
        } else if (turnColor === 2) {
          newBoard[y][x] = turnColor;
          newBoard[y + a][x + a] = turnColor;
          if (board[y + a][x + a] !== undefined && board[y + a][x + a] === turnColor) {
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
