import '../App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitBtnText, setSubmitBtnText] = useState("Generate a Magic Link!");
    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search)
    const projectID = queryParameters.get("projectID")
    const redirectURL = queryParameters.get("redirectURL")
    const scope = queryParameters.get("scope")
    const [cookies, setCookie, removeCookie] = useCookies(["authToken"])


    if (!projectID || !redirectURL || !scope){
        alert("Missing one of these: projectId, redirectUrl, and scope")
    } 

    useEffect(() => {
        if (cookies.authToken && cookies.authToken.length != 0) {
            const authToken = cookies.authToken
            navigate("/authorization", { state: {
                authToken,
                projectID,
                redirectURL,
                scope
            }})
        }
    })
    

    return (
        
        <div className="App flex flex-col items-center">
        <div
                class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center mt-20"
            >
                <h1 class="text-green-600 text-4xl font-bold">
                    HKID OAuth
                </h1>

                <form action="" class="flex flex-col" onSubmit={async (e) => {
                    e.preventDefault();
                    const data = {email, projectID, redirectURL, scope}
                    const response = await fetch("https://hkid-f3672587ec5b.herokuapp.com/api/users/login", {
                        method: "POST", // *GET, POST, PUT, DELETE, etc.
                        mode: "cors", // no-cors, *cors, same-origin
                        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                        headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        redirect: "follow", // manual, *follow, error
                        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: JSON.stringify(data), // body data type must match "Content-Type" header
                    }).then((response) => {
                        if (response.status === 200) {
                            setSubmitBtnText("Magic Link Sent to your Email!")

                        }
                    })
                }}>
                    <label
                        for="email"
                        class="block mt-4 mb-2 text-left text-gray-700 font-bold"
                    >Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="first"
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value)
                        }}
                        placeholder="Enter your Email"
                        class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                        required
                    />

                    {/* <label
                        for="password"
                        class="block mb-2 text-left text-gray-700 font-bold"
                    >Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                        setPassword(e.target.value)
                        }}
                        placeholder="Enter your Password"
                        class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                        required
                    /> */}

                    <div class="flex justify-center items-center">
                        <button
                            id="submitBtn"
                            type="submit"
                            disabled={submitBtnText === "Magic Link Sent to your Email!"}
                            class="bg-green-600 text-white py-3 px-6 rounded -md cursor-pointer transition-colors duration-300 hover:bg-green-500"
                        >
                            {submitBtnText}
                        </button>
                    </div>
                </form>
                <p class="mt-4">Not registered?
                    <a href="#" class="text-blue-500 hover:underline"> Create an
                        account</a>
                </p>
            </div>
        </div>
    )
    
}
export default Login