/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
	extend: {
		// Premium Typography
		fontFamily: {
		    'inter': ['Inter', 'sans-serif'],
		    'poppins': ['Poppins', 'sans-serif'],
		    'montserrat': ['Montserrat', 'sans-serif'],
		},
		
		// Enhanced Color Palette
		colors: {
		    // Brand Colors
		    brand: {
		        50: '#f0fdf4',
		        100: '#dcfce7',
		        200: '#bbf7d0',
		        300: '#86efac',
		        400: '#4ade80',
		        500: '#22c55e',
		        600: '#16a34a',
		        700: '#15803d',
		        800: '#166534',
		        900: '#14532d',
		    },
		    
		    // Premium Gray Scale
		    gray: {
		        25: '#fcfcfd',
		        50: '#f9fafb',
		        100: '#f3f4f6',
		        200: '#e5e7eb',
		        300: '#d1d5db',
		        400: '#9ca3af',
		        500: '#6b7280',
		        600: '#4b5563',
		        700: '#374151',
		        800: '#1f2937',
		        900: '#111827',
		        950: '#030712',
		    },
		    
		    // Success Colors
		    success: {
		        50: '#f0fdf4',
		        100: '#dcfce7',
		        500: '#22c55e',
		        600: '#16a34a',
		        700: '#15803d',
		    },
		    
		    // Warning Colors
		    warning: {
		        50: '#fffbeb',
		        100: '#fef3c7',
		        500: '#f59e0b',
		        600: '#d97706',
		        700: '#b45309',
		    },
		    
		    // Error Colors
		    error: {
		        50: '#fef2f2',
		        100: '#fee2e2',
		        500: '#ef4444',
		        600: '#dc2626',
		        700: '#b91c1c',
		    },
		    
		    // Background variants
		    background: 'hsl(var(--background))',
		    foreground: 'hsl(var(--foreground))',
		    card: {
			    DEFAULT: 'hsl(var(--card))',
			    foreground: 'hsl(var(--card-foreground))'
		    },
		    popover: {
			    DEFAULT: 'hsl(var(--popover))',
			    foreground: 'hsl(var(--popover-foreground))'
		    },
		    primary: {
			    DEFAULT: 'hsl(var(--primary))',
			    foreground: 'hsl(var(--primary-foreground))'
		    },
		    secondary: {
			    DEFAULT: 'hsl(var(--secondary))',
			    foreground: 'hsl(var(--secondary-foreground))'
		    },
		    muted: {
			    DEFAULT: 'hsl(var(--muted))',
			    foreground: 'hsl(var(--muted-foreground))'
		    },
		    accent: {
			    DEFAULT: 'hsl(var(--accent))',
			    foreground: 'hsl(var(--accent-foreground))'
		    },
		    destructive: {
			    DEFAULT: 'hsl(var(--destructive))',
			    foreground: 'hsl(var(--destructive-foreground))'
		    },
		    border: 'hsl(var(--border))',
		    input: 'hsl(var(--input))',
		    ring: 'hsl(var(--ring))',
		    chart: {
			    '1': 'hsl(var(--chart-1))',
			    '2': 'hsl(var(--chart-2))',
			    '3': 'hsl(var(--chart-3))',
			    '4': 'hsl(var(--chart-4))',
			    '5': 'hsl(var(--chart-5))'
		    }
		},
		
		// Enhanced Spacing
		spacing: {
		    '18': '4.5rem',
		    '22': '5.5rem',
		    '26': '6.5rem',
		    '30': '7.5rem',
		    '34': '8.5rem',
		},
		
		// Premium Border Radius
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
			'2xl': '1rem',
			'3xl': '1.5rem',
			'4xl': '2rem',
		},
		
		// Enhanced Box Shadows
		boxShadow: {
		    'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
		    'luxury-lg': '0 35px 60px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
		    'luxury-green': '0 25px 50px -12px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.1)',
		    'luxury-blue': '0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)',
		    'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
		    'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
		},
		
		// Animation Keyframes
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			},
			fadeInUp: {
			    from: {
			        opacity: '0',
			        transform: 'translateY(30px)'
			    },
			    to: {
			        opacity: '1',
			        transform: 'translateY(0)'
			    }
			},
			slideInRight: {
			    from: {
			        opacity: '0',
			        transform: 'translateX(50px)'
			    },
			    to: {
			        opacity: '1',
			        transform: 'translateX(0)'
			    }
			},
			slideInLeft: {
			    from: {
			        opacity: '0',
			        transform: 'translateX(-50px)'
			    },
			    to: {
			        opacity: '1',
			        transform: 'translateX(0)'
			    }
			},
			gradient: {
			    '0%': { backgroundPosition: '0% 50%' },
			    '50%': { backgroundPosition: '100% 50%' },
			    '100%': { backgroundPosition: '0% 50%' }
			}
		},
		
		// Enhanced Animations
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'fade-in-up': 'fadeInUp 0.6s ease-out',
			'slide-in-right': 'slideInRight 0.6s ease-out',
			'slide-in-left': 'slideInLeft 0.6s ease-out',
			'gradient': 'gradient 4s ease infinite',
			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			'bounce-slow': 'bounce 2s infinite',
			'spin-slow': 'spin 3s linear infinite',
		},
		
		// Background Images & Gradients
		backgroundImage: {
		    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		    'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		}
	}
  },
  plugins: [require("tailwindcss-animate")],
};