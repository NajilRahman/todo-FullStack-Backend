const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECTION)
    .then((res) =>
        console.log('mongodb connected')
    ).catch((err) =>
        console.log('mongodb connection failed', err)
    )