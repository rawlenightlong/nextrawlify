import React from 'react'
import { useState } from 'react'
import axios from 'axios'

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
    
    
    <div className="" id="showpage">
        <button onClick={() => {
            setShowEdit(false)
                }}>
            X
        </button>

    <h5>Song Info</h5>
        <div>
        <form>
        Artist : <input className="my-2 px-2 w-64" type='text' id="showartist" name="artist" defaultValue={updateArtist} required onChange={(e) => {setUpdateArtist(e.target.value)}}></input><br></br>
        Title : <input className="my-2 px-2 w-64 "type='text' id="showtitle"name="artist" defaultValue={updateTitle} required onChange={(e) => {setUpdateTitle(e.target.value)}}></input><br></br>
        </form>
        </div>
    <button
    onClick={() => {
        updateSong(songInfo)
        setShowEdit(false)
    }}
    >Update Info</button>
    </div>
    
    
    </>)

}
