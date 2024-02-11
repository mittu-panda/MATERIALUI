import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    
    const HOT_URL="https://images.unsplash.com/photo-1563630381190-77c336ea545a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VufGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1549562969-349ced0da61a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="InfoBox">   
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL: info.temp>15? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity>80? <ThunderstormIcon/>: info.temp>15? <WbSunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p><div>Temperature={info.temp}&deg;C</div></p>
         <p><div>Humidity={info.humidity}</div></p>
        <p><div>Min Temp={info.tempMin}</div></p>
        <p><div>Max Temp={info.tempMax}</div></p>
        <p><div>The weather can be described as <i>{info.weather}</i> and feels like={info.feelslike}&deg;C</div></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}