import React from 'react'
import SpotifyWebApi from "spotify-web-api-node"
import Auth from './Auth'
import {useEffect, useState, useContext} from 'react'
import { stateContext } from '@/pages'
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
})


export default function Dashboard({code}) {

    const accessToken = Auth(code)
    const states = useContext(stateContext)
    const {currentUser, setCurrentUser} = useContext(stateContext)
    console.log(states)

    async function fetchUser(){
        if (!accessToken) return
        let response = await fetch("https://api.spotify.com/v1/me", {
            headers: {"Authorization": `Bearer ${accessToken}`}
        })
        let data = await response.json()
        setCurrentUser(data.display_name)
        console.log(currentUser)
    }

    useEffect(() => {
        fetchUser()
    }, [accessToken, currentUser])

  return (
    <div>
      This is the dashboard
    </div>
  )
}
