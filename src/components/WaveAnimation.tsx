const WaveAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Верхня хвиля (перевернута) */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg className="w-full h-[30px]" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave-top" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#wave-top" x="48" y="0" fill="#B5DEFF" fillOpacity="0.7" className="animate-wave-1" />
            <use href="#wave-top" x="48" y="3" fill="#B5DEFF" fillOpacity="0.6" className="animate-wave-2" />
          </g>
        </svg>
      </div>

      {/* Нижня хвиля */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-[30px]" viewBox="0 24 150 28" preserveAspectRatio="none">
          <use href="#wave-top" x="48" y="0" fill="#B5DEFF" fillOpacity="0.7" className="animate-wave-1" />
          <use href="#wave-top" x="48" y="3" fill="#B5DEFF" fillOpacity="0.6" className="animate-wave-2" />
        </svg>
      </div>
    </div>
  )
}

export default WaveAnimation 