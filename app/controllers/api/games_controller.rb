class Api::GamesController < ApplicationController

  def create

  end

  def index
    @games = Game.all
    render :index
  end


  private

  def game_params
    params.require(:game).permit(:name, :publisher, :description, :max_players)
  end
end
