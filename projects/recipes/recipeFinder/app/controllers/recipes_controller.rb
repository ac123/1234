class RecipesController < ApplicationController
  def index
  	#check to see if search term is provided. if it is not. use chocolate as teh default term.
  @search_term = params[:looking_for] || 'chocolate'
  @recipes =  Recipe.for(@search_term)
  end
end
