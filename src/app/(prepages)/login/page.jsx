"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { adminLogin } from "@/server_actions/submitDetails"

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    async function loginProcess() {
        const {success, message} = await adminLogin(email, password)

        if (success) {
            setIsSuccess(true)
            setMessage(message)
            router.push("/admin")
        }
        else {
            setIsSuccess(false)
            setMessage(message)

            setTimeout(() => {
                setMessage("")
            }, 3000);
        }
    }

    return (
        <div className="container mx-auto flex flex-col min-h-[80vh] justify-center">
            <Card className={`p-3 w-96 mx-auto`}>
                <h1 className="text-center text-3xl text-green-800 font-extrabold mb-4 mt-8">
                    Login
                </h1>

                {message && (
                    <Alert variant={isSuccess ? "success" : "destructive"}>
                        <AlertTitle>{isSuccess ? "Success!" : "Error!"}</AlertTitle>
                        <AlertDescription>
                            {message}
                        </AlertDescription>
                    </Alert>
                )}

                <span className="font-bold px-2">Email</span>
                <Input className={`-mt-4 py-6`} type="email" value={email} placeholder="Enter your email" onChange = {(e) => setEmail(e.target.value)} />
                
                <span className="font-bold px-2">Password</span>
                <Input className={`mb-2 -mt-4 py-6`} type="password" value={password} placeholder="Enter your password" onChange = {(e) => setPassword(e.target.value)} />
            
                <Button onClick={loginProcess} className={`bg-green-800 text-white py-6 mx-auto w-full max-w-60 hover:bg-green-700`}>Submit</Button>
            </Card>
        </div>
    )
}