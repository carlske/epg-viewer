interface ButtonProps
	extends Omit<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		"className" | "children"
	> {
	children: React.ReactNode;
	className?: string;
	variant?: "default" | "secondary" | "ghost";
	size?: "default" | "sm" | "lg";
}

const baseStyles =
	"cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring/50";

const variantStyles: Record<string, string> = {
	default: "bg-primary text-primary-foreground  hover:bg-primary/90",
	secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/60",
	ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizeStyles: Record<string, string> = {
	default: "h-9 px-4 py-2",
	sm: "h-8 rounded-md gap-1.5 px-3",
	lg: " w-40 h-10 rounded-md px-6",
	icon: "size-9",
};

export function Button({
	children,
	className = "",
	variant = "default",
	size = "default",
	...props
}: ButtonProps) {
	return (
		<button
			type="button"
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
			{...props}
		>
			{children}
		</button>
	);
}
