const WaveBorder = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden rounded-[32px]">
      <div className="absolute inset-0 border-[12px] border-[#B5DEFF] rounded-[32px]" />
      <div className="absolute inset-0 border-[12px] border-[#B5DEFF] rounded-[32px] animate-[borderWave_2s_ease-in-out_infinite]" />
      <div className="absolute inset-0 border-[12px] border-[#B5DEFF] rounded-[32px] animate-[borderWave_2s_ease-in-out_infinite_0.3s]" />
      <div className="absolute inset-0 border-[12px] border-[#B5DEFF] rounded-[32px] animate-[borderWave_2s_ease-in-out_infinite_0.6s]" />
    </div>
  )
}

export default WaveBorder 