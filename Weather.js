import React, { useEffect, useState } from 'react'
import './Weather.css'
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import pix from "./po.jpg"
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {  
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Weather() {
  const classes = useStyles();
  const [location, setLocation] = useState("lagos")

  const [weather, setWeather] = useState([])

  const AccessWeather = async (e) => {
      const APIKEY = "1e03a6592a559e43f902a5b9cf36bfbf";
      const res = await axios(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1e03a6592a559e43f902a5b9cf36bfbf`);

          console.log(res.data);
          if (res.data) {
            return setWeather(res.data);
        }
    };

    useEffect(()=>{
       AccessWeather();
    }, []);

  return ( 
    <>
        <div>
        <div className={classes.margin}>
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <LocationOnIcon />
      </Grid>
      <Grid item>
        <TextField value = {location}
         onChange = {(e) => setLocation(e.target.value)}
         id="input-with-icon-grid" label="Input City" />
      </Grid>
      <Button onClick = {AccessWeather} color="primary">Search</Button>
    </Grid>
  </div>
    </div>
    <Card className={classes.root}>
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="h2">
            Weather Condition App
          </Typography>
        <CardMedia
          className={classes.media}
          image={pix}
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
              Temp: {weather.main.temp}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Pressure: {weather.main.pressure}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Condition: {weather.weather[0].main}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    <div>

    </div>
    </>

  );
}
