import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
				display: ['Sora', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				kids: {
					primary: 'hsl(var(--kids-primary))',
					secondary: 'hsl(var(--kids-secondary))',
					accent: 'hsl(var(--kids-accent))'
				},
				'trust-blue': 'hsl(var(--trust-blue))',
				'growth-green': 'hsl(var(--growth-green))',
				'vibrant-orange': 'hsl(var(--vibrant-orange))',
				'electric-cyan': 'hsl(var(--electric-cyan))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' },
					'50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.8)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(150 30% 35%), hsl(150 35% 45%))',
				'gradient-secondary': 'linear-gradient(135deg, hsl(35 45% 70%), hsl(45 50% 80%))',
				'gradient-kids': 'linear-gradient(135deg, hsl(150 30% 35%), hsl(35 45% 70%))',
				'gradient-trust': 'linear-gradient(135deg, hsl(210 45% 55%), hsl(150 30% 35%))',
				'gradient-subtle': 'linear-gradient(180deg, hsl(45 35% 95%), hsl(45 40% 98%))',
				'gradient-vibrant': 'linear-gradient(135deg, hsl(35 60% 50%), hsl(150 40% 45%))',
				'gradient-currency': 'linear-gradient(135deg, hsl(150 30% 35%), hsl(35 45% 70%), hsl(210 45% 55%))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
