import '../App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Authorization = () => {
    const location = useLocation();
    const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

    const queryParameters = new URLSearchParams(window.location.search)
    const [projectID, setProjectID] = useState(queryParameters.get("projectID"));
    const [redirectURL, setRedirectURL] = useState(queryParameters.get("redirectURL"));
    const [scope, setScope] = useState(queryParameters.get("scope"));
    const [authToken, setAuthToken] = useState(queryParameters.get("token"))

    

    useEffect(() => {
        if (!authToken || authToken.length === 0) {
            setProjectID(location.state.projectID);
            setRedirectURL(location.state.redirectURL);
            setScope(location.state.scope);
            setAuthToken(location.state.authToken);
        } else{
            setCookie("authToken", authToken, { path: "/" });
        }
        
    })
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col  bg-gray-100 rounded-lg shadow-md p-10 transition-transform w-1/3 mt-20 '>
                <div className='flex flex-col items-center justify-center text-base' >
                    <h1 className='text-gray-500'>An external application</h1>
                    <h1 className='font-bold text-xl'>{projectID && projectID.split(".")[0].toUpperCase()}</h1>
                    <h1 className='text-gray-500'>wants to access your HKID account</h1>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className='text-sm items-start space-y-2'>
                    <h1 className=''>THIS WILL ALLOW THE DEVELOPERS OF {projectID && projectID.split(".")[0].toUpperCase()} TO:</h1>
                    <section className='flex space-x-2'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" heights="20px" viewBox="3 3 16 16">
                        <g transform="matrix(1.99997 0 0 1.99997-10.994-2071.68)" fill="#da4453">
<rect y="1037.36" x="7" height="8" width="8" fill="#32c671" rx="4"/>
<path d="m123.86 12.966l-11.08-11.08c-1.52-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-53.45 53.53-23.953-24.04c-1.521-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-11.08 11.08c-1.521 1.521-2.281 3.368-2.281 5.541 0 2.172.76 4.02 2.281 5.54l29.493 29.493 11.08 11.08c1.52 1.521 3.367 2.281 5.54 2.281 2.172 0 4.02-.761 5.54-2.281l11.08-11.08 58.986-58.986c1.52-1.521 2.281-3.368 2.281-5.541.0001-2.172-.761-4.02-2.281-5.54" fill="#fff" transform="matrix(.0436 0 0 .0436 8.177 1039.72)" stroke="none" stroke-width="9.512"/>
</g>
</svg><h3>Access your name, hkid</h3>
                    </section>
                    <section className='flex space-x-2'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" heights="20px" viewBox="3 3 16 16">
                        <g transform="matrix(1.99997 0 0 1.99997-10.994-2071.68)" fill="#da4453">
<rect y="1037.36" x="7" height="8" width="8" fill="#32c671" rx="4"/>
<path d="m123.86 12.966l-11.08-11.08c-1.52-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-53.45 53.53-23.953-24.04c-1.521-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-11.08 11.08c-1.521 1.521-2.281 3.368-2.281 5.541 0 2.172.76 4.02 2.281 5.54l29.493 29.493 11.08 11.08c1.52 1.521 3.367 2.281 5.54 2.281 2.172 0 4.02-.761 5.54-2.281l11.08-11.08 58.986-58.986c1.52-1.521 2.281-3.368 2.281-5.541.0001-2.172-.761-4.02-2.281-5.54" fill="#fff" transform="matrix(.0436 0 0 .0436 8.177 1039.72)" stroke="none" stroke-width="9.512"/>
</g>
</svg><h3> Access your email address</h3>
                    </section>
                    <section className='flex space-x-2'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" heights="20px" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="3 3 16 16"><defs><linearGradient gradientUnits="userSpaceOnUse" y2="-2.623" x2="0" y1="986.67"><stop stop-color="#ffce3b"/><stop offset="1" stop-color="#ffd762"/></linearGradient><linearGradient id="0" gradientUnits="userSpaceOnUse" y1="986.67" x2="0" y2="-2.623"><stop stop-color="#ffce3b"/><stop offset="1" stop-color="#fef4ab"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" x2="1" x1="0" xlinkHref="#0"/></defs><g transform="matrix(2 0 0 2-11-2071.72)"><path transform="translate(7 1037.36)" d="m4 0c-2.216 0-4 1.784-4 4 0 2.216 1.784 4 4 4 2.216 0 4-1.784 4-4 0-2.216-1.784-4-4-4" fill="#da4453"/><path d="m11.906 1041.46l.99-.99c.063-.062.094-.139.094-.229 0-.09-.031-.166-.094-.229l-.458-.458c-.063-.062-.139-.094-.229-.094-.09 0-.166.031-.229.094l-.99.99-.99-.99c-.063-.062-.139-.094-.229-.094-.09 0-.166.031-.229.094l-.458.458c-.063.063-.094.139-.094.229 0 .09.031.166.094.229l.99.99-.99.99c-.063.062-.094.139-.094.229 0 .09.031.166.094.229l.458.458c.063.063.139.094.229.094.09 0 .166-.031.229-.094l.99-.99.99.99c.063.063.139.094.229.094.09 0 .166-.031.229-.094l.458-.458c.063-.062.094-.139.094-.229 0-.09-.031-.166-.094-.229l-.99-.99" fill="#fff"/></g></svg><h3> Access your password or record a new mixtape</h3>
                    </section>
                    
                    
                </div>
                <br/>
                <hr/>
                <br/>
                <div className='text-xs items-start space-y-2'>
                    <h5>Once you authorize, you will be redirected outside of HKID to: {redirectURL}</h5>
                    <h5>The developer of {projectID}'s privacy policy and terms of service apply to this application.</h5>
                </div>
                <br/>
        
                <br/>
                <div className='flex space-x-16 justify-between'>
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