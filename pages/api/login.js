const SpotifyWebApi = require("spotify-web-api-node")
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

export default function handler(req, res){
    if (req.method === "POST"){
    
    const code = req.body.code

    const spotifyApi = new SpotifyWebApi({
        redirectUri: "https://nextrawlify.vercel.app/",
        clientId: clientID,
        clientSecret: clientSecret
    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {

        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(err => {
        // console.log("error here")
        // console.log(err)

    })
    }
}