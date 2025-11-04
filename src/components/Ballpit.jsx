import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

const Ballpit = ({ 
  count = 100, 
  gravity = 0.01, 
  friction = 0.9975, 
  wallBounce = 0.95, 
  followCursor = true 
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const ballsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  // Initialize balls
  const balls = useMemo(() => {
    const newBalls = [];
    for (let i = 0; i < count; i++) {
      newBalls.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: 5 + Math.random() * 10,
        color: new THREE.Color(Math.random(), Math.random(), Math.random())
      });
    }
    return newBalls;
  }, [count]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Position camera
    camera.position.z = 500;

    // Store reference
    sceneRef.current = scene;

    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    if (followCursor) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Update ball positions
      balls.forEach((ball, index) => {
        // Apply gravity
        ball.vy += gravity;
        
        // Apply mouse interaction
        if (followCursor) {
          const dx = mouseRef.current.x * window.innerWidth/2 - ball.x;
          const dy = mouseRef.current.y * window.innerHeight/2 - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            ball.vx += (dx / distance) * force * 0.5;
            ball.vy += (dy / distance) * force * 0.5;
          }
        }
        
        // Update position
        ball.x += ball.vx;
        ball.y += ball.vy;
        
        // Apply friction
        ball.vx *= friction;
        ball.vy *= friction;
        
        // Boundary collision
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius;
          ball.vx = -ball.vx * wallBounce;
        } else if (ball.x + ball.radius > window.innerWidth) {
          ball.x = window.innerWidth - ball.radius;
          ball.vx = -ball.vx * wallBounce;
        }
        
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius;
          ball.vy = -ball.vy * wallBounce;
        } else if (ball.y + ball.radius > window.innerHeight) {
          ball.y = window.innerHeight - ball.radius;
          ball.vy = -ball.vy * wallBounce;
        }
      });
      
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [balls, gravity, friction, wallBounce, followCursor]);

  // We use a canvas element that Three.js will replace
  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }} 
    />
  );
};

export default Ballpit;