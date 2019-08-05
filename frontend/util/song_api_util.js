
export const fetchSong = id => {
    return $.ajax({
        method: 'get',
        url: `api/songs/${id}`
    })
}

export const fetchAllSongs = () => {
    return $.ajax({
        method: 'get',
        url: `api/songs`
    })
}

