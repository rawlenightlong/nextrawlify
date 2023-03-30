import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {AiOutlineClose} from "react-icons/ai"

export default function ShowEditPage({setShowEdit, songInfo}) {

    const [updateTitle, setUpdateTitle] = useState(songInfo.title)
    const [updateArtist, setUpdateArtist] = useState(songInfo.artist)

    function updateSong(songInfo){
        axios.put(`https://rawlifyplaylist.onrender.com/spotsongs/${songInfo._id}`, {
            title: updateTitle,
            artist: updateArtist
        })
    }
    return (<>
    

    <div className="text-white" id="showpage">
        <div className="flex" id="overlay" >    
                    <div id="modal">
    
                    <button 
                        className="mb-4 text-2xl text-red-600 hover:text-white" 
                        id="exitshow" 
                        onClick={() => {
                            setShowEdit(false)
                                }}>
                         <AiOutlineClose/>
                    </button>
            
                <h5>Song Info</h5>
                    <div>
                    <form>
                    Artist : <input className="my-2 px-2 " type='text' id="showartist" name="artist" defaultValue={updateArtist} required onChange={(e) => {setUpdateArtist(e.target.value)}}></input><br></br>
                    Title : <input className="my-2 px-2 "type='text' id="showtitle"name="artist" defaultValue={updateTitle} required onChange={(e) => {setUpdateTitle(e.target.value)}}></input><br></br>
                    </form>
                    </div>
                <button 
                id="editbutton"
                className="bg-blue-300 my-4 rounded-full text-black"
                onClick={() => {
                    updateSong(songInfo)
                    setShowEdit(false)
                }}
                >Update Info</button>
                </div></div>

        
    </div>
    
    
    </>)

}
