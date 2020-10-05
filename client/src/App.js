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

// const User = ({ user: { login, avatar_url } }) => (
//   <div className="Card">
//     <div>
//       <img alt="avatar" className="Card--avatar" src={avatar_url} />
//       <h1 className="Card--name">{login}</h1>
//     </div>
//     <a href={`https://github.com/${login}`} className="Card--link">
//       See profile
//     </a>
//   </div>
// )


const Search = () => (

  <div className="">
    {/*Company Details*/}
    <section class="text-gray-700 body-font">
					<div class="container py-6 mx-auto flex">
						<div class="lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md">
							<h2 class="text-gray-900 text-lg mb-1 font-medium title-font mb-5">
								Company Details
							</h2>

							<label
								class="block text-gray-700 text-sm font-medium mb-2"
								for="companyname"
							>
								Company Name
							</label>

                {/* <input
                  class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
                  type="text"
                  name="cname"
                  id="cname"
                  placeholder=""
                  onChange={this.onChange}
                />

                <label
                  class="block text-gray-700 text-sm font-medium mb-2"
                  for="companyaddress"
                >
                  Company Address
                </label>

                <input
                  class="bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline"
                  type="text"
                  name="caddr"
                  id="caddr"
                  placeholder=""
                  onChange={this.onChange}
                />
                <label
                  class="block text-gray-700 text-sm font-medium mb-4"
                  for="companyaddress"
                >
                  Company Logo
                </label> */}

							<div className="">
								<img className="rounded-lg shadow-lg"
									style={{
										maxHeight: "8rem",
									}}
									
								/>
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
        

          <Search/>
          
          {/* <h1>Github | Users</h1>

          {data.words.map(word => (
            <User key={word._id} user={word} />
          ))} */}




 
    </div>
  )
}

export default App