

export const createPlaylisting = playlisting => {
    return $.ajax({
        method: 'post',
        url: "api/playlistings",
        data: { playlisting }
    })
}


export const deletePlaylisting = id => {
    return $.ajax({
        method: 'delete',
        url: `api/playlistings/${id}`,
    })
}
