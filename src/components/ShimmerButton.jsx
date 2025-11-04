import React from 'react';
import './ShimmerButton.css';

const ShimmerButton = React.forwardRef((props, ref) => {
  const {
    shimmerColor = "#ffffff",
    shimmerSize = "0.05em",
    shimmerDuration = "3s",
    borderRadius = "100px",
    background = "rgba(0, 0, 0, 1)",
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      style={{
        '--spread': '90deg',
        '--shimmer-color': shimmerColor,
        '--radius': borderRadius,
        '--speed': shimmerDuration,
        '--cut': shimmerSize,
        '--bg': background,
      }}
      className={`shimmer-button ${className}`}
      ref={ref}
      {...rest}
    >
      <div className="spark-container">
        <div className="spark">
          <div className="spark-before" />
        </div>
      </div>
      {children}
      <div className="highlight" />
      <div className="backdrop" />
    </button>
  );
});

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };