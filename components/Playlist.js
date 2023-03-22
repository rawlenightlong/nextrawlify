import axios from 'axios'
import { useContext } from 'react'
import { stateContext } from '@/pages'







export default function Playlist({playlist, addSong}){

    console.log(playlist)

    async function deleteSong(song){
        await axios.delete(`https://rawlifyplaylist.onrender.com/spotsongs/${song._id}`)
    }

    const {setPlayingTrack, setSong, showEdit, currentUser, setShowEdit, setSongInfo} = useContext(stateContext)

return (<>


<div>
    <button onClick={addSong}>Add Song to Playlist</button>
    <h1>Playlist</h1>
    <div>
        {playlist.map((song, index) => {
            if (currentUser === song.username) {

                return (<>
                
                    <div key={index}> 
                        <div key={song._id}>
                            <h4 key={song.title}>{song.title}</h4>
                            <p key={song.artist}>{song.artist}</p>
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