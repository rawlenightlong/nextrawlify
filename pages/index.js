import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import { Inter } from 'next/font/google'
import {useSearchParams} from "next/navigation"
import { createContext, useState } from "react";
import {BsFillPlay} from 'react-icons/bs'
import Head from "next/head";


export const stateContext = createContext()

export default function Home({playlist}) {


  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState({
    username: "",
    title: '',
    artist: '',
    uri: "spotify:track:4cOdK2wGLETKBW3PvgPWqT"
  })
  const [currentUser, setCurrentUser] = useState(null)
  const [song, setSong] = useState(null)
  const [showEdit, setShowEdit] = useState(false)
  const [play, setPlay] = useState(false)
  const [songInfo, setSongInfo] = useState(null)



  const searchParams = useSearchParams()
  const code = searchParams.get('code')


  return (
    
    <stateContext.Provider value={
      {
        search: search,
        setSearch: setSearch,
        searchResults: searchResults,
        setSearchResults: setSearchResults,
        playingTrack: playingTrack,
        setPlayingTrack: setPlayingTrack,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        song: song,
        setSong: setSong,
        showEdit: showEdit,
        setShowEdit: setShowEdit,
        play: play,
        setPlay: setPlay,
        songInfo: songInfo,
        setSongInfo: setSongInfo
      }
    }>
      {code ? <Dashboard code={code} /> : <Login/>}
      </stateContext.Provider>
  )
}

