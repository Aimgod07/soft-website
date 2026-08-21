import React from 'react';
import './HeroBadge.css';
import defaultImg from '../../assets/hero.png';

// Renders a 3x3 tiled badge showing different parts of the same image.
// Each tile is a clipped portion of the source so the full image reads as a single picture
// separated by rounded tiles like the reference the user provided.
export default function HeroBadge({ image = defaultImg, columns = 3, rows = 3 }) {
  const tiles = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      // compute background position in percent so each tile shows the correct part
      const posX = (col / (columns - 1)) * 100;
      const posY = (row / (rows - 1)) * 100;
      tiles.push(
        <div
          key={`${row}-${col}`}
          className="hero-badge__tile"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: `${posX}% ${posY}%`,
          }}
        />
      );
    }
  }

  return <div className="hero-badge">{tiles}</div>;
}
