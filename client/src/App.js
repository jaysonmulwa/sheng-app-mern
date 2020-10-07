import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import "./App.css"
import "./styles.generated.css";
import SearchComponent from  "./components/search"
import HeaderComponent from  "./components/header"



const GET_WORDS = gql`
  {
    words {
      _id
      neno
      meaning
      author
      date
    }
  }
`

function App() {
  // const { loading, error, data } = useQuery(GET_WORDS)

  // console.log(data);

  // if (error) return <h1>Something went wrong!</h1>
  // if (loading) return <h1>Loading...</h1>

  return (
    <div className="App">

          <HeaderComponent/>
        

          <SearchComponent/>
        
          
          {/* <h1>Github | Users</h1>

          {data.words.map(word => (
            <User key={word._id} user={word} />
          ))} */}

    </div>
  )
}

export default App