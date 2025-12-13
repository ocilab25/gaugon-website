interface CheckmarkIconProps {
    className?: string;
}

export default function CheckmarkIcon({ className = "w-5 h-5 text-primary" }: CheckmarkIconProps) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
            />
        </svg>
    );
}
