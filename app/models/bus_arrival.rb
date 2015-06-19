
class BusArrival

  attr_reader :route
  attr_reader :destination
  attr_reader :timeToStation

  def initialize(route, destination, timeToStation)
    @route     = route
    @destination   = destination
    @timeToStation = timeToStation
  end

end