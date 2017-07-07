class Recipe
	#including gem HTTParty
	include HTTParty
	#setting key for our API
	ENV["FOOD2FORK_KEY"] = '330b67a00f6907cddeacbf96c8bf2e2b'
	#setting API URL
	base_uri 'http://food2fork.com/api'
	#default send in what format
	default_params key: ENV[FOOD2FORK_KEY]
	format :json
	#listen for and grab
	def self.for term
		get("/serach", query: { q: term})["recipes"]
	end
end