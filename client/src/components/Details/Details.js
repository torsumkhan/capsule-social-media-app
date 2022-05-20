import React, { useEffect } from "react";
import Header from "../UIComponents/Header";
import {
  Typography,
  CircularProgress,
  Card,
  Box,
  CardContent,
  Container,
  CardMedia,
  TextField,
  Button,
} from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { getCapsule } from "../../actions/capsules";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { deleteCapsule, likeCapsule } from "../../actions/capsules";
import DownloadIcon from "@mui/icons-material/Download";

const Details = () => {
  const theme = useTheme();
  const { post: capsule } = useSelector((state) => {
    console.log(state);
    return state.capsules;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCapsule(id));
  }, [id]);

  useEffect(() => {
    console.log(capsule);
  }, [capsule]);

  if (!capsule) {
    return <></>;
  }
  return (
    <>
      <Header />
      <Container>
        <div style={{ margin: "2.4rem" }}>
          <Paper>
            <Card sx={{ display: "flex", boderRadius: "30px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h4">
                    {capsule.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    component="div"
                  >
                    Created by: {capsule.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={capsule.selectFile}
                  alt="Live from space album cover"
                />
              </Box>

              <CardContent sx={{ flex: "1 0 auto" }}>
                <div>
                  <Button
                    size="small"
                    style={{ color: "#9b5de5" }}
                    onClick={() => dispatch(likeCapsule(capsule.id))}
                  >
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; likes &nbsp;
                    {capsule.like}
                  </Button>
                </div>
                <Typography
                  component="body2"
                  variant="h6"
                  style={{ color: "dark gray" }}
                >
                  {capsule.text}
                </Typography>
              </CardContent>
            </Card>
          </Paper>

          <div style={{ marginTop: "25px" }}>
            <Typography gutterBottom variant="h6">
              Write a comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
            />
            <br />
            <Button
              style={{
                marginTop: "10px",
                backgroundColor: "#9b5de5",
                color: "white",
              }}
              fullWidth
              color="primary"
              variant="contained"
            >
              Comment
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Details;
