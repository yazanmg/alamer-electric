import React, { ReactNode } from 'react';

interface HeroProps {
  badge: string;
  badgeIcon?: ReactNode;
  title: ReactNode;
  description: string;
  primaryButton: {
    text: string;
    icon?: ReactNode;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    icon?: ReactNode;
    onClick: () => void;
  };
}

export const Hero: React.FC<HeroProps> = ({
  badge,
  badgeIcon,
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.65)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNui3N1H-kyjM3PgQvVoWXSHuE5nDE6VL-Ii0kH3Kk3dRHUuAHidxZvUZmlIDHxbbY56VCC2GxLCCG63Dk6pDrvfg-9EARinr8Lz41XUoyGgJ515vYfSg8rNS2ze-6XZHVYC6VEMA747OagsuIn_WNL2wsKGNhJfs9BiUrOnJM1xsE-S9eM4h6VwY0SpJx4eiS28LvI8dJy3YaSnbR0dtrb24FHosIOQ-rQn5toytc6ImkBAwtfvunvgQKNZ_d0a4oeWrBI09i4Kgp")`
          }}
        >
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 layout-container py-24 lg:py-48 flex flex-col items-start justify-center min-h-[500px] lg:min-h-[600px] text-start">
        <div className="max-w-[720px] flex flex-col gap-6 animate-fade-in-up w-full">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md w-fit">
            {badgeIcon ? (
              <span className="me-2 flex items-center">{badgeIcon}</span>
            ) : (
              <span className="me-2 h-2 w-2 rounded-full bg-primary"></span>
            )}
            {badge}
          </div>
          
          {/* Heading */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-slate-200 text-lg lg:text-xl font-normal leading-relaxed max-w-[600px]">
            {description}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button 
              onClick={primaryButton.onClick}
              className="h-12 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>{primaryButton.text}</span>
              {primaryButton.icon}
            </button>
            <button 
              onClick={secondaryButton.onClick}
              className="h-12 px-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>{secondaryButton.text}</span>
              {secondaryButton.icon}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};