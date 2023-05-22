import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 6, cols = 6) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function images() {
  return (
    <div className="min-h-screen flex flex-wrap justify-center content-center w-full bg-slate-100">
      <ImageList
        sx={{ width: "90%", height: "100%" }}
        variant="quilted"
        cols={10}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 3}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg",
    title: "Space 1",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/12529857/pexels-photo-12529857.jpeg",
    title: "Space 2",
    rows:2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/8030946/pexels-photo-8030946.jpeg",
    title: "Space 2",
    rows:2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/9642873/pexels-photo-9642873.jpeg",
    title: "Space 2",
    rows:2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/589681/pexels-photo-589681.jpeg",
    title: "Space 2",
    rows:2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/13092090/pexels-photo-13092090.jpeg",
    title: "Space 2",
    rows:2,
    cols: 3,
  },
  {
    img: "https://images.pexels.com/photos/12699240/pexels-photo-12699240.jpeg",
    title: "Space 2",
    rows:1,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/14334469/pexels-photo-14334469.jpeg",
    title: "Space 2",
    rows:3,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/9536383/pexels-photo-9536383.jpeg",
    title: "Space 2",
    rows:2,
    cols: 3,
  },
  {
    img: "https://images.pexels.com/photos/15433310/pexels-photo-15433310/free-photo-of-mar-playa-oceano-rocas.jpeg",
    title: "Space 2",
    rows:2,
    cols: 1,
  },
  {
    img: "https://images.pexels.com/photos/5657441/pexels-photo-5657441.png",
    title: "Space 2",
    rows:2,
    cols: 2,
  },
];

export default images;
