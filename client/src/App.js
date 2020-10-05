import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import "./App.css"
import "./styles.generated.css";

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


const Header = () => (
  <div class="shadow-md">
    <header class="text-gray-700 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">shengcyclopedia</span>
        </a>
      </div>
    </header>
  </div>
)
const Search = () => (

  <div className="">
    {/*Company Details*/}
      <section class="text-gray-700 py-24 body-font">
					<div class="container py-6 mx-auto flex">
						<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<h2 class="text-gray-900 text-lg mb-1 font-medium title-font mb-5">
								Jichanue na Sheng.
							</h2>

							

              <input
                  class="bg-white rounded-lg border border-gray-400 text-large h-16 px-8 py-12 my-8 mb-4 focus:outline-none focus:shadow-outline"
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search here"
                  //onChange={this.onChange}
                />

              <div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10">
                    <form //onSubmit={this.handleSubmit}>
                    >
                      <center>
                        <div class="mb-2 mr-2">
                          <button
                            class="rounded-lg py-4 px-8 text-white bg-luminous-blue hover:bg-blue-600 focus:outline-none"
                            value="add more"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </center>
                    </form>
              </div>

              <div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10">
                TrendIng Words: Mbogi Genje Kumuok Mambeko 
              </div>
				

              
						</div>
					</div>
				</section>
  </div>
)


function App() {
  // const { loading, error, data } = useQuery(GET_WORDS)

  // console.log(data);

  // if (error) return <h1>Something went wrong!</h1>
  // if (loading) return <h1>Loading...</h1>

  return (
    <div className="App">

          <Header/>
        

          <Search/>
        
          
          {/* <h1>Github | Users</h1>

          {data.words.map(word => (
            <User key={word._id} user={word} />
          ))} */}




 
    </div>
  )
}

export default App