import { useRef } from 'react';

export default function TiltCard({ children, className }) {
  const ref = useRef(null);
  
  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = 
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
    card.style.transition = 'transform 0.1s ease';
  };
  
  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = 
      'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
    card.style.transition = 'transform 0.4s ease';
  };
  
  return (
    <div ref={ref} className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
