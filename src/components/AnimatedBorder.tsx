const AnimatedBorder = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path 
          d="M0,0 L100,0 L100,100 L0,100 Z" 
          fill="none" 
          stroke="#B5DEFF" 
          strokeWidth="1" 
          className="animate-[wave_3s_ease-in-out_infinite]"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

export default AnimatedBorder 