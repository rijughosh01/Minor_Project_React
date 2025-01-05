import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PropTypes from "prop-types";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/1410976365/photo/woman-suffering-from-heat-wave.jpg?s=1024x1024&w=is&k=20&c=2kIQ0RFCtXWQk3V2gW4EJAFEmeTtrU1P376SGIHt6pg=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1702380245992-83c9a8b36b9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlciUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

  return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temperature < 15
                ? COLD_URL
                : HOT_URL
            }

            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}, {info.country}{" "}
              {info.humidity > 80 ? (
                <UmbrellaIcon />
              ) : info.temperature < 15 ? (
                <AcUnitIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="div"
            >
              <div>Temperature: {info.temperature}&deg;C</div>
              <div>Min Temperature: {info.temperatureMin}&deg;C</div>
              <div>Max Temperature: {info.temperatureMax}&deg;C</div>
              <div>Humidity: {info.humidity}</div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

InfoBox.propTypes = {
  info: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    temperatureMin: PropTypes.number.isRequired,
    temperatureMax: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    feelsLike: PropTypes.number.isRequired,
  }).isRequired,
};
