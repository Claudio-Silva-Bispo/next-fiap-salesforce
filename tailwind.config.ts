import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primeira: "#B9E6F7",
        segunda: "#A4DDF8",
        terceira: "#8BD6F4",
        quarta: "#77CFF2",
        quinta: "#2491E4",
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      screens: {
        's': '378px',
        'sm': '540px',
        'm': '700px',
        'md': '940px',
        'lg': '1020px',
        'lx': '1200px',
        'xl': '1400px',
        'xxl': '1600px',
      },
    },
  },
  plugins: [],
};

export default config;
