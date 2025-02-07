import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { google } from "./redux/Auth/slice"; // Оновлений шлях до slice

interface RedirectProps {
    // Можна додати пропси якщо потрібно
}

export const Redirect: React.FC<RedirectProps> = () => {
    // Hooks
    const { accessToken } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const handleGoogleAuth = async () => {
            if (accessToken) {
                try {
                    await dispatch(google(accessToken));
                    navigate("/mainpage");
                } catch (error) {
                    console.error("Google token processing error:", error);
                    // TODO: Add error notification for user
                } finally {
                    setIsLoading(false);
                }
            }
        };

        handleGoogleAuth();
    }, [accessToken, dispatch, navigate]);

    // Loading state
    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-[#0A0A16]">
                <div className="text-white/60 text-lg">
                    Redirecting...
                </div>
            </div>
        );
    }

    // Default state
    return (
        <div className="h-screen flex items-center justify-center bg-[#0A0A16]">
            <div className="text-white">
                Redirect
            </div>
        </div>
    );
};

export default Redirect;