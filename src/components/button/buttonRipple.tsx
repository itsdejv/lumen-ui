import { type MouseEvent, useLayoutEffect, useState } from "react";

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void,
) => {
  useLayoutEffect(() => {
    let bounce: ReturnType<typeof setTimeout> | undefined = undefined;

    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        if (bounce) clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

interface RippleType {
  x: number;
  y: number;
  size: number;
}

export const ButtonRipple = () => {
  const [rippleArray, setRippleArray] = useState<RippleType[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, 500, () => {
    setRippleArray([]);
  });

  const handleAddRipple = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const rippleContainer = target.getBoundingClientRect();

    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = e.pageX - rippleContainer.x - size / 2;
    const y = e.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div
      className="absolute left-0 top-0 bottom-0 right-0"
      tabIndex={0}
      onMouseDown={handleAddRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              className="bg-red-500 rounded-full absolute animate-ripple"
              style={{
                transform: "scale(0)",
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </div>
  );
};
