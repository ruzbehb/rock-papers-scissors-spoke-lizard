require 'sinatra/base'
require 'rack-flash'

class RPS < Sinatra::Base

	set :views, File.join(File.dirname(__FILE__), '..', 'views')

	get '/' do 
		erb :index
		
	end

	post '/' do
		player_pick = params[:playerPick]
		computer_pick = params[:computerPick]
		winner = params[:gameWinner]
		# file = 'empty.txt'
		# File.open(file)
		IO.write('empty.txt', [player_pick, computer_pick, winner].join(' '))
		return 'write ok'
	end

end
