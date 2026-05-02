import { useCallback, useRef } from "react";

export default function useDragScroll() {
  const ref = useRef(null);
  const state = useRef({ dragging: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = useCallback((event) => {
    if (!ref.current) return;
    state.current = {
      dragging: true,
      startX: event.clientX,
      scrollLeft: ref.current.scrollLeft,
    };
    ref.current.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback((event) => {
    if (!state.current.dragging || !ref.current) return;
    const distance = event.clientX - state.current.startX;
    ref.current.scrollLeft = state.current.scrollLeft - distance;
  }, []);

  const stopDrag = useCallback((event) => {
    state.current.dragging = false;
    if (ref.current?.hasPointerCapture(event.pointerId)) {
      ref.current.releasePointerCapture(event.pointerId);
    }
  }, []);

  return {
    ref,
    dragProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: stopDrag,
      onPointerCancel: stopDrag,
      onPointerLeave: stopDrag,
    },
  };
}
