export const fetchAllArtists = () => {
    return $.ajax({
        method: 'get',
        url: 'api/artists'
    })
}

export const fetchArtist = id => {
    return $.ajax({
        method: 'get',
        url: `api/artists/${id}`,
    })
}