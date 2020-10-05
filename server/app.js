const express = require("express") // import express 
const bodyParser = require("body-parser") // import body-parser 
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")
var cors = require('cors')
const app = express() // create express server

const mongoose = require('mongoose') // impor the mongoose drivers
const Word = require('./models/word')

//const words = [];
app.use(cors())
app.use(bodyParser.json()) // use body-parser middleware to parse incoming json


app.use("/graphql", graphqlHTTP({ 
    // set up our graphql endpoint with the express-graphql middleware
    // build a graphql schema
        schema: buildSchema(`
        type Word {
            _id: ID!
            neno: String!
            meaning: String!
            author: String!
            date: String
        }

        input WordInput {
            neno: String!
            meaning: String!
            author: String!
            date: String
        }


        type wordQuery {
            words: [Word!]!
        }

        type wordMutation {
            createWord(wordInput: WordInput): Word
        }

        schema {
            query: wordQuery
            mutation: wordMutation
        }
    `),
    rootValue: {
        words: () => {
            // return all the blogs unfiltered using Model
            return Word.find().then(words => {
                return words
            }).catch(err => {
                throw err
            })
            //return words // return blogs instead of hardcoded array
        },
        createWord: (args) => {
            
            const word = new Word({
                neno: args.wordInput.neno,
                meaning: args.wordInput.meaning,
                author: args.wordInput.author,
                date: new Date()
            })
            // save new blog using model which will save in MongoDB
            return word.save().then(result => {
                console.log(result)
                return result
            }).catch(err => {
                console.log(err)
                throw err
            })
        }
    }, // an object with resolver functions
    graphiql: true // enable the graphiql interface to test our queries
}))

//mongodb+srv://jay:<password>@sheng.v3ijf.mongodb.net/<dbname>?retryWrites=true&w=majority
// connect to our MongoDB server.
//mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@sheng.v3ijf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
mongoose.connect(`mongodb+srv://jay:jayjay123@sheng.v3ijf.mongodb.net/library?retryWrites=true&w=majority`).then(() => {

    app.listen(5000) // setup server to run on port 5000

}).catch(err => {
    console.log(err)
})

//app.listen(5000) // setup server to run on port 5000 