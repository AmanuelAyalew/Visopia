function HotelCard({ hotel }) {
  if (!hotel) return null; // Avoid rendering if hotel is undefined

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <a href={hotel?.url ?? "#"} target="_blank" rel="noopener noreferrer">
        <img
          src={hotel?.image ?? "https://via.placeholder.com/400x300"}
          alt={hotel?.name ?? "Hotel Image"}
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {hotel?.name ?? "Unknown Hotel"}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          {hotel?.accommodation_type ?? "Unknown Type"}
        </p>
        <p className="text-blue-600 font-bold mt-2">
          ${hotel?.price ?? 0} / night
        </p>
        <p className="text-yellow-500 mt-1">
          ⭐ {hotel?.rating ?? 0} ({hotel?.reviews ?? 0})
        </p>
        {hotel?.labels?.length > 0 && (
          <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded mt-1 inline-block">
            {hotel.labels.join(", ")}
          </span>
        )}
      </div>
    </div>
  );
}

export default HotelCard;
