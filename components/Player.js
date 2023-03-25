import SpotifyPlayer from 'react-spotify-web-playback'
import { useEffect } from 'react'

export default function Player({accessToken, trackUri, songUrl, setPlay, play, playingTrack, song}){
    
    useEffect(() => {
        setPlay(true)
    }, [song, playingTrack])

    if (!accessToken) return null
    
    return (<>
    
    <SpotifyPlayer
    token={accessToken}
    showSaveIcon
    callback={state => {
        if (!state.isPlaying) setPlay(false)
    }}
    play={play}
    styles={{
        bgColor: "#57baff",
        trackArtistColor: "white",
        trackNameColor: "white",
        loaderColor: "white",
        activeColor: "orange",
        sliderColor: "white",
        color: "white",
        sliderHandleColor: "purple",
        sliderTrackColor: "lightblue"
    }}
    uris={trackUri ? [trackUri] : [songUrl]}
    />
    
    </>)
}