import { Sparkles, Circle, Star, Zap } from 'lucide-react';
export default function MagicalElements() {

    return (
        <div className={`absolute inset-0 pointer-events-none`}>
            {/* Floating Mystical Symbols */}
            <div className="absolute top-20 left-10 text-primary/30 float-magical">
                <Star size={24} className="sparkle" style={{ animationDelay: '0s' }} />
            </div>
            <div className="absolute top-32 right-16 text-secondary/40 float-magical">
                <Circle size={16} className="sparkle" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute top-48 left-1/4 text-primary/25 float-magical">
                <Zap size={20} className="sparkle" style={{ animationDelay: '2s' }} />
            </div>
            <div className="absolute top-64 right-1/3 text-secondary/35 float-magical"> 
                <Sparkles size={18} className="sparkle" style={{ animationDelay: '1.5s' }} />
            </div>
            <div className="absolute bottom-40 left-20 text-primary/20 float-magical">
                <Star size={14} className="sparkle" style={{ animationDelay: '3s' }} />
            </div>
            <div className="absolute bottom-32 right-20 text-secondary/30 float-magical">
                <Circle size={22} className="sparkle" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Larger Mystical Orbs */}
            <div className="absolute top-16 right-1/4 w-3 h-3 bg-primary/20 rounded-full glow-pulse"
                 style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-secondary/25 rounded-full glow-pulse"
                 style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute top-1/2 right-10 w-2 h-2 bg-primary/30 rounded-full glow-pulse"
                 style={{ animationDelay: '4s' }}></div>

            {/* Rotating Mystical Runes */}
            <div className="absolute top-24 left-1/2 text-primary/15 mystical-rotate">
                <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center">
                    <Star size={12} />
                </div>
            </div>
            <div className="absolute bottom-24 right-1/2 text-secondary/20 mystical-rotate"
                 style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center">
                    <Circle size={8} />
                </div>
            </div>
        </div>
    );
}