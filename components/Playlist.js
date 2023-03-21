import axios from 'axios'
import { useContext } from 'react'
import { stateContext } from '@/pages'


async function deleteSong(song){
    await axios.delete(`https://rawlifyplaylist.onrender.com/spotsongs/${song._id}`)
}



export default function Playlist({playlist, addSong}){

    const {setPlayingTrack, setSong, showEdit, currentUser, setShowEdit, setSongInfo} = useContext(stateContext)

return (<>


<div>
    <button onClick={addSong}>Add Song to Playlist</button>
    <h1>Playlist</h1>
    <div>
        {playlist.map((song) => {
            if (currentUser === song.username) {

                return (<>
                
                    <div key={song._id}> 
                        <div>
                            <h4>{song.title}</h4>
                            <h6>{song.artist}</h6>
                        </div>
                    <button onClick={() => {
                        setSong(song)
                        setPlayingTrack(null)
                    }}>Play</button>
                    <button onClick={() => {deleteSong(song)}}>Delete</button>
                    <button onClick={() => {
                        setSongInfo(song)
                        if (showEdit === true){
                            setShowEdit(false)
                        }else {
                            setShowEdit(true)
                        }
                    }}>Show/Edit</button>
                    </div>

                </>)
            }
        })}
    </div>
</div>


</>)
}