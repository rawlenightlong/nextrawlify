import {Link} from "next/link"
import undraw from "../public/undraw.png"

const authLogin = "https://accounts.spotify.com/authorize?client_id=0f1031b22d464246bd89f46eea042924&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-follow-modify%20user-follow-modify"



export default function Login(){
    return (<>
 
    <div  className="">

        <header id="header">
            <h1 className="text-white p-5 text-center h-fit">Premium Spotify account required. Don't have one? Sign up <a href="https://www.spotify.com/us/premium/?utm_source=us-en_brand_contextual_text&utm_medium=paidsearch&utm_campaign=alwayson_ucanz_us_performancemarketing_highsubintent_brand+contextual+text+exact+us-en+google&gclid=Cj0KCQjwt_qgBhDFARIsABcDjOf3FYeZLbCNi5ck9XxOeXjvH1s3GzfBQI2WLKhcjWBnb5dMB9K7jzYaAgPfEALw_wcB&gclsrc=aw.ds" target="_blank">here</a>!</h1>
        </header>

        <div className="items-center justify-center text-center">
            <img src="https://i.imgur.com/DOzqyo9.png" alt="logo" className="rounded m-12 items-center justify-center text-center mx-auto" />

            {/* <button className="text-white font-bold py-2 px-4 rounded" id="login">
                <a href={authLogin} className="text-white justify-center items-center m-12">Login with Spotify</a>
            </button> */}

            <a href={authLogin}>
                <button id="login" className="text-white font-bold py-2 px-4 rounded">Login with Spotify</button>
            </a>
        </div>

    </div>
    
    </>)
}

