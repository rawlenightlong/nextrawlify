export default function TrackSearchResult({track, chooseTrack}){

    function handlePlay(){
        chooseTrack(track)
}


    return (<>
    
    
    <div style={{cursor: "pointer"}} onClick={handlePlay} className="text-white" id="searchresults">
        <img src={track.albumUrl} style={{height: "74px", width: "74px", margin: "3px", padding: "2px"}} alt='album art'/>
        <div style={{padding: "5px"}}> 
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