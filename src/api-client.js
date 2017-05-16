const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=dee3335550731520f8e34cf6524b031d&format=json';

export function getArtists() {
    return fetch(URL)
        .then(response => response.json())
        // .then(funtion(data) {
        //     return data.topartist.artist
        // }) es lo mismo que la linea de abajo
        .then(data => data.topartists.artist)
        .then( artists => artists.map(artist => {
            return {
                name: artist.name,
                image : artist.image[3]['#text'],
                likes: 200,
                comments: 140,
            }
        }))
            
        
}
