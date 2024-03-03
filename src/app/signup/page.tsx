"use client";
import { useState } from 'react';
import { ArrowLongRightIcon, AtSymbolIcon, UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import useTheme from "@/app/components/utils/theme/updateTheme";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [theme, setTheme] = useTheme();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen font-inter">
            <div className="w-[450px] p-6">
                <h2 className="text-black dark:text-white text-left text-3xl font-semibold mb-2">Sign Up</h2>
                <p className="text-gray-400 text-left text-sm mb-4">
                    Already have an account?{' '}
                    <a className="underline text-blue-500" href='https://google.com/'>Login</a>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-[10px]">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            className="w-full px-6 py-[14px] pl-12 rounded-lg filter drop-shadow-md text-black text-sm"
                        />
                        <AtSymbolIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                    <div className="relative mb-[10px]">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="off"
                            className="w-full px-6 py-[14px] pl-12 rounded-lg filter drop-shadow-md text-black text-sm"
                        />
                        <UserCircleIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                    <div className="relative mb-[10px]">
                        <input
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                            className="w-full px-6 py-[14px] pl-12 rounded-lg filter drop-shadow-md text-black text-sm"
                        />
                        <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                    <div className="relative mb-[10px]">
                        <input
                            type="text"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                            className="w-full px-6 py-[14px] pl-12 rounded-lg filter drop-shadow-md text-black text-sm"
                        />
                        <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center bg-blue-500 filter drop-shadow-md text-white px-4 py-3 rounded-lg mb-[10px] cursor-pointer text-base">
                        Signup <ArrowLongRightIcon className="ml-4 w-6 h-6" />
                    </button>
                </form>
            </div>
        </div>
    );
}
