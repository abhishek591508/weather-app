import React from 'react'
import './InfoBoxCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const InfoBoxCard = ({info}) => {
        let img_url = "https://t4.ftcdn.net/jpg/02/66/38/15/240_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg"
        // let info = {
        //     city : "Delhi",
        //     feels:39,
        //     humidity:68,
        //     t_max: 32,
        //     t_min: 32,
        //     temp: 32,
        // }
  return (
    <div className='InfoBoxClass'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        // image="src/assets/weather.jpeg"
        image={img_url}
        title="green iguana"
      />
      <CardContent className='cardClass'>
        <Typography gutterBottom variant="h5" component="div" className='cityNameClass'>
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature : {info.temp} &deg;C </p>
          <p>Minimum Temperature : {info.t_min}&deg;C </p>
          <p>Maximum Temperature : {info.t_max}&deg;C</p>
          <p>Humidity : {info.humidity} </p>
          <p>Feels like : {info.feels}&deg;C</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default InfoBoxCard
