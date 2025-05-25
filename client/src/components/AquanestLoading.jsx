import React, { useState, useEffect } from "react";
import { Fish, Waves, Droplets, Sparkles } from "lucide-react";

const AquanestLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 3000);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Welcome to Aquanest
          </h1>
          <p className="text-teal-700 text-lg">Your aquatic paradise awaits!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cyan-50 via-blue-100 to-teal-100 flex items-center justify-center z-50 overflow-hidden">
      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white bg-opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Animated waves background */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 200"
          className="w-full h-32 text-cyan-200 opacity-30"
        >
          <path
            d="M0,100 C300,150 900,50 1200,100 L1200,200 L0,200 Z"
            fill="currentColor"
            className="animate-wave"
          />
        </svg>
        <svg
          viewBox="0 0 1200 200"
          className="w-full h-32 text-teal-200 opacity-20 -mt-16"
        >
          <path
            d="M0,120 C300,170 900,70 1200,120 L1200,200 L0,200 Z"
            fill="currentColor"
            className="animate-wave-slow"
          />
        </svg>
      </div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center space-y-8 p-8">
        {/* Brand logo area with animated fish */}
        <div className="relative mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Fish className="w-16 h-16 text-cyan-600 animate-swim" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-teal-400 animate-sparkle" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Aquanest
              </h1>
              <p className="text-sm text-teal-600 font-medium mt-1">
                Aquatic Paradise
              </p>
            </div>
          </div>
        </div>

        {/* Animated aquarium tank */}
        <div className="relative w-60 h-58 md:w-80 md:h-48 bg-gradient-to-b from-cyan-100 to-blue-200 rounded-2xl border-4 border-teal-300 shadow-2xl overflow-hidden">
          {/* Water effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-200 to-blue-300 opacity-50 animate-water-flow" />

          {/* Swimming fish */}
          <div className="absolute top-8 left-4 animate-fish-swim">
            <Fish className="w-8 h-8 text-orange-500 transform rotate-12" />
          </div>
          <div className="absolute top-16 right-8 animate-fish-swim-reverse">
            <Fish className="w-6 h-6 text-blue-600 transform -rotate-12 scale-x-[-1]" />
          </div>
          <div className="absolute bottom-12 left-12 animate-fish-swim-slow">
            <Fish className="w-7 h-7 text-purple-500 transform rotate-6" />
          </div>

          {/* Bubbles inside tank */}
          <div className="absolute bottom-4 left-8">
            <Droplets className="w-6 h-6 text-cyan-400 animate-bubble" />
          </div>
          <div className="absolute bottom-4 right-12">
            <div className="space-y-1 animate-bubble-stream">
              <div className="w-2 h-2 bg-cyan-300 rounded-full" />
              <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full ml-1" />
              <div className="w-1 h-1 bg-cyan-300 rounded-full ml-0.5" />
            </div>
          </div>

          {/* Tank base with gravel */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-b-xl" />

          {/* Water surface shimmer */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
        </div>

        {/* Loading text with wave effect */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-teal-700 mb-3 animate-bounce-gentle">
            Preparing Your Aquatic Experience
          </h2>

          {/* Animated loading text */}
          <div className="flex items-center justify-center space-x-2 text-cyan-600 font-medium">
            <Waves className="w-5 h-5 animate-wave-icon" />
            <span className="animate-pulse">Loading marine life</span>
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>

        {/* Beautiful progress bar */}
        <div className="md:w-80 w-60 bg-cyan-100 rounded-full h-3 shadow-inner overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer-fast" />
          </div>
        </div>

        {/* Progress percentage */}
        <div className="text-teal-600 font-semibold text-lg">{progress}%</div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25px);
          }
        }

        @keyframes wave-slow {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(25px);
          }
        }

        @keyframes swim {
          0%,
          100% {
            transform: translateX(0) rotateY(0deg);
          }
          50% {
            transform: translateX(10px) rotateY(10deg);
          }
        }

        @keyframes fish-swim {
          0% {
            transform: translateX(0) translateY(0) rotate(12deg);
          }
          25% {
            transform: translateX(40px) translateY(-5px) rotate(8deg);
          }
          50% {
            transform: translateX(80px) translateY(0) rotate(12deg);
          }
          75% {
            transform: translateX(40px) translateY(5px) rotate(16deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(12deg);
          }
        }

        @keyframes fish-swim-reverse {
          0% {
            transform: translateX(0) translateY(0) rotate(-12deg) scaleX(-1);
          }
          25% {
            transform: translateX(-30px) translateY(3px) rotate(-8deg)
              scaleX(-1);
          }
          50% {
            transform: translateX(-60px) translateY(0) rotate(-12deg) scaleX(-1);
          }
          75% {
            transform: translateX(-30px) translateY(-3px) rotate(-16deg)
              scaleX(-1);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(-12deg) scaleX(-1);
          }
        }

        @keyframes fish-swim-slow {
          0% {
            transform: translateX(0) translateY(0) rotate(6deg);
          }
          33% {
            transform: translateX(20px) translateY(-3px) rotate(2deg);
          }
          66% {
            transform: translateX(40px) translateY(3px) rotate(10deg);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(6deg);
          }
        }

        @keyframes bubble {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes bubble-stream {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-30px);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shimmer-fast {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.3;
            transform: rotate(0deg) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: rotate(180deg) scale(1.2);
          }
        }

        @keyframes water-flow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes wave-icon {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: wave-slow 4s ease-in-out infinite;
        }
        .animate-swim {
          animation: swim 2s ease-in-out infinite;
        }
        .animate-fish-swim {
          animation: fish-swim 8s ease-in-out infinite;
        }
        .animate-fish-swim-reverse {
          animation: fish-swim-reverse 10s ease-in-out infinite;
        }
        .animate-fish-swim-slow {
          animation: fish-swim-slow 12s ease-in-out infinite;
        }
        .animate-bubble {
          animation: bubble 2s ease-in-out infinite;
        }
        .animate-bubble-stream {
          animation: bubble-stream 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 1s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .animate-water-flow {
          animation: water-flow 4s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-wave-icon {
          animation: wave-icon 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AquanestLoading;
