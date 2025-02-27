import React, { useEffect, useRef } from "react";

const LavaLamp = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure client-side execution

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 150;

    let time = 0;
    const blobs = [
      { x: 150, y: 90, r: 20, speed: 0.5 },
      { x: 100, y: 60, r: 10, speed: 0.2 },
      { x: 200, y: 65, r: 15, speed: 0.8 },
    ];

    function draw() {
      if (!ctx) return;
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // **Draw Clipping Path (Glass Shape)**
      ctx.save();
      ctx.beginPath();
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.bezierCurveTo(150 , 44 , 170 ,43, 250 , 52 );
      ctx.lineTo(195, 130);
      ctx.bezierCurveTo(150 ,180 , 110 ,135, 108 , 130 );
      ctx.closePath();
      ctx.clip(); // 🚀 Clip the drawing area!

      // **Draw Lava Animation (Inside Clipping Path)**
      ctx.fillStyle = "rgba(255, 100, 150, 0.8)";
      ctx.beginPath();
      blobs.forEach((blob) => {
        const yOffset = Math.sin(time * 0.02 * blob.speed) * 30;
        ctx.moveTo(blob.x + blob.r, blob.y + yOffset);
        ctx.arc(blob.x, blob.y + yOffset, blob.r, 0, Math.PI * 2);
      });
      ctx.fill();

      ctx.restore(); // Remove clipping effect after drawing lava

      // **Draw Debug Lines for Clipping Path (for visualization)**
      /*
      ctx.strokeStyle = "rgba(0, 255, 0, 0.5)"; // Green semi-transparent
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.bezierCurveTo(150 , 44 , 170 ,43, 250 , 52 );
      ctx.lineTo(195, 130);
      ctx.bezierCurveTo(150 ,180 , 110 ,135, 108 , 130 );
      ctx.closePath();
      ctx.stroke();
      */




      time += 1;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div style={{ position: "relative", width: "300px", height: "500px" }} className="mx-auto">

      <img
        src="./img/logos/rmlogo.svg"
        alt="Glass"

        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
            <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default LavaLamp;
