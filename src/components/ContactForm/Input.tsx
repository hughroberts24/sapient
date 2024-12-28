import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
}

export default function Input({ label, multiline, className = '', ...props }: InputProps) {
  const baseStyles = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all";
  
  return (
    <div className="mb-4">
      <label className="block text-gray-400 mb-2 text-sm">{label}</label>
      {multiline ? (
        <textarea 
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} 
          className={`${baseStyles} min-h-[120px] ${className}`}
        />
      ) : (
        <input 
          {...props as React.InputHTMLAttributes<HTMLInputElement>} 
          className={`${baseStyles} ${className}`}
        />
      )}
    </div>
  );
}