const TalkingWave = ({ isMuted }: { isMuted: boolean }) => {
  return (
    <div className={`absolute inset-0 transition-opacity duration-500 ${isMuted ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="talking-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#talking-wave" x="48" y="0" fill="#B5DEFF" fillOpacity="0.5" className="animate-wave-1" />
            <use href="#talking-wave" x="48" y="3" fill="#B5DEFF" fillOpacity="0.4" className="animate-wave-2" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default TalkingWave 