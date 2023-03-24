import {Link} from "next/link"

const authLogin = "https://accounts.spotify.com/authorize?client_id=0f1031b22d464246bd89f46eea042924&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-follow-modify%20user-follow-modify"



export default function Login(){
    return (<>
    <div style={{minHeight: "100vh"}}>
        <button><a href={authLogin} className="text-white">Login with Spotify</a></button>
    </div>
    
    </>)
}

