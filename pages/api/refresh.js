const SpotifyWebApi = require("spotify-web-api-node")
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

export default function handler(req, res){
    if (req.method === "POST"){

        const refreshToken = req.body.refreshToken
        const spotifyApi = new SpotifyWebApi({
            redirectUri: "http://localhost:3000",
            clientId: clientID,
            clientSecret: clientSecret,
            refreshToken
        })

    spotifyApi.refreshAccessToken().then(data => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
        })
    }).catch(error => {
        console.log("error 1 here")
        res.send(error)
    })
    }
}