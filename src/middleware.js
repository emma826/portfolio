import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
    const cookieStore = await cookies();
    const isAdmin = await cookieStore.get("fiuzar_admin");

    if (!isAdmin) {
        // Redirect to login if not authenticated
        return NextResponse.redirect(new URL("/login", request.url));
    }
    // Allow access if cookie is present
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"]
};
