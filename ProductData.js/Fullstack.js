const fullStackCourse = (req, res) => {
    res.send([
       {
        "no":1,
        "price" : 30000,
        "title":"Fullstack Program",
        "img" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-dZzZR7wSWylEt6U72silhTaDBLOT9JDgfA&usqp=CAU'
    }
    ])
}

module.exports = fullStackCourse