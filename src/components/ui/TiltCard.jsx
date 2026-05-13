import Tilt from 'react-parallax-tilt'

export function TiltCard({ children, className, style, ...rest }) {
  return (
    <Tilt
      className={className}
      style={style}
      tiltMaxAngleX={7}
      tiltMaxAngleY={7}
      glareEnable={false}
      scale={1.02}
      transitionSpeed={450}
      {...rest}
    >
      {children}
    </Tilt>
  )
}
