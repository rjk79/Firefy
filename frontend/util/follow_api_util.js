
//index
export const fetchAllFollows = () => {
    return $.ajax({
        method: 'get',
        url: 'api/follows'
    })
}

//create
export const createFollow = follow => {
    return $.ajax({
        method: 'post',
        url: "api/follows",
        data: { follow }
    })
}


export const deleteFollow = id => {
    return $.ajax({
        method: 'delete',
        url: `api/follows/${id}`,
    })
}
