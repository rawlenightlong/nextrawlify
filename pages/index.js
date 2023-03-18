import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import { Inter } from 'next/font/google'
import {useSearchParams} from "next/navigation"
import { createContext, useState } from "react";

export const stateContext = createContext()

export default function Home() {

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
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
      {code ? <Dashboard code={code}/> : <Login/>}
      </stateContext.Provider>
  )
}
