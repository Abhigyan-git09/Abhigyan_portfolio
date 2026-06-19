
export function DepthGradientOverlays() {
  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-[15vh] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, var(--bg-void) 0%, transparent 100%)'
        }}
      />
      <div 
        className="fixed bottom-0 left-0 w-full h-[15vh] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, var(--bg-void) 0%, transparent 100%)'
        }}
      />
    </>
  );
}
