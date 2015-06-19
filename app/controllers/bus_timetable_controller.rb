require_relative '../../app/models/bus_arrival'
#require '../../app/models/bus_arrival'

class BusTimetableController < ApplicationController

  def index
    @arrivals = gen_mock_arrivals
  end

  def getJsonData
    @arrivals = gen_mock_ajax
    render :json => @arrivals
  end

  private
  def gen_mock_arrivals
    a1 = BusArrival.new('22','Piccadilly Circus', '3:25')
    a2 = BusArrival.new('265','Putney Bridge', '7:32')
    a3 = BusArrival.new('22','Piccadilly Circus', '14:13')
    return [a1,a2,a3]
  end

  private
  def gen_mock_ajax
    a1 = BusArrival.new('265','Putney Bridge', '4:33')
    a2 = BusArrival.new('22','Piccadilly Circus', '7:52')
    a3 = BusArrival.new('485','Wandsworth', '17:07')
    a4 = BusArrival.new('22','Piccadilly Circus', '23:55')
    return [a1,a2,a3,a4]
  end

end
