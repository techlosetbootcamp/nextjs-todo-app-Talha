"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
    // const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");
const {token} = useParams()
    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token });
            setVerified(true);
        } catch (error: any) {
            setError(error.message as string);
            console.log(error.response?.data);
        }
    }

  

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Verify Email</h1>
            {/* <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2> */}

            {verified ? (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <Link href="/sign-in">
                        <span className="text-blue-500">Login</span>
                    </Link>
                </div>
            ) : error ? (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">{error}</h2>
                </div>
            ) : (
                <button 
                    onClick={verifyUserEmail}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Verify Email
                </button>
            )}
        </div>
    );
}
