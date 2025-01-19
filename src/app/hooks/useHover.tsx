import { useState, useCallback } from "react";

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const [hoverData, setHoverData] = useState({ x: 0, y: 0 });
  const [hoverContent, setHoverContent] = useState<string | null>(null);

  const onMouseEnter = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setHovered(true);
    // setHoverContent(event.currentTarget.innerText); // Capture the inner HTML content
    const innerText = (event.target as HTMLDivElement).innerText;
    setHoverContent(innerText);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHovered(false);
    setHoverContent(null);
  }, []);

  const onMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setHoverData({ x: event.clientX, y: event.clientY });
    const innerText = (event.target as HTMLDivElement).innerText;
    setHoverContent(innerText);
  }, []);

  const hoverProps = {
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
  };

  return { hovered, hoverData, hoverContent, hoverProps };
};
