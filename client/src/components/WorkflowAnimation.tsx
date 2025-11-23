import { Database, Globe, Split, FileJson, Zap, MessageSquare, ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function WorkflowAnimation() {
  const [activeNode, setActiveNode] = useState<number>(-1);
  const [completedNodes, setCompletedNodes] = useState<number[]>([]);
  const [activeEdges, setActiveEdges] = useState<number[]>([]);
  const [completedEdges, setCompletedEdges] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    // Reset state
    setActiveNode(-1);
    setCompletedNodes([]);
    setActiveEdges([]);
    setCompletedEdges([]);

    const sequence = [
      { node: 0, delay: 300 },
      { edge: 0, delay: 1200 },
      { node: 1, delay: 1800 },
      { edge: 1, delay: 2700 },
      { node: 2, delay: 3300 },
      { edge: 2, delay: 4200 }, // Split path
      { edge: 3, delay: 4200 }, // Split path
      { node: 3, delay: 4800 }, // Parallel
      { node: 4, delay: 4800 }, // Parallel
      { edge: 4, delay: 5700 },
      { edge: 5, delay: 5700 },
      { node: 5, delay: 6300 }, // Merge
      { edge: 6, delay: 7200 },
      { node: 6, delay: 7800 },
      { reset: true, delay: 9000 }
    ];

    sequence.forEach(step => {
      setTimeout(() => {
        if (step.reset) {
          setActiveNode(-1);
          return;
        }

        if (step.node !== undefined) {
          setActiveNode(step.node);
          setCompletedNodes(prev => [...prev, step.node!]);
          // Mark previous edges as completed when node activates
          if (step.node > 0) {
            // Logic to mark incoming edges as completed would go here, 
            // but for simplicity we handle it in the edge step or just let them stay active/completed
          }
        }

        if (step.edge !== undefined) {
          setActiveEdges(prev => [...prev, step.edge!]);
          setCompletedEdges(prev => [...prev, step.edge!]);
        }
      }, step.delay);
    });
  };

  const workflowNodes = [
    {
      icon: Globe,
      label: 'Webhook',
      sublabel: 'Inbound Lead',
      x: 10,
      y: 50,
      color: 'text-orange-400',
      bg: 'bg-orange-400/10',
      border: 'border-orange-400/50'
    },
    {
      icon: FileJson,
      label: 'Parser',
      sublabel: 'Extract Data',
      x: 25,
      y: 50,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/50'
    },
    {
      icon: Zap,
      label: 'AI Classifier',
      sublabel: 'Analyze Intent',
      x: 40,
      y: 50,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/50'
    },
    {
      icon: MessageSquare,
      label: 'Support Bot',
      sublabel: 'Draft Reply',
      x: 60,
      y: 30,
      color: 'text-green-400',
      bg: 'bg-green-400/10',
      border: 'border-green-400/50'
    },
    {
      icon: Database,
      label: 'CRM Update',
      sublabel: 'Save Lead',
      x: 60,
      y: 70,
      color: 'text-red-400',
      bg: 'bg-red-400/10',
      border: 'border-red-400/50'
    },
    {
      icon: Split,
      label: 'Merge',
      sublabel: 'Combine',
      x: 75,
      y: 50,
      color: 'text-slate-300',
      bg: 'bg-slate-400/10',
      border: 'border-slate-400/50'
    },
    {
      icon: CheckCircle2,
      label: 'Complete',
      sublabel: 'Notify Team',
      x: 90,
      y: 50,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
      border: 'border-emerald-400/50'
    }
  ];

  const edges = [
    { from: 0, to: 1, fromY: 50, toY: 50 },
    { from: 1, to: 2, fromY: 50, toY: 50 },
    { from: 2, to: 3, fromY: 50, toY: 30 }, // Split up
    { from: 2, to: 4, fromY: 50, toY: 70 }, // Split down
    { from: 3, to: 5, fromY: 30, toY: 50 }, // Merge down
    { from: 4, to: 5, fromY: 70, toY: 50 }, // Merge up
    { from: 5, to: 6, fromY: 50, toY: 50 }
  ];

  const getNodeStatus = (index: number) => {
    if (completedNodes.includes(index)) return 'completed';
    if (activeNode === index) return 'active';
    return 'idle';
  };

  const getEdgeStatus = (index: number) => {
    if (completedEdges.includes(index)) return 'completed';
    if (activeEdges.includes(index)) return 'active';
    return 'idle';
  };

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto mt-8 md:mt-12 bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl overflow-hidden relative group">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] p-4 sm:p-6 md:p-8 overflow-x-auto overflow-y-hidden custom-scrollbar">
        <div className="relative w-full h-full min-w-[800px] flex items-center justify-center" style={{ transform: 'scale(1)', transformOrigin: 'center center' }}>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ zIndex: 1 }}>
            {edges.map((edge, index) => {
              const fromNode = workflowNodes[edge.from];
              const toNode = workflowNodes[edge.to];
              const status = getEdgeStatus(index);

              const fromX = fromNode.x + 3; // Adjust based on node width
              const fromY = edge.fromY;
              const toX = toNode.x - 3;
              const toY = edge.toY;

              const isCurved = Math.abs(fromY - toY) > 5;

              let pathD;
              if (isCurved) {
                const dx = toX - fromX;
                const controlDist = dx * 0.5;
                pathD = `M ${fromX},${fromY} C ${fromX + controlDist},${fromY} ${toX - controlDist},${toY} ${toX},${toY}`;
              } else {
                pathD = `M ${fromX},${fromY} L ${toX},${toY}`;
              }

              const pathId = `edge-${index}`;
              const strokeColor = status === 'completed' || status === 'active' ? '#94a3b8' : '#334155';
              const strokeWidth = status === 'completed' || status === 'active' ? '0.4' : '0.2';

              return (
                <g key={index}>
                  <path
                    id={pathId}
                    d={pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    className="transition-colors duration-500"
                  />
                  {status === 'active' && (
                    <circle r="0.8" fill="#f8fafc">
                      <animateMotion dur="1s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {workflowNodes.map((node, index) => {
            const status = getNodeStatus(index);
            const isVisible = true; // Always visible, just changes state

            return (
              <div
                key={index}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-40'}`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  zIndex: 10
                }}
              >
                <div className="flex flex-col items-center group/node cursor-pointer">
                  {/* Node Box */}
                  <div
                    className={`relative bg-slate-900 rounded-lg transition-all duration-300 flex flex-col items-center justify-center min-w-[100px] p-3 border-2
                        ${status === 'active'
                        ? `border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-110`
                        : status === 'completed'
                          ? `${node.border} shadow-lg`
                          : 'border-slate-700 hover:border-slate-600'
                      }
                    `}
                  >
                    {/* Header Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-md ${status === 'active' || status === 'completed' ? node.color.replace('text-', 'bg-') : 'bg-slate-700'}`}></div>

                    <div className={`mb-2 mt-1 ${status === 'active' || status === 'completed' ? node.color : 'text-slate-500'}`}>
                      <node.icon className="w-6 h-6" strokeWidth={2} />
                    </div>

                    <div className={`text-xs font-bold mb-0.5 ${status === 'active' || status === 'completed' ? 'text-slate-200' : 'text-slate-400'}`}>
                      {node.label}
                    </div>

                    <div className="text-[10px] text-slate-500 whitespace-nowrap font-mono">
                      {node.sublabel}
                    </div>

                    {/* Connection Points */}
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-800 border-2 border-slate-600 rounded-full"></div>
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-800 border-2 border-slate-600 rounded-full"></div>

                    {status === 'active' && (
                      <div className="absolute -top-2 -right-2 bg-white text-slate-900 rounded-full p-0.5 animate-bounce">
                        <Play className="w-3 h-3 fill-current" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        WORKFLOW ACTIVE
      </div>
    </div>
  );
}
