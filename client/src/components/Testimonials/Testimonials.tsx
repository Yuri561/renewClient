/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import "./TestimonialsStyles.css";

const grid = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
const size = 60;
const gap = 10;

const Square = ({ active, setActive, colIndex, rowIndex, x, y }: { active: { row: number, col: number }, setActive: React.Dispatch<React.SetStateAction<{ row: number, col: number }>>, colIndex: number, rowIndex: number, x: any, y: any }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);
   const letter = String.fromCharCode(65 + colIndex + rowIndex * grid[0].length);
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
        width: size,
        height: size,

        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        transition: "background 0.3s ease",
        cursor: isDragging ? "grabbing" : "pointer",
        color: 'white',
        fontSize: '20px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: '-150px',
        position: "absolute",
        borderRadius: "50%",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0
      }}
      
    >
      {letter}
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="app">
      <motion.div
        animate={{ "--base-hue": 360 } as any}
        initial={{ "--base-hue": 0 } as any}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100%", padding: "5rem", position: "relative", right: "50px"}}
      >
        <motion.div
          style={{
            display: "flex",
            width: '100%',
            height: (size + gap) * 4 - gap,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "relative",
            perspective: 500,
            bottom: '-150px',
            justifyContent: "center",
            alignItems: 'center',
            flexWrap: 'wrap',
            margin: 'auto',
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
               

              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Testimonials;







