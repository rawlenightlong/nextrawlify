import React from 'react'
import SpotifyWebApi from "spotify-web-api-node"
import Auth from './Auth'
import {useEffect, useState, useContext} from 'react'
import { stateContext } from '@/pages'
import axios from 'axios'
import Playlist from './Playlist'
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
import ShowEditPage from './ShowEditPage'
import {BsPlayFill} from 'react-icons/bs'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
})



export default function Dashboard({code}) {
    // Receieve the access token from Spotify
    const accessToken = Auth(code)

    // Reset access token with reset token 
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    // Destructure state variables / functions from Context Provider
    const {currentUser, setCurrentUser, setPlayingTrack, setSearch, playingTrack, search, searchResults, setSearchResults, song, setSong, play, setPlay, songInfo, showEdit, setShowEdit} = useContext(stateContext)
 
    // Fetch current user to render current user's playlist
    // async function fetchUser(){
    //     if (!accessToken) return
    //     let response = await fetch("https://api.spotify.com/v1/me", {
    //         headers: {"Authorization": `Bearer ${accessToken}`}
    //     })
    //     let data = await response.json()
    //     setCurrentUser(data.display_name)
    //     console.log(currentUser)
    // }

    // Fetch current user whenever the access token or currentUser state changes
    useEffect(() => {
        async function fetchUser(){
            if (!accessToken) return
            let response = await fetch("https://api.spotify.com/v1/me", {
                headers: {"Authorization": `Bearer ${accessToken}`}
            })
            let data = await response.json()
            setCurrentUser(data.display_name)
            console.log(currentUser)
        }
        fetchUser()
        
    }, [accessToken, currentUser])

    // Set playingTrack to empty object at page load
    // useEffect(() => {
    //     setPlayingTrack({
    //         username: "",
    //         title: "",
    //         artist: "",
    //         url: ""
    //     })
    // }, [])

    // Set the playingTrack and clear the search
    function chooseTrack(track){
        setPlayingTrack(track)
        setSong(null)
        setNextSong([])
        setSearch("")
    }

    const [nextSong, setNextSong] = useState([])

    // Song search
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false

        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })

        return () => cancel = true
    }, [search, accessToken])

    // CREATE FUNCTION
    async function addSong(){
        axios.post("https://rawlifyplaylist.onrender.com/spotsongs", {
            username: currentUser,
            title: playingTrack.title, 
            artist: playingTrack.artist,
            url: playingTrack.uri
        })
        alert("Song Added!")
    }

    // Render player if a song is chosen
    const renderPlayer = () => {
        return <div><Player accessToken={accessToken} trackUri={playingTrack?.uri} songUrl={song?.url ? song.url : nextSong} play={play} setPlay={setPlay} song={song} playingTrack={playingTrack} nextSong={nextSong}/></div>
    }

    // Toggle to show edit page
    const showEditPage = () => {
        return <ShowEditPage setShowEdit={setShowEdit} songInfo={songInfo}/>
    }

    // Toggle to show hide page
    const hideEditPage = () => {
        return null
    }

    // initiate playlist state
    const [playlist, setPlaylist] = useState(null)

    // Load playlist
    useEffect(() => {
        axios("https://rawlifyplaylist.onrender.com/spotsongs")
        .then(response => {
            setPlaylist(response.data)
        })
    }, [playlist])

    // Render "loading..." screen
    function playlistLoading(){
        return <div className="text-white">Loading...</div>
    }


  return (
    
    <div id="page" className="">
        <header id='header' className="flex justify-around items-center text-white ">
            <div id="logout"><a href="http://accounts.spotify.com/logout">Logout</a></div>
            <h1>Welcome to Rawlify</h1>
            <p>Logged In As: {currentUser}</p>
            
        </header>
        <hr id="pageline" className="m-3"></hr>
        
        <div id="playlistAndPlayer" className="flex px-10  justify-around items-center w-screen ">
            {playlist ? <Playlist playlist={playlist} addSong={addSong} setNextSong={setNextSong} nextSong={nextSong}/> : playlistLoading()}

            

            <div id="spotify" className="w-1/2 flex flex-col justify-between h-full">

                <form id="searchBar" className="h-full">
                    <input type="search" placeholder="Search for a Song or Artist..." value={search} onChange={e => setSearch(e.target.value)} id="search" className="w-full px-3 h-16 border-stone-200 bg-neutral-900 text-white"/>
                    <div id='trackResults' className="overflow-auto p-2">
                        {searchResults.map(track => (
                            <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
                        ))}
                    </div>
                </form>
            </div>



        </div>
        {showEdit ? showEditPage() : hideEditPage()}
        
            <div id="player" className="bg-yellow-200">
                    {playingTrack || song || nextSong ? renderPlayer() : null}
            </div>
    </div>
  )
}

