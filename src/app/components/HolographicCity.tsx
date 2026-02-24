import { useEffect, useRef } from 'react';
import backgroundImage from 'figma:asset/79769427aa1504d49d32ee3d6472ff19b7385909.png';

interface MatrixColumn {
  x: number;
  y: number;
  speed: number;
  characters: string[];
  opacity: number;
}

export function HolographicCity() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const columnsRef = useRef<MatrixColumn[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const fontSize = 14;
    let columnCount = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columnCount = Math.floor(canvas.width / fontSize);
      initColumns();
    };

    const initColumns = () => {
      columnsRef.current = [];
      for (let i = 0; i < columnCount; i++) {
        columnsRef.current.push({
          x: i * fontSize,
          y: Math.random() * canvas.height * -1,
          speed: 1 + Math.random() * 3,
          characters: Array(30).fill('').map(() => 
            matrixChars[Math.floor(Math.random() * matrixChars.length)]
          ),
          opacity: 0.3 + Math.random() * 0.7,
        });
      }
    };

    const drawMatrix = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(10, 15, 13, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columnsRef.current.forEach((column) => {
        column.characters.forEach((char, index) => {
          const y = column.y + index * fontSize;
          
          // Skip if character is off screen
          if (y < 0 || y > canvas.height + fontSize) return;

          // Fade effect - brightest at the head, dimmer at the tail
          const fadeIndex = column.characters.length - index;
          const alpha = Math.min(1, fadeIndex / 8) * column.opacity;
          
          // Color variations - brighter green at the head
          const brightness = Math.floor(255 * (fadeIndex / 8));
          const green = Math.max(100, Math.min(255, 185 + brightness * 0.3));
          
          ctx.fillStyle = `rgba(16, ${green}, 129, ${alpha})`;
          ctx.font = `${fontSize}px "Courier New", monospace`;
          ctx.fillText(char, column.x, y);

          // Glow effect for head character
          if (index === 0) {
            ctx.shadowColor = 'rgba(16, 185, 129, 0.8)';
            ctx.shadowBlur = 10;
            ctx.fillStyle = `rgba(200, 255, 200, ${alpha})`;
            ctx.fillText(char, column.x, y);
            ctx.shadowBlur = 0;
          }
        });

        // Move column down
        column.y += column.speed;

        // Randomly change characters
        if (Math.random() > 0.95) {
          const randomIndex = Math.floor(Math.random() * column.characters.length);
          column.characters[randomIndex] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }

        // Reset column when it goes off screen
        if (column.y > canvas.height + column.characters.length * fontSize) {
          column.y = Math.random() * -500;
          column.speed = 1 + Math.random() * 3;
          column.opacity = 0.3 + Math.random() * 0.7;
        }
      });
    };

    const animate = () => {
      drawMatrix();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#0A0F0D'
        }}
      />
      
      {/* Matrix Rain Canvas - BELOW dark overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Dark Overlay - ABOVE matrix */}
      <div className="fixed inset-0 bg-black/60 pointer-events-none" />
      
      {/* Gradient Overlay for better text contrast */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </>
  );
}