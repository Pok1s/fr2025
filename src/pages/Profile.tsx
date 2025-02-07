import Layout from '../components/layout/Layout'
import BottomNav from '../components/layout/BottomNav'
import Header from '../components/layout/Header'
import AnimatedBackground from '../AnimatedBackground'
import { useState, useEffect } from 'react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUserData, setTempUserData] = useState({
    name: 'Joanny',
    username: 'Joanny',
    age: '21',
    gender: 'Female',
    language: 'UKR',
    about: 'Minus aperiam magnam id omnis itaque accusamus nulla nobis...'
  });
  const [userData, setUserData] = useState({
    name: 'Joanny',
    username: 'Joanny',
    age: '21',
    gender: 'Female',
    language: 'UKR',
    about: 'Minus aperiam magnam id omnis itaque accusamus nulla nobis...'
  });
  const [openSelect, setOpenSelect] = useState<'gender' | 'language' | null>(null);
  const [profileImage, setProfileImage] = useState('/avatar.jpg');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    if (isEditing) {
      // Перевіряємо довжину username перед збереженням
      if (tempUserData.username.length >= 6) {
        setUserData({
          ...tempUserData,
          name: tempUserData.username
        });
        setIsEditing(false);
      } else {
        // Можна додати повідомлення про помилку
        alert('Username must be at least 6 characters long');
      }
    } else {
      setTempUserData(userData);
      setIsEditing(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openSelect && !(event.target as Element).closest('.relative')) {
        setOpenSelect(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openSelect]);

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-[#010817] relative">
        {/* Фоновий компонент */}
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>

        {/* Контент */}
        <div className="relative flex flex-col min-h-screen">
          <div className="px-4 pt-6 pb-32 relative z-10">
            <Header />
            
            <div className="max-w-[467px] mx-auto w-full bg-white rounded-[32px] p-6 mt-4 h-[calc(100vh-320px)] overflow-y-auto">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
                    <img 
                      src={profileImage}
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isEditing && (
                    <div className="absolute -right-32 top-1/2 -translate-y-1/2">
                      <input
                        type="file"
                        id="profile-photo"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label 
                        htmlFor="profile-photo" 
                        className="px-4 py-2 bg-white rounded-xl border border-[#E5E7EB] cursor-pointer hover:bg-gray-50 transition-colors text-[#374151]"
                      >
                        Edit photo
                      </label>
                    </div>
                  )}
                </div>
                
                <h2 className="text-[24px] font-bold text-black mb-2">{userData.name}</h2>
                <button 
                  className="px-8 py-2.5 bg-[#005CF9] text-white rounded-[20px] text-base font-medium mb-4 hover:bg-[#004ACC] transition-colors"
                  onClick={handleEdit}
                >
                  {isEditing ? 'Save' : 'Edit'}
                </button>

                <div className="w-full space-y-4">
                  <div className="flex justify-between items-center py-3 px-4 bg-[#F9FAFB] rounded-2xl">
                    <span className="text-[#374151] font-medium">Username</span>
                    {isEditing ? (
                      <div className="flex flex-col items-end">
                        <input
                          type="text"
                          value={tempUserData.username}
                          onChange={(e) => setTempUserData({...tempUserData, username: e.target.value})}
                          className={`text-right text-[#374151] bg-white rounded-xl px-4 py-2 outline-none border ${
                            tempUserData.username.length < 6 ? 'border-red-500' : 'border-[#E5E7EB]'
                          } focus:border-[#005CF9] transition-colors w-[160px]`}
                          placeholder="Enter username"
                        />
                        {tempUserData.username.length < 6 && (
                          <span className="text-red-500 text-xs mt-1">Minimum 6 characters</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-[#374151]">{userData.username}</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center py-3 px-4 bg-[#F9FAFB] rounded-2xl">
                    <span className="text-[#374151] font-medium">Age</span>
                    {isEditing ? (
                      <input
                        type="text"
                        inputMode="numeric"
                        value={userData.age}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          
                          // Дозволяємо полю бути пустим
                          if (value === '') {
                            setUserData({...userData, age: ''});
                            return;
                          }

                          // Перевіряємо діапазон тільки якщо є значення
                          const numValue = parseInt(value);
                          if (numValue >= 0 && numValue <= 80) {
                            setUserData({...userData, age: value});
                          }
                        }}
                        onBlur={() => {
                          // При втраті фокусу перевіряємо чи значення в правильному діапазоні
                          const numValue = parseInt(userData.age);
                          if (!numValue || numValue < 14) {
                            setUserData({...userData, age: '14'});
                          } else if (numValue > 80) {
                            setUserData({...userData, age: '80'});
                          }
                        }}
                        className="text-right text-[#374151] bg-white rounded-2xl px-4 py-2 outline-none border border-[#E5E7EB] focus:border-[#005CF9] w-[100px]"
                      />
                    ) : (
                      <span className="text-[#374151]">{userData.age} y.o</span>
                    )}
                  </div>

                  <div className="flex justify-between items-center py-3 px-4 bg-[#F9FAFB] rounded-2xl">
                    <span className="text-[#374151] font-medium">Gender</span>
                    {isEditing ? (
                      <div className="relative">
                        <button
                          onClick={() => setOpenSelect(openSelect === 'gender' ? null : 'gender')}
                          className="text-right text-[#374151] bg-white rounded-xl px-4 py-2 outline-none border border-[#E5E7EB] focus:border-[#005CF9] w-[120px] flex items-center justify-between"
                        >
                          <span>{userData.gender}</span>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4.5L6 7.5L9 4.5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        
                        {openSelect === 'gender' && (
                          <div className="absolute right-0 top-[calc(100%+4px)] w-[120px] bg-white rounded-xl border border-[#E5E7EB] shadow-lg overflow-hidden z-20">
                            <button
                              onClick={() => {
                                setUserData({...userData, gender: 'Male'});
                                setOpenSelect(null);
                              }}
                              className={`w-full text-right px-4 py-2 text-[#374151] hover:bg-[#ECF5FF] hover:text-[#374151] transition-colors ${userData.gender === 'Male' ? 'bg-[#ECF5FF] text-[#374151]' : ''}`}
                            >
                              Male
                            </button>
                            <button
                              onClick={() => {
                                setUserData({...userData, gender: 'Female'});
                                setOpenSelect(null);
                              }}
                              className={`w-full text-right px-4 py-2 text-[#374151] hover:bg-[#ECF5FF] hover:text-[#374151] transition-colors ${userData.gender === 'Female' ? 'bg-[#ECF5FF] text-[#374151]' : ''}`}
                            >
                              Female
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-[#374151]">{userData.gender}</span>
                    )}
                  </div>

                  <div className="flex justify-between items-center py-3 px-4 bg-[#F9FAFB] rounded-2xl">
                    <span className="text-[#374151] font-medium">Language</span>
                    {isEditing ? (
                      <div className="relative">
                        <button
                          onClick={() => setOpenSelect(openSelect === 'language' ? null : 'language')}
                          className="text-right text-[#374151] bg-white rounded-xl px-4 py-2 outline-none border border-[#E5E7EB] focus:border-[#005CF9] w-[100px] flex items-center justify-between"
                        >
                          <span>{userData.language}</span>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4.5L6 7.5L9 4.5" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        
                        {openSelect === 'language' && (
                          <div className="absolute right-0 top-[calc(100%+4px)] w-[100px] bg-white rounded-xl border border-[#E5E7EB] shadow-lg overflow-hidden z-20">
                            <button
                              onClick={() => {
                                setUserData({...userData, language: 'UKR'});
                                setOpenSelect(null);
                              }}
                              className={`w-full text-right px-4 py-2 text-[#374151] hover:bg-[#ECF5FF] hover:text-[#374151] transition-colors ${userData.language === 'UKR' ? 'bg-[#ECF5FF] text-[#374151]' : ''}`}
                            >
                              UKR
                            </button>
                            <button
                              onClick={() => {
                                setUserData({...userData, language: 'EN'});
                                setOpenSelect(null);
                              }}
                              className={`w-full text-right px-4 py-2 text-[#374151] hover:bg-[#ECF5FF] hover:text-[#374151] transition-colors ${userData.language === 'EN' ? 'bg-[#ECF5FF] text-[#374151]' : ''}`}
                            >
                              EN
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-[#374151]">{userData.language}</span>
                    )}
                  </div>
                </div>

                <div className="mt-8 -mx-6">
                  <h3 className="text-black text-xl font-bold mb-2 px-6">About you</h3>
                  {isEditing ? (
                    <textarea
                      value={tempUserData.about}
                      onChange={(e) => setTempUserData({...tempUserData, about: e.target.value})}
                      className="w-full text-[#6B7280] border border-[#E8E8E8] rounded-2xl p-4 h-[140px] outline-none focus:border-[#005CF9] transition-colors resize-none"
                      placeholder="Tell about yourself..."
                    />
                  ) : (
                    <p className="text-[#6B7280] border border-[#E8E8E8] rounded-2xl p-4 h-[140px] overflow-y-auto mx-6">
                      {userData.about}
                    </p>
                  )}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-[#F9FAFB] rounded-[24px] p-4">
                    <span className="text-[#6B7280] block">Total talk time</span>
                    <span className="text-black text-xl font-medium">0m</span>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-[24px] p-4">
                    <span className="text-[#6B7280] block">Number of conversations</span>
                    <span className="text-black text-xl font-medium">0</span>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-[24px] p-4">
                    <span className="text-[#6B7280] block">Average number of minutes</span>
                    <span className="text-black text-xl font-medium">0m</span>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-[24px] p-4">
                    <span className="text-[#6B7280] block">Online</span>
                    <span className="text-black text-xl font-medium">0m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <div className="max-w-[520px] mx-auto">
            <BottomNav />
          </div>
        </div>
      </div>

      <style jsx>{`
        select option {
          background-color: white;
          color: #374151;
          padding: 12px;
          font-size: 14px;
        }
        
        select option:hover,
        select option:focus,
        select option:active,
        select option:checked {
          background: #005CF9;
          color: white;
        }
        
        select:focus {
          box-shadow: 0 0 0 2px rgba(0, 92, 249, 0.1);
        }
      `}</style>
    </Layout>
  )
}

export default Profile 