import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

const variants = ["h1","h2", "h3", "body1", "caption"];

function TypographyDemo({loading}) {

  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

function ImageDemo(props) {
  const { loading, image } = props;


  return (
    <div className="flex justify-start">
      {!loading ? (
        <Skeleton variant="rectangular" width="50%">
          <div style={{height: "300px"}}></div>
        </Skeleton>
      ) : (
        <img width="500px" src={image} ></img>
      )}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonTypography() {
    const [loading, setLoading] = useState(true);
    const [loadingImage, setLoadingImage] = useState(false);
    const [image, setImage] = useState();
    const imageUrl = "https://images.pexels.com/photos/4819664/pexels-photo-4819664.jpeg"

    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
        setLoadingImage(true);
      }
      
      useEffect(() => {
          fetchImage();
          setTimeout(() => {
            setLoading(false);
          },5000)
      },[])

  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <TypographyDemo loading={loading} />
      </Grid>
      <Grid item xs>
        <ImageDemo loading={loadingImage} image={image}/>
      </Grid>
    </Grid>
  );
}
