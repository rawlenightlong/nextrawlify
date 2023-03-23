export default function TrackSearchResult({track, chooseTrack}){

    function handlePlay(){
        chooseTrack(track)
}


    return (<>
    
    
    <div style={{cursor: "pointer"}} onClick={handlePlay} className="">
        <img src={track.albumUrl} style={{height: "64px", width: "64px", margin: "3px"}} alt='album art'/>
        <div>
            <div>
                {track.title}
            </div>
            <div>
                {track.artist}
            </div>
        </div>

    </div>
    
    
    </>) 
}