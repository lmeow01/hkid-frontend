import '../App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Authorization = () => {
    const location = useLocation();
    const {projectID, redirectURL, scope, authToken} = location.state
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md p-10 transition-transform w-96 text-center mt-20'>
                <div>
                    <h1>An external application</h1>
                    <h1>{projectID}</h1>
                    <h1>wants to access your HKID account</h1>
                </div>
                <hr/>
                <div>
                    <h3>THIS WILL ALLOW THE DEVELOPERS OF {projectID} TO:</h3>
                    <h3>Access your name, hkid</h3>
                    <h3>Access your email address</h3>
                    <h3>Access your password or record a new mixtape</h3>
                </div>
                <hr />
                <div>
                    <h5>Once you authorize, you will be redirected outside of HKID to: {redirectURL}</h5>
                    <h5>The developer of {projectID}'s privacy policy and terms of service apply to this application.</h5>
                </div>
                
                <div className='flex space-x-14'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={async () => {
                            const response = await fetch(`https://hkid-f3672587ec5b.herokuapp.com/api/oauth/code?projectID=${projectID}&redirectURL=${redirectURL}&scope=${scope}`, {
                                method: 'GET',
                                headers: {
                                    'x-auth': authToken
                                }
                            }
                            ).then((response) => {
                                return response.json()
                            }).then((data) => {
                                const redirectURLFromServer = data.redirectURL
                                if (!redirectURLFromServer) {
                                    return alert("Project info of the client application provided is invalid")
                                }
                                window.location.href = redirectURLFromServer
                            }).catch((err) => {
                                alert(err)
                            });
                        }}>
                        Authorize
                    </button>
                </div>
            </div>         
        </div>
        
    )
}

export default Authorization