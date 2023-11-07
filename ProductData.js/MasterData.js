const MasterData = (req, res) => {
    res.send([
       {
        "no":1,
        "price" : 25000,
        "title":"Master Competative Program",
        "img" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-dZzZR7wSWylEt6U72silhTaDBLOT9JDgfA&usqp=CAU'
    }
    ])
}

module.exports = MasterData