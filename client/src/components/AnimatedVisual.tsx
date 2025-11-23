import { Database, Brain, Search, Zap, FileText, BarChart, Globe, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AnimatedVisual() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Synthesizing market research on AI trends...';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 md:mt-12 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-2xl relative shadow-2xl overflow-hidden group">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="w-[95%] mx-auto relative z-10 py-6 sm:py-8">
        {/* Command Bar */}
        <div className="bg-slate-900/80 backdrop-blur-md text-slate-100 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-left border border-slate-700/50 shadow-lg font-mono text-xs sm:text-sm flex items-center gap-3 mb-6 sm:mb-8">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <div className="h-4 w-[1px] bg-slate-700 mx-2"></div>
          <div className="flex-1 flex items-center">
            <span className="text-violet-400 mr-2">➜</span>
            <span className="text-slate-300">{typedText}</span>
            <span className="inline-block w-2 h-4 bg-violet-400 ml-1 animate-pulse"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* Data Sources Card */}
          <div
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 md:p-5 flex flex-col animate-fade-in-up h-[160px] sm:h-[180px] hover:border-violet-500/30 transition-colors duration-300"
            style={{ animationDelay: '2.6s', animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="p-1.5 rounded-lg bg-violet-500/10">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
              </div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Data Sources</span>
            </div>
            <div className="flex-1 flex flex-col gap-2 justify-center">
              {[
                { label: 'Academic Papers', width: '90%', color: 'bg-violet-500' },
                { label: 'Market Reports', width: '75%', color: 'bg-indigo-500' },
                { label: 'News Feeds', width: '85%', color: 'bg-blue-500' }
              ].map((item, i) => (
                <div key={i} className="group/bar">
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover/bar:opacity-100 transition-opacity text-violet-300">Active</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)]`}
                      style={{
                        width: item.width,
                        animation: `grow-bar 1s ease-out ${2.8 + i * 0.2}s both`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Processing Core Card */}
          <div
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 md:p-5 flex flex-col animate-fade-in-up h-[160px] sm:h-[180px] hover:border-cyan-500/30 transition-colors duration-300"
            style={{ animationDelay: '2.8s', animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="p-1.5 rounded-lg bg-cyan-500/10">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              </div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Processing Core</span>
            </div>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border border-cyan-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                <div className="w-16 h-16 border border-cyan-500/40 rounded-full absolute animate-[spin_4s_linear_infinite_reverse]"></div>
              </div>
              <div className="relative z-10 text-center">
                <div className="text-2xl font-bold text-white mb-0.5 font-mono">
                  <span className="animate-pulse">98</span>%
                </div>
                <div className="text-[10px] text-cyan-400/80 uppercase tracking-widest">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Insight Generation Card */}
          <div
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 md:p-5 flex flex-col animate-fade-in-up sm:col-span-2 md:col-span-1 h-[160px] sm:h-[180px] hover:border-emerald-500/30 transition-colors duration-300"
            style={{ animationDelay: '3.0s', animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="p-1.5 rounded-lg bg-emerald-500/10">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Insight Gen</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                  <FileText className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="h-1.5 w-16 bg-slate-700 rounded mb-1.5"></div>
                  <div className="h-1.5 w-24 bg-slate-800 rounded"></div>
                </div>
                <div className="text-xs text-emerald-400 font-mono">GEN</div>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                  <BarChart className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="h-1.5 w-20 bg-slate-700 rounded mb-1.5"></div>
                  <div className="h-1.5 w-12 bg-slate-800 rounded"></div>
                </div>
                <div className="text-xs text-emerald-400 font-mono">VIS</div>
              </div>
            </div>
          </div>

          {/* Global Analysis Map */}
          <div
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 md:p-5 flex flex-col sm:col-span-2 md:col-span-2 animate-fade-in-up h-[180px] sm:h-[200px] hover:border-blue-500/30 transition-colors duration-300"
            style={{ animationDelay: '3.2s', animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="p-1.5 rounded-lg bg-blue-500/10">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Global Context Analysis</span>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg bg-slate-800/50 border border-slate-700/50">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]"></div>

              {/* Map Points */}
              {[
                { x: 20, y: 30, delay: 0 },
                { x: 50, y: 45, delay: 0.2 },
                { x: 75, y: 25, delay: 0.4 },
                { x: 85, y: 65, delay: 0.6 },
                { x: 35, y: 70, delay: 0.8 }
              ].map((point, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    animation: `ping-dot 2s infinite ${point.delay}s`
                  }}
                >
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                  {/* Connecting Lines */}
                  {i < 4 && (
                    <svg className="absolute top-1 left-1 w-[200px] h-[200px] overflow-visible pointer-events-none opacity-20">
                      <line
                        x1="0"
                        y1="0"
                        x2={(point.x < 50 ? 100 : -50)}
                        y2={(point.y < 50 ? 50 : -50)}
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-blue-400"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Metrics */}
          <div
            className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 md:p-5 flex flex-col animate-fade-in-up h-[160px] sm:h-[180px] hover:border-amber-500/30 transition-colors duration-300"
            style={{ animationDelay: '3.4s', animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="p-1.5 rounded-lg bg-amber-500/10">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              </div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Latency</span>
            </div>
            <div className="flex-1 flex flex-col justify-end relative overflow-hidden rounded-lg bg-slate-800/30">
              <div className="flex items-end gap-1 h-full px-2 pb-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-amber-500/20 to-amber-400/80 rounded-t-sm transition-all duration-300"
                    style={{
                      height: `${h}%`,
                      animation: `pulse-height 2s infinite ${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
              <div className="absolute top-2 right-2 text-xs font-mono text-amber-400">
                12ms
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes grow-bar {
          from { width: 0%; }
        }
        @keyframes ping-dot {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse-height {
          0%, 100% { opacity: 0.5; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
