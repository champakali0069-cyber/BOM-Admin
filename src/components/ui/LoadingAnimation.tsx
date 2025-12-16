
import Lottie from 'lottie-react';
import loadingAnimation from '@/lottie/loading.json';

interface LoadingAnimationProps {
    className?: string;
    size?: number; // Optional size prop
}

export function LoadingAnimation({ className = '', size = 200 }: LoadingAnimationProps) {
    return (
        <div className={`flex items-center justify-center w-full h-full min-h-[200px] ${className}`}>
            <div style={{ width: size, height: size }}>
                <Lottie animationData={loadingAnimation} loop={true} />
            </div>
        </div>
    );
}
