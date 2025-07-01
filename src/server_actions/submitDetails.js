"use server"

import { cookies } from "next/headers";

export async function adminLogin(email, password) {

    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    if (!trimmedEmail || !trimmedPassword) {
        return { success: false, message: "Empty fields, please fill in the blank spaces" }
    }

    const admin_email = process.env.ADMIN_EMAIL
    const admin_password = process.env.ADMIN_PASSWORD

    if (trimmedEmail === admin_email && trimmedPassword === admin_password) {
        'use strict';
        const cookieStore = await cookies();
        await cookieStore.set("fiuzar_admin", "1", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 // 1 day
        });
        return { success: true, message: "Login successful, redirecting" }
    }
    else {
        return { success: false, message: "Invalid email and password" }
    }
}