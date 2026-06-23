'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { usePathname } from 'next/navigation';

const CATEGORY_COLORS = [
  new THREE.Color('#2563eb'), // 0. Restaurants (Accent construction blue)
  new THREE.Color('#38bdf8'), // 1. Gas Stations (Cyan)
  new THREE.Color('#60a5fa'), // 2. Car Wash (Blue)
  new THREE.Color('#f97316'), // 3. Industrial & Office (Orange)
  new THREE.Color('#2dd4bf'), // 4. Medical (Teal)
  new THREE.Color('#facc15'), // 5. Multi-Family (Yellow-gold)
  new THREE.Color('#fb7185'), // 6. Retail (Rose)
  new THREE.Color('#a78bfa'), // 7. Self-Storage (Purple)
];

const DEFAULT_COLOR_DARK = new THREE.Color('#525250');
const DEFAULT_COLOR_LIGHT = new THREE.Color('#a3a39e');

export default function GlobalCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [hoveredPortfolioIndex, setHoveredPortfolioIndex] = useState<number | null>(null);

  // Monitor theme changes reactively
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Listen to custom card hover events from portfolio cards
  useEffect(() => {
    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.index !== 'undefined') {
        setHoveredPortfolioIndex(customEvent.detail.index);
      }
    };
    window.addEventListener('portfolio-hover', handleHover);
    return () => window.removeEventListener('portfolio-hover', handleHover);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- PARTICLE DATA PRECALCULATION ---
    const count = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    // Create a circular sharp texture programmatically
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 32, 32);
        ctx.beginPath();
        ctx.arc(16, 16, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,1)';
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createCircleTexture();

    // Mode 1: Concentric architectural cubes coordinates
    const boxPositions = new Float32Array(count * 3);
    const boxSizes = [10, 22, 36];
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const boxSize = boxSizes[i % boxSizes.length];
      const halfSize = boxSize / 2;
      // Pick random face/edge coordinates for realistic wireframe grids
      const face = i % 3;
      const signX = Math.random() > 0.5 ? 1 : -1;
      const signY = Math.random() > 0.5 ? 1 : -1;
      const signZ = Math.random() > 0.5 ? 1 : -1;

      if (face === 0) {
        boxPositions[idx] = halfSize * signX;
        boxPositions[idx + 1] = (Math.random() - 0.5) * boxSize;
        boxPositions[idx + 2] = (Math.random() - 0.5) * boxSize;
      } else if (face === 1) {
        boxPositions[idx] = (Math.random() - 0.5) * boxSize;
        boxPositions[idx + 1] = halfSize * signY;
        boxPositions[idx + 2] = (Math.random() - 0.5) * boxSize;
      } else {
        boxPositions[idx] = (Math.random() - 0.5) * boxSize;
        boxPositions[idx + 1] = (Math.random() - 0.5) * boxSize;
        boxPositions[idx + 2] = halfSize * signZ;
      }
    }

    // Mode 2: Blueprint Schematic Grid coordinates (snapped to layout steps)
    const blueprintPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      blueprintPositions[idx] = (Math.floor(Math.random() * 24) - 12) * 2.2;
      blueprintPositions[idx + 1] = (Math.floor(Math.random() * 18) - 9) * 2.2;
      blueprintPositions[idx + 2] = (Math.floor(Math.random() * 10) - 5) * 2.2;
    }

    // Mode 3: Portfolio Spiral Nebula coordinates
    const spiralPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const angle = i * 0.06;
      const radius = i * 0.012 + 1.2;
      const spread = (Math.random() - 0.5) * 1.5;
      spiralPositions[idx] = Math.cos(angle) * radius + spread;
      spiralPositions[idx + 1] = Math.sin(angle) * radius + spread;
      spiralPositions[idx + 2] = (Math.random() - 0.5) * 6;
    }

    // Mode 4: Drifting Cosmic Dust coordinates (spherical shell)
    const dustPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const r = Math.random() * 26 + 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      dustPositions[idx] = r * Math.sin(phi) * Math.cos(theta);
      dustPositions[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      dustPositions[idx + 2] = r * Math.cos(phi);
    }

    // Initialize point positions to Mode 0 (Grid Wave flat coordinates)
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const c = i % 50;
      const r = Math.floor(i / 50);
      positions[idx] = (c - 25) * 1.1;
      positions[idx + 1] = (r - 20) * 0.9;
      positions[idx + 2] = 0;

      // Point attributes
      colors[idx] = 1;
      colors[idx + 1] = 1;
      colors[idx + 2] = 1;

      sizes[i] = Math.random() * 0.25 + 0.12;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.NormalBlending,
      depthWrite: false,
      map: particleTexture,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // --- INTERACTIVE MOUSE PARALLAX ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Track scroll displacement
    let scrollY = 0;
    let targetScrollY = 0;
    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let animationFrameId: number;
    const currentModeColors = Array.from({ length: count }, () => new THREE.Color());

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Smooth mouse and scroll lerps
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.08;

      camera.position.x = mouseX * 5;
      camera.position.y = mouseY * 3;
      camera.position.z = 28 + Math.sin(time * 0.3) * 2;
      camera.lookAt(scene.position);

      // Determine active mode index based on routing path name
      let mode = 0;
      if (pathname.startsWith('/about')) {
        mode = 1;
      } else if (
        pathname.startsWith('/construction-services') ||
        pathname.startsWith('/pre-construction') ||
        pathname.startsWith('/general-contracting') ||
        pathname.startsWith('/construction-management') ||
        pathname.startsWith('/real-estate-advisory')
      ) {
        mode = 2;
      } else if (pathname.startsWith('/portfolio')) {
        mode = 3;
      } else if (
        pathname.startsWith('/contact') ||
        pathname.startsWith('/blog') ||
        pathname.startsWith('/podcast')
      ) {
        mode = 4;
      }

      // Morphing positions loop
      const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;
      const colorAttr = geometry.getAttribute('color') as THREE.BufferAttribute;
      const colorArr = colorAttr.array as Float32Array;

      const isDark = theme === 'dark';
      const defaultColor = isDark ? DEFAULT_COLOR_DARK : DEFAULT_COLOR_LIGHT;

      // Scroll speed displacement multiplier
      const scrollVelocity = Math.min(10.0, Math.abs(targetScrollY - scrollY) * 0.1);

      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        let tx = 0;
        let ty = 0;
        let tz = 0;
        let tColor = defaultColor;

        // Calculate targets based on active mode
        if (mode === 0) {
          // Home mode: Sinusoidal waves grid
          const c = i % 50;
          const r = Math.floor(i / 50);
          tx = (c - 25) * 1.25;
          ty = (r - 20) * 1.0;
          // Displace along Z with scroll speed adding turbulence
          tz = Math.sin(tx * 0.12 + time * 1.6 + scrollVelocity * 0.5) * 
               Math.cos(ty * 0.12 + time * 1.4 + scrollVelocity * 0.5) * 3.5;
          
          // Color points: 12% golden accents, 88% default base
          if (i % 8 === 0) {
            tColor = CATEGORY_COLORS[0];
          }
        } else if (mode === 1) {
          // About mode: Concentric architectural cubes
          tx = boxPositions[idx];
          ty = boxPositions[idx + 1];
          tz = boxPositions[idx + 2] + Math.sin(time * 0.8 + tx) * 0.4;
          
          if (i % 12 === 0) {
            tColor = isDark ? new THREE.Color('#38bdf8') : new THREE.Color('#0369a1');
          }
        } else if (mode === 2) {
          // Services mode: Grid blueprint snapping layout
          tx = blueprintPositions[idx];
          ty = blueprintPositions[idx + 1];
          tz = blueprintPositions[idx + 2];
          // Distort mesh locally based on mouse
          const dist = Math.sqrt((tx - mouseX * 8) ** 2 + (ty - mouseY * 6) ** 2);
          if (dist < 8) {
            tz += (8 - dist) * 2.0;
          }
          if (i % 6 === 0) {
            tColor = isDark ? CATEGORY_COLORS[4] : new THREE.Color('#0d9488');
          }
        } else if (mode === 3) {
          // Portfolio mode: Reacts to hovered categories
          tx = spiralPositions[idx];
          ty = spiralPositions[idx + 1];
          tz = spiralPositions[idx + 2] + scrollVelocity * 0.8;
          
          if (hoveredPortfolioIndex !== null) {
            tColor = CATEGORY_COLORS[hoveredPortfolioIndex % CATEGORY_COLORS.length];
          } else if (i % 5 === 0) {
            tColor = CATEGORY_COLORS[7];
          }
        } else {
          // Contact, Blog, Podcast mode: drifting space dust
          tx = dustPositions[idx] + Math.sin(time * 0.2 + i) * 1.5;
          ty = dustPositions[idx + 1] + Math.cos(time * 0.25 + i) * 1.5;
          tz = dustPositions[idx + 2];
          
          if (i % 10 === 0) {
            tColor = isDark ? new THREE.Color('#f472b6') : new THREE.Color('#db2777');
          }
        }

        // Interpolate point positions (morphing transition)
        posArr[idx] += (tx - posArr[idx]) * 0.08;
        posArr[idx + 1] += (ty - posArr[idx + 1]) * 0.08;
        posArr[idx + 2] += (tz - posArr[idx + 2]) * 0.08;

        // Interpolate colors smoothly
        const cColor = currentModeColors[i];
        cColor.lerp(tColor, 0.05);
        colorArr[idx] = cColor.r;
        colorArr[idx + 1] = cColor.g;
        colorArr[idx + 2] = cColor.b;
      }

      posAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;

      // Slow orbital rotate of the whole system
      particleSystem.rotation.y = time * 0.015;
      particleSystem.rotation.z = time * 0.008;

      renderer.render(scene, camera);
    };

    animate();

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, [pathname, theme, hoveredPortfolioIndex]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-transparent" 
    />
  );
}
