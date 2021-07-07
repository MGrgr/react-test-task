import clsx from 'clsx';

export const Loader = ({
    value,
    width = 4,
    size = 44,
    className: classNameProp,
  }) => {
    const circleStyle = {
      strokeDasharray: undefined,
      strokeDashoffset: undefined,
    };
  
    const classes = {
      circle: clsx({
        'animate-circular-dash': !value,
      }),
      svg: clsx({
        'animate-spin': !value,
        'transform -rotate-90': value,
        [classNameProp]: !!classNameProp,
      }),
    };
  
    if (value) {
      const circumference = 2 * Math.PI * ((size - width) / 2);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      circleStyle.strokeDashoffset = (((100 - value) / 100) * circumference).toFixed(3);
    }
  
    return (
      <svg width={size} height={size} className={classes.svg} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className={classes.circle}
          cx={size / 2}
          cy={size / 2}
          r={(size - width) / 2}
          {...circleStyle}
          stroke="currentColor"
          fill="none"
          strokeWidth={width}
        />
      </svg>
    );
  };