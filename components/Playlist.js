import axios from 'axios'
import { useContext } from 'react'
import { stateContext } from '@/pages'
import {BsFillPlayFill, BsTrash, BsPencil} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"


export default function Playlist({playlist, addSong, nextSong, setNextSong}){

    async function deleteSong(song){
        await axios.delete(`https://rawlifyplaylist.onrender.com/spotsongs/${song._id}`)
    }

    const {setPlayingTrack, setSong, showEdit, currentUser, setShowEdit, setSongInfo, setPlay, play} = useContext(stateContext)

return (<>


<div className="bg-black text-center justify-center items-center w-96 " id="playlist">

    <header className="px-5" id="playlistheader">
        
        <h1 className="text-center text-white pt-2">Playlist</h1>
        <button id="addbutton" onClick={addSong} className="bg-blue-300 my-4 w-32 rounded-full">Add Song</button>
    </header>

    <hr className=" w-36 text-center justify-items-center justify-center mx-auto"></hr>

    <div className="text-center justify-center items-center h-fit overflow-auto" id="actualplaylist">
        {playlist.map((song, index) => {
            if (currentUser === song.username) {

                return (<>
                
                    <div key={index} id="songinfo" className="bg-black my-3 mx-auto px-2 py-1 text-center w-52 justify-center items-center rounded-md border-1 border-white"> 
                        <div key={song._id}>
                            <h4 key={song.title} className="text-gray-300" id="songtitle">{song.title}</h4>
                            <p key={song.artist} className="text-gray-400" id="songartist">{song.artist}</p>
                        </div>
                        <div id="buttons" className=" flex justify-center items-center ">
                            <button onClick={() => {
                                setPlayingTrack(null)
                                setPlay(false)
                                setNextSong([])
                                setSong(song)
                                

                                }} className=" mx-3 text-xl text-green-500" id='playbutton'>
                                    <BsFillPlayFill/>
                            </button>

                            <button onClick={() => {deleteSong(song)}} className="  text-xl text-red-600" id="trashcan"><BsTrash/></button>

                            <button onClick={() => {
                                setSongInfo(song)
                                    if (showEdit === true){
                                        setShowEdit(false)
                                    }else {
                                        setShowEdit(true)
                                    }
                                }} className=" mx-3 text-xl text-yellow-600" id="pencil"><BsPencil/>
                            </button>
                            <button onClick={() => {
                                setNextSong([...nextSong, song.url])
                                console.log(nextSong)
                                setPlayingTrack(null)
                                setSong(null)
                                alert(`${song.title} added to queue!`)
                                

                                }} className="text-blue-400 hover:text-white">
                                <AiOutlinePlus/>
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