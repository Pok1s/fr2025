const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">FriendsRate</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white/10 rounded-full p-2">
          <img src="/logo.svg" className="w-6 h-6" />
          <span>4870</span>
          <span className="flex items-center ml-2">
            <span>4.5</span>
            <span className="text-xs text-gray-400">(392)</span>
          </span>
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded-full">
          Connect Wallet
        </button>
      </div>
    </header>
  )
}

export default Header 