import React from "react";

function SearchComponent(props) {
	return (
	
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

                        <div class="px-3 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Trending Words:</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#warazi</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#kumuok</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#shashola</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mambeko</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#kubuya</span>
                            </div>
                        
                            

                        
                                    </div>
					</div>
				</section>
  </div>
	
	);
}

export default SearchComponent;
