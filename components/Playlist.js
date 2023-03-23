import axios from 'axios'
import { useContext } from 'react'
import { stateContext } from '@/pages'
import {BsFillPlayFill, BsPauseFill, BsTrash, BsPencil} from "react-icons/bs"


export default function Playlist({playlist, addSong}){

    async function deleteSong(song){
        await axios.delete(`https://rawlifyplaylist.onrender.com/spotsongs/${song._id}`)
    }

    const {setPlayingTrack, setSong, showEdit, currentUser, setShowEdit, setSongInfo} = useContext(stateContext)

return (<>


<div className="bg-gray-500 overflow-auto scrollbar-hide">
    <button onClick={addSong} className="bg-yellow-200">Add Song to Playlist</button>
    <h1>Playlist</h1>
    <div>
        {playlist.map((song, index) => {
            if (currentUser === song.username) {

                return (<>
                
                    <div key={index} id="songinfo" className="bg-orange-400 my-2 px-2"> 
                        <div key={song._id}>
                            <h4 key={song.title} className="">{song.title}</h4>
                            <p key={song.artist}>{song.artist}</p>
                        </div>
                        <div id="buttons" className="">
                            <button onClick={() => {
                            setSong(song)
                            setPlayingTrack(null)
                                }} className="mx-1 text-xl">
                                    <BsFillPlayFill/>
                            </button>

                            <button onClick={() => {deleteSong(song)}} className="mx-2 text-xl"><BsTrash/></button>

                            <button onClick={() => {
                                setSongInfo(song)
                                    if (showEdit === true){
                                        setShowEdit(false)
                                    }else {
                                        setShowEdit(true)
                                    }
                                }} className="mx-3 text-xl"><BsPencil/>
                            </button>
                        </div>
                    </div>

                </>)
            }
        })}
    </div>
</div>


</>)
}