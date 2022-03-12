import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import './Carousel.css';

function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img_src: "https://cdn.shopify.com/s/files/1/0258/5470/5746/files/7_bf79e9e1-2648-4acb-a11d-0ec8b556c1e4.jpg?v=1572940496"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img_src: "https://www.helpguau.com/wp-content/uploads/2019/06/perro-ojos-cerrado-helpguau.jpg"
        },
        {
          name: "Random Name #2",
          description: "Hello World!",
          img_src: "https://latam.globspot.tech/wp-content/uploads/2019/08/localizador-gps-personas-mascotas-globspot-mexico-banner2.jpg"
      }
    ]

    return (
        <Carousel stopAutoPlayOnHover={false} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
            <img className='image' src={props.item.img_src}/>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}

export default Example;