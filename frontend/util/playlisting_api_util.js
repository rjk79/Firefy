

export const createPlaylisting = playlisting => {
    return $.ajax({
        method: 'post',
        url: "api/playlistings",
        data: { playlisting }
    })
}


export const deletePlaylisting = (playlistId, songId) => {
    return $.ajax({
        method: 'delete',
        url: `api/playlistings/${playlistId}`,
        data: { songId }
    })
}
