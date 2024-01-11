#Rawlify

###A Spotify streaming app and playlist creator 

#### Technologies
- Javascript
- HTML
- Tailwind CSS
- Nextjs
- Mongoose
- Express
- Node
- Render

#### Deployed Link
https://rawlify.vercel.app
Frontend Github: www.github.com/rawlenightlong/nextrawlify
#### Wireframes

![model](https://i.imgur.com/l3lOT9k.png)
![model](https://i.imgur.com/o37IhcH.png)

####Frontend Components

Index - Landing page with song cards, search function, player function, and sidebar with playlist

Card - Individual song information cards, with embedded Spotify player

####Routes
| Route  | Path  | Function  | Request Type  |
|---|---|---|---|
| Index  | /songs  | Display all song cards | GET  |
| Show  | /songs/:id  | Display one song card  | GET  |
| Create  | /songs  | Create a new song card  | POST  |
| Update  | /songs/:id  | Update an song card  | PUT  |
| Delete | /songs/:id  | Delete an existing song card  | DELETE  |
| Show | /songs/playlist | Shows the currently built playlist and all its songs | GET

The Rawlify app will pull upon the Spotify API using Spotify's own authentication mechanism and allow verified users to search Spotify's entire music library, and add their favorite songs to a user-specific playlist. Each song card will have an embedded Spotify player to play the song, and the playlist will have its own embedded player on its specific page.


####Plan 
1. Build a working version of the app using React. Familiarize self with the authentication proecudure and utilizing / querying the Spotify API.

2. Get one song to play on the main page and on the show page.

3. Get playlist addition working, and the rendering of the playlist to an embedded player

4. Dive into Nextjs, and build a few basic applications utilizing this new framework. Style with Tailwind. 

5. Re-create the app from the ground up, now in Nextjs and with the use of Tailwind for styling.