export default function WeatherMainInfo({ weather }) {
  return (
    <div className="flex justify-center flex-wrap items-center flex-row">
      <span className="min-w-full text-center">{weather?.location.name}</span>
      <span className="min-w-full text-center">{weather?.location.country}</span>
      <div>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div className="flex justify-center flex-wrap min-w-full">
          <span className="min-w-full text-center">{weather?.current.condition.text}</span>
          <span className="min-w-full text-center">{weather?.current.temp_c}°</span>
        </div>
      </div>

    </div>
  );
}
