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

if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
  newBoard[y][x] = turnColor;
  setTurnColor(3 - turnColor);
  setBoard(newBoard);
}


if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
  newBoard[y][x] = turnColor;
  setTurnColor(3 - turnColor);
  setBoard(newBoard);
}
if (board[y - 1] !== undefined && board[y - 1][x] === 3 - turnColor) {
  newBoard[y][x] = turnColor;
  setTurnColor(3 - turnColor);
  setBoard(newBoard);
}
if (board[x + 1] !== undefined && board[y][x + 1] === 3 - turnColor) {
  newBoard[y][x] = turnColor;
  setTurnColor(3 - turnColor);
  setBoard(newBoard);
}
if (board[x - 1] !== undefined && board[y][x - 1] === 3 - turnColor) {
  newBoard[y][x] = turnColor;
  setTurnColor(3 - turnColor);
  setBoard(newBoard);
}
newBoard[y + 1][x] = turnColor;
setTurnColor(turnColor);
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


if (board[y - 1] !== undefined && board[y - 1][x] === 3 - turnColor) {
  newBoard[y][x] = turnColor;
  setTurnColor(3 - turnColor);
  setBoard(newBoard);

  for (let b = 0; b < 8; b++) {
    if (turnColor === 1) {
      newBoard[y][x] = turnColor;
      newBoard[y - b][x] = turnColor;
      if (board[y - b] !== undefined && board[y - b][x] === turnColor) {
        break;
      }
    } else if (turnColor === 2) {
      newBoard[y][x] = turnColor;
      newBoard[y - b][x] = turnColor;
      if (board[y - b] !== undefined && board[y - b][x] === turnColor) {
        break;
      } else if (board[y - b] === undefined) {
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
    if (turnColor === 1) {
      newBoard[y][x] = turnColor;
      newBoard[y - a][x] = turnColor;
      if (board[y - a] !== undefined && board[y - a][x] === turnColor) {
        break;
      } else if (board[y - a] === undefined && board[y - a][x] === turnColor) {
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
if (board[x - 1] !== undefined && board[y][x - 1] === 3 - turnColor) {
  newBoard[y][x] = turnColor;
  setTurnColor(3 - turnColor);
  setBoard(newBoard);
  for (let a = 0; a < 8; a++) {
    if (turnColor === 1) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - a] = turnColor;
      if (board[x - a] !== undefined && board[y][x - a] === turnColor) {
        break;
      }
    } else if (turnColor === 2) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - a] = turnColor;
      if (board[x - a] !== undefined && board[y][x - a] === turnColor) {
        break;
      }
    }
  }
}

if (board[x + 1] !== undefined && board[y][x + 1] === 3 - turnColor) {
  newBoard[y][x] = turnColor;
  setTurnColor(3 - turnColor);
  setBoard(newBoard);
  for (let a = 0; a < 8; a++) {
    if (turnColor === 1) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      if (board[x + a] !== undefined && board[y][x + a] === turnColor) {
        break;
      }
    } else if (turnColor === 2) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + a] = turnColor;
      if (board[x + a] !== undefined && board[y][x + a] === turnColor) {
        break;
      }
    }
  }
}

else if (board[x + b] === undefined && board[y][x + b] === turnColor) {
  break;
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
      if (newBoard[y + a][x] !== undefined) {
        newBoard[y + a][x] = turnColor;
      }
      if (board[y + a] !== undefined && board[y + a][x] === turnColor) {
        break;
      }
    } else if (turnColor === 2) {
      newBoard[y][x] = turnColor;
      if (newBoard[y + a][x] !== undefined) {
        newBoard[y + a][x] = turnColor;
      }
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
      if (newBoard[y][x - b] !== undefined) {
        newBoard[y][x - b] = turnColor;
      }
      if (board[x - b] !== undefined && board[y][x - b] === turnColor) {
        break;
      }
    } else if (turnColor === 2) {
      newBoard[y][x] = turnColor;
      if (newBoard[y][x - b] !== undefined) {
        newBoard[y][x - b] = turnColor;
      }
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
      if (newBoard[y - a][x] !== undefined) {
        newBoard[y - a][x] = turnColor;
      }
      if (board[y - a] !== undefined && board[y - a][x] === turnColor) {
        break;
      }
    } else if (turnColor === 2) {
      newBoard[y][x] = turnColor;
      if (newBoard[y - a][x] !== undefined) {
        newBoard[y - a][x] = turnColor;
      }
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
      if (newBoard[y - a][x - a] !== undefined) {
        newBoard[y - a][x - a] = turnColor;
      }
      if (board[y - a][x - a] !== undefined && board[y - a][x - a] === turnColor) {
        break;
      }
    } else if (turnColor === 2) {
      newBoard[y][x] = turnColor;
      if (newBoard[y - a][x - a] !== undefined) {
        newBoard[y - a][x - a] = turnColor;
      }
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
      if (newBoard[y + a][x - a] !== undefined) {
        newBoard[y + a][x - a] = turnColor;
      }
      if (board[y + a][x - a] !== undefined && board[y + a][x - a] === turnColor) {
        break;
      }
    } else if (turnColor === 2) {
      newBoard[y][x] = turnColor;
      if (newBoard[y + a][x - a] !== undefined) {
        newBoard[y + a][x - a] = turnColor;
      }

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
      if (newBoard[y - a][x + a] !== undefined) {
        newBoard[y - a][x + a] = turnColor;
      }
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
    }}
  }
