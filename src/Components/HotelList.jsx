import { useEffect, useState } from "react";
import HotelCard from "./HotelCard.jsx";
import axios from "axios";

function HotelsList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hotels");

        // Safely map the hotels array
        const list = response.data.result?.list || [];

        const hotelsData = list.map((hotel) => ({
          id: hotel.key,
          name: hotel.name,
          accommodation_type: hotel.accommodation_type,
          price: hotel.price_ranges?.minimum ?? 0,
          rating: hotel.review_summary?.rating ?? 0,
          reviews: hotel.review_summary?.count ?? 0,
          image: hotel.image ?? "https://via.placeholder.com/400x300",
          url: hotel.url,
          labels: hotel.merchandising_labels ?? [],
        }));

        setHotels(hotelsData);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading hotels...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelsList;
