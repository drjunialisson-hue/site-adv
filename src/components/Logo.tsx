import { useState } from "react";
import logoImg from "@/assets/logo.png";

const Logo = ({ className = "w-11 h-11" }: { className?: string }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative border border-primary/40 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-primary/70 ${className}`}>
      {!imageError ? (
        <img
          src={logoImg}
          alt="Dr. Junialisson Costa - Logo"
          className="w-full h-full object-contain p-1.5"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="font-serif text-primary text-xl font-semibold tracking-tight">JC</span>
      )}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default Logo;





