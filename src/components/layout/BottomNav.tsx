import { useLocation, useNavigate } from 'react-router-dom'

const BottomNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="fixed bottom-8 left-[50%] -translate-x-1/2 w-[300px]">
      <svg width="290" height="123" viewBox="0 0 340 123" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-110">
        {/* Home */}
        <g onClick={() => navigate('/home')} style={{cursor: 'pointer'}}>
          <rect x="29.5" y="24" width="75" height="75" rx="37.5" fill="#ECF8FF"/>
          <rect x="34.5" y="29" width="65" height="65" rx="32.5" fill={location.pathname === '/home' ? '#06142E' : 'transparent'}/>
          <path d="M67.03 52.0902C67.301 51.8605 67.6447 51.7344 68 51.7344C68.3553 51.7344 68.699 51.8605 68.97 52.0902L76.47 58.4532C76.6361 58.594 76.7695 58.7693 76.861 58.9668C76.9526 59.1644 77 59.3795 77 59.5972V69.0002C77 69.398 76.842 69.7796 76.5607 70.0609C76.2794 70.3422 75.8978 70.5002 75.5 70.5002H69.75C69.5511 70.5002 69.3603 70.4212 69.2197 70.2805C69.079 70.1399 69 69.9491 69 69.7502V63.5002H67V69.7502C67 69.9491 66.921 70.1399 66.7803 70.2805C66.6397 70.4212 66.4489 70.5002 66.25 70.5002H60.5C60.1022 70.5002 59.7206 70.3422 59.4393 70.0609C59.158 69.7796 59 69.398 59 69.0002V59.5972C59 59.1572 59.194 58.7382 59.53 58.4532L67.03 52.0902Z" 
                fill={location.pathname === '/home' ? '#ECF8FF' : '#06142E'}/>
        </g>

        {/* Separator */}
        <path d="M91.5 33C98.2385 40.2912 109.762 40.2912 116.5 33L104 61.9831L116.5 90C109.606 83.0733 98.394 83.0733 91.5 90L104 61.9831L91.5 33Z" fill="#ECF8FF"/>

        {/* Star */}
        <g onClick={() => navigate('/rating')} style={{cursor: 'pointer'}}>
          <rect x="103.5" y="24" width="75" height="75" rx="37.5" fill="#ECF8FF"/>
          <rect x="108.5" y="29" width="65" height="65" rx="32.5" fill={location.pathname === '/rating' ? '#06142E' : 'transparent'}/>
          <path d="M142.728 52.9437L144.488 56.4928C144.728 56.9868 145.368 57.4607 145.908 57.5507L149.097 58.0858C151.137 58.4288 151.617 59.9207 150.147 61.3927L147.667 63.8927C147.247 64.3157 147.017 65.1328 147.147 65.7178L147.857 68.8127C148.417 71.2627 147.127 72.2098 144.977 70.9298L141.987 69.1448C141.447 68.8228 140.557 68.8228 140.007 69.1448L137.019 70.9298C134.879 72.2098 133.579 71.2517 134.139 68.8127L134.849 65.7178C134.979 65.1328 134.749 64.3157 134.329 63.8927L131.849 61.3927C130.39 59.9197 130.86 58.4288 132.899 58.0858L136.089 57.5507C136.619 57.4607 137.259 56.9868 137.499 56.4928L139.259 52.9437C140.219 51.0187 141.779 51.0187 142.729 52.9437Z" 
                fill={location.pathname === '/rating' ? '#ECF8FF' : '#06142E'}/>
        </g>

        {/* Separator */}
        <path d="M165.5 33C172.238 40.2912 183.762 40.2912 190.5 33L178 61.9831L190.5 90C183.606 83.0733 172.394 83.0733 165.5 90L178 61.9831L165.5 33Z" fill="#ECF8FF"/>

        {/* Bell */}
        <g onClick={() => navigate('/referrals')} style={{cursor: 'pointer'}}>
          <rect x="177.5" y="24" width="75" height="75" rx="37.5" fill="#ECF8FF"/>
          <rect x="182.5" y="29" width="65" height="65" rx="32.5" fill={location.pathname === '/referrals' ? '#06142E' : 'transparent'}/>
          <path d="M221.75 59.21V58.505C221.75 54.636 218.726 51.5 215 51.5C211.274 51.5 208.25 54.636 208.25 58.505V59.21C208.251 60.0516 208.011 60.8758 207.558 61.585L206.45 63.31C205.439 64.885 206.211 67.026 207.97 67.524C212.566 68.827 217.434 68.827 222.03 67.524C223.789 67.026 224.561 64.885 223.55 63.311L222.442 61.586C221.989 60.8769 221.748 60.0527 221.749 59.211L221.75 59.21Z" 
                fill={location.pathname === '/referrals' ? '#ECF8FF' : '#06142E'}/>
          <path d="M210.5 68.5C211.155 70.248 212.922 71.5 215 71.5C217.078 71.5 218.845 70.248 219.5 68.5" 
                stroke={location.pathname === '/referrals' ? '#ECF8FF' : '#06142E'} 
                strokeWidth="1.5" 
                strokeLinecap="round"/>
        </g>

        {/* Separator */}
        <path d="M239.5 33C246.238 40.2912 257.762 40.2912 264.5 33L252.5 61.9831L264.5 90C257.606 83.0733 246.394 83.0733 239.5 90L252.5 61.9831L239.5 33Z" fill="#ECF8FF"/>

        {/* Profile */}
        <g onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
          <rect x="251.5" y="24" width="75" height="75" rx="37.5" fill="#ECF8FF"/>
          <rect x="256.5" y="29" width="65" height="65" rx="32.5" fill={location.pathname === '/profile' ? '#06142E' : 'transparent'}/>
          <path d="M289 53C286.239 53 284 55.239 284 58C284 60.761 286.239 63 289 63C291.761 63 294 60.761 294 58C294 55.239 291.761 53 289 53ZM289 64C285.264 64 282.232 66.338 282.031 69.25C283.826 70.978 286.285 72 289 72C291.715 72 294.174 70.978 295.969 69.25C295.768 66.338 292.736 64 289 64Z" 
                fill={location.pathname === '/profile' ? '#ECF8FF' : '#06142E'}/>
        </g>


      </svg>
    </nav>
  )
}

export default BottomNav 