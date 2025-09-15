import { useAppContext } from "@/context/Context";
import { useEffect, useRef } from "react";

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null);
  const { isDarkTheme } = useAppContext();

  useEffect(() => {
    let vantaEffect = null;

    const loadVanta = async () => {
      vantaEffect = window.VANTA.DOTS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: isDarkTheme ? "#1d00f7" : "#20d7ff",
        backgroundColor: isDarkTheme ? "#000016" : "#dff0fa",
        size: 3.7,
        spacing: 21.0,
        showLines: false,
      });
    };

    loadVanta();

    return () => {
      // if (vantaEffect) vantaEffect.destroy();
    };
  }, [isDarkTheme]);

  return (
    <div
      ref={vantaRef}
      style={
        {
          // zIndex: -1,
        }
      }
    >
      {children}
    </div>
  );
}
