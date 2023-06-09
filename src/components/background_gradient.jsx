import { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const can_w = window.innerWidth;
  const can_h = window.innerHeight;
  let ctx, balls;
  const R = 2;
  const ball_color = {
    r: 207,
    g: 255,
    b: 4
  };
  const alpha_f = 0.03;
  const BALL_NUM = 30;
  const dis_limit = 260;
  const link_line_width = 0.8;



  // Random speed
  function getRandomSpeed(pos) {
    const min = -1;
    const max = 1;
    switch (pos) {
      case 'top':
        return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
      case 'right':
        return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
      case 'bottom':
        return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
      case 'left':
        return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
      default:
        return;
    }
  }

  function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomNumFrom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function addBallIfy() {
    if (balls.length < BALL_NUM) {
      balls.push(getRandomBall());
    }
  }

  function randomSidePos(length) {
    return Math.ceil(Math.random() * length);
  }

  // Calculate distance between two points
  function getDisOf(b1, b2) {
    const delta_x = Math.abs(b1.x - b2.x);
    const delta_y = Math.abs(b1.y - b2.y);
    return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
  }

  // Update balls
  function updateBalls() {
    const new_balls = [];
    balls.forEach((b) => {
      b.x += b.vx;
      b.y += b.vy;

      if (
        b.x > -(50) &&
        b.x < can_w + 50 &&
        b.y > -(50) &&
        b.y < can_h + 50
      ) {
        new_balls.push(b);
      }

      // Alpha change
      b.phase += alpha_f;
      b.alpha = Math.abs(Math.cos(b.phase));
    });

    balls = new_balls.slice(0);
  }

  // Draw balls
  function renderBalls() {
    balls.forEach((b) => {
        if (!Object.prototype.hasOwnProperty.call(b, 'type')) {
        ctx.fillStyle = `rgba(${ball_color.r},${ball_color.g},${ball_color.b},${b.alpha})`;
        ctx.beginPath();
        ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }
    });
  }

  // Draw lines
  function renderLines() {
    let fraction, alpha;
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        fraction = getDisOf(balls[i], balls[j]) / dis_limit;

        if (fraction < 1) {
          alpha = (1 - fraction).toString();

          ctx.strokeStyle = `rgba(150,150,150,${alpha})`;
          ctx.lineWidth = link_line_width;

          ctx.beginPath();
          ctx.moveTo(balls[i].x, balls[i].y);
          ctx.lineTo(balls[j].x, balls[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }

  // Random Ball
  function getRandomBall() {
    const pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
    switch (pos) {
      case 'top':
        return {
          x: randomSidePos(can_w),
          y: -R,
          vx: getRandomSpeed('top')[0],
          vy: getRandomSpeed('top')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'right':
        return {
          x: can_w + R,
          y: randomSidePos(can_h),
          vx: getRandomSpeed('right')[0],
          vy: getRandomSpeed('right')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'bottom':
        return {
          x: randomSidePos(can_w),
          y: can_h + R,
          vx: getRandomSpeed('bottom')[0],
          vy: getRandomSpeed('bottom')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case 'left':
        return {
          x: -R,
          y: randomSidePos(can_h),
          vx: getRandomSpeed('left')[0],
          vy: getRandomSpeed('left')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      default:
        return;
    }
  }

  function initBalls(num) {
    balls = [];
    for (let i = 1; i <= num; i++) {
      balls.push({
        x: randomSidePos(can_w),
        y: randomSidePos(can_h),
        vx: getRandomSpeed('top')[0],
        vy: getRandomSpeed('top')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      });
    }
  }

  function initCanvas() {
    const canvas = canvasRef.current;
    canvas.setAttribute('width', can_w);
    canvas.setAttribute('height', can_h);
    ctx = canvas.getContext('2d');
  }

  useEffect(() => {
    // const canvas = canvasRef.current;
    initCanvas();
    initBalls(BALL_NUM);
    const render = () => {
      ctx.clearRect(0, 0, can_w, can_h);
      renderBalls();
      renderLines();
      updateBalls();
      addBallIfy();
      window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
    return () => window.cancelAnimationFrame(render);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
