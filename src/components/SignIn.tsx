import React from "react";
import { provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.config";

export const SignIn = () => {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    }

    return (
        <div>
            <button>Sign In with Google</button>
        </div>
    )
};