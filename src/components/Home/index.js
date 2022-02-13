import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import featureOdd from "../../assets/images/feature-odd.svg";
import homeInterface from "../../assets/images/home-interface.svg";
// import homeMain from "../../assets/images/home-main.svg";
import homeMain1 from "../../assets/images/home-main-1-flip.svg";
import homePhone from "../../assets/images/home-phone.svg";
import { messaging } from "../../config";
import { useAuthStatus } from "../../helpers/customHooks";

const Home = () => {
  const authed = useAuthStatus();
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 767px)",
  });

  useEffect(() => {
    if (messaging) {
      if (
        Notification.permission !== "granted" &&
        Notification.permission !== "denied"
      ) {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            messaging
              .getToken()
              .then((refreshedToken) => {
                console.log(refreshedToken);
              })
              .catch((e) => console.log(e));
          }
        });
      }
    }
  }, []);

  useEffect(() => {
    if (messaging) {
      const unsubscribe = messaging.onMessage(
        (payload) => {
          console.log(payload);
        },
        (error) => console.log(error)
      );

      return () => {
        unsubscribe && unsubscribe();
      };
    }
  }, []);

  useEffect(() => {
    if (messaging) {
      const unsubscribe = messaging.onTokenRefresh(
        () => {
          messaging
            .getToken()
            .then((refreshedToken) => {
              console.log(refreshedToken);
            })
            .catch((e) => {
              console.log(e);
            });
        },
        (error) => console.log(error)
      );

      return () => {
        unsubscribe && unsubscribe();
      };
    }
  }, []);

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="home-row mobile-top-padding mb-24"
        direction="row-reverse"
      >
        <Grid item={true} xs={12} sm={12} md={6} lg={6} className="home-left-col">
          <Fade right={isDesktop}>
            <h1 className="home-title">Get first hand experience in coding.</h1>
            <h2 className="home-description">
              Choose from hundreds of coding guides, tutorials and examples to
              learn new technology your heart desires.
            </h2>

            <Link to={authed ? "/dashboard" : "/signup"}>
              <Button type="primary" className="mt-24 mb-24 call-to-action-btn">
                {authed ? "Explore" : "Join CodeLabz"}
              </Button>
            </Link>
          </Fade>
        </Grid>
        <Grid item md={6} lg={6} order={1} className="home-right-col">
          <Fade left>
            <img
              src={homeMain1}
              alt="Background for auth"
              className="homepage-image"
            />
          </Fade>
        </Grid>
      </Grid>

      <Grid
        container
        className="light-grey-bg home-row"
        justifyContent="center"
        align="center"
      >
        <Grid item={true} xs={12} className="center pt-40 pb-40">
          <h1 className="home-title pl-24 pr-24 mb-8">
            Step-by-step instructions
          </h1>
          <h2 className="home-description pl-24 pr-24">
            Follow them to the dot and you wouldn't miss anything
          </h2>
          <Fade bottom>
            <img
              src={isDesktop ? homeInterface : homePhone}
              alt="Background for auth"
              className="homepage-interface"
            />
          </Fade>
        </Grid>
      </Grid>

      <Grid
        container
        className="home-row pt-40 pb-40"
        align="middle"
        justifyContent="center"
      >
        <Grid item={true} xs={12} className="center mb-24">
          <h1 className="home-title mb-8">Learning made easier</h1>
          <h2 className="home-description">Features that help you get going</h2>
        </Grid>

        <Grid item={true} md={3} xs={12} className="col-pad-24">
          <Fade left>
            <Card>
              <CardActionArea>
                <CardMedia
                  children={<img alt="example" src={featureOdd} />}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Feature 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
          </Fade>
        </Grid>

        <Grid item={true} md={3} xs={12} className="col-pad-24">
          <Fade left>
            <Card>
              <CardActionArea>
                <CardMedia
                  children={<img alt="example" src={featureOdd} />}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Feature 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
          </Fade>
        </Grid>

        <Grid item={true} md={3} xs={12} className="col-pad-24">
          <Fade left>
            <Card>
              <CardActionArea>
                <CardMedia
                  children={<img alt="example" src={featureOdd} />}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Feature 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
          </Fade>
        </Grid>

        <Grid item={true} md={3} xs={12} className="col-pad-24">
          <Fade left>
            <Card>
              <CardActionArea>
                <CardMedia
                  children={<img alt="example" src={featureOdd} />}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Feature 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
