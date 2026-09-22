'use client';

import React, { forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'secondary-outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#163e2f] text-white border border-[#163e2f] hover:bg-[#102e23] hover:border-[#102e23] shadow-sm',
  secondary:
    'bg-secondary text-white border border-secondary hover:bg-secondary-mid hover:border-secondary-mid shadow-sm',
  outline:
    'bg-transparent text-[#163e2f] border border-[#163e2f]/35 hover:bg-[#163e2f] hover:text-white hover:border-[#163e2f]',
  'secondary-outline':
    'bg-transparent text-secondary border border-secondary/35 hover:bg-secondary hover:text-white hover:border-secondary',
  ghost:
    'bg-transparent text-current border border-transparent hover:bg-black/5',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs tracking-[0.14em] gap-2',
  md: 'px-6 py-2.5 sm:py-3 text-xs sm:text-[0.8125rem] tracking-[0.16em] gap-2.5',
  lg: 'px-8 py-3.5 sm:py-4 text-sm tracking-[0.18em] gap-3',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const hasCustomIcon = Boolean(icon);

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`group relative inline-flex items-center justify-center font-primary font-semibold uppercase rounded-none cursor-pointer transition-all duration-300 ease-out select-none overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${variantClasses[variant]
          } ${sizeClasses[size]} ${className}`.trim()}
        {...props}
      >
        {/* Left Icon if specified */}
        {hasCustomIcon && iconPosition === 'left' && (
          <span className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}

        {/* Button Text with Smooth Character / Word Roll Animation */}
        <span className="relative inline-flex items-center overflow-hidden leading-tight py-0.5">
          {typeof children === 'string' ? (
            <span className="inline-flex">
              {children.split('').map((char, index) => (
                <span key={index} className="relative inline-block overflow-hidden">
                  <span
                    className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-[-120%]"
                    style={{ transitionDelay: `${index * 12}ms` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[120%] group-hover:translate-y-0"
                    style={{ transitionDelay: `${index * 12}ms` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                </span>
              ))}
            </span>
          ) : (
            <span className="relative inline-block overflow-hidden">
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-[-120%]">
                {children}
              </span>
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[120%] group-hover:translate-y-0"
              >
                {children}
              </span>
            </span>
          )}
        </span>

        {/* Right Custom Icon */}
        {hasCustomIcon && iconPosition === 'right' && (
          <span className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;