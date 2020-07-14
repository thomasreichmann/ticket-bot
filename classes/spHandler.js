const Song = require(`./song`)
const YtHandler = require(`./ytHandler`);

let ytHandler = new YtHandler()

const Spotify = require('spotify-web-api-node');

let spotify = new Spotify({
    clientId: process.env.SPOTIFY_ID,
    clientSecret: process.env.SPOTIFY_TOKEN
});

module.exports = class SpotifyHandler {
    async parseUrl(url) {
        try {
            await this.setToken()

            let index = url.search(/(playlist|track|album)/)
            let parsed = url.substr(index).split("/")
            // Define se temos um playlist|track|album
            let type = parsed[0]
            // Define o id da playlist|track|album
            let id = parsed[1]

            if (type === `track`) {
                return await this.getTrack(id)
            } else if (type === `playlist` || type === `album`) {
                return await this.getPlaylistAlbum(id, type)
            } else {
                throw `Spotify Handler Error: Type not supported`
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getTrack(id) {
        try {
            let data = await spotify.getTrack(id)

            let title = data.body.name;
            let artist = data.body.artists[0].name

            let query = `${artist} ${title}`

            return await ytHandler.getSearch(query)
        } catch (err) {
            console.error(`Erro getTrack spHandler:\n${err}`)
        }
    }

    async getPlaylistAlbum(id, type) {
        try {
            let data;
            if(type === `playlist`) {
                data = await spotify.getPlaylist(id)
            } else {
                data = await spotify.getAlbum(id)
            }

            let queries = []

            data.body.tracks.items.forEach(t => {
                let track = t.track ? t.track : track;

                let title = track.name;
                let artist = track.artists[0].name

                queries.push(`${artist} ${title}`)
            })

            return await this.searchTracks(queries)
        } catch (err) {
            console.error(`Erro getPlaylistAlbum spHandler:\n${err}`)
        }
    }

    async searchTracks(queries) {
        let calls = []

        queries.forEach(q => {
            calls.push(ytHandler.getSearch(q))
        })

        let songs = await Promise.all(calls)

        return songs.flat()
    }

    async setToken() {
        try {
            let data = await spotify.clientCredentialsGrant();

            spotify.setAccessToken(data.body.access_token);
        } catch (err) {
            console.log('Something went wrong when retrieving an access token', err);
            return false;
        }
    }
}