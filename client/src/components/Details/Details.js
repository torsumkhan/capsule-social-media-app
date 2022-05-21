import React, { useEffect, useState } from "react";
import Header from "../UIComponents/Header";
import Comments from "./Comments";
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
import { getCapsule } from "../../actions/capsules";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { deleteCapsule, likeCapsule } from "../../actions/capsules";
import DownloadIcon from "@mui/icons-material/Download";

const Details = () => {
  const [comments, setComments] = useState("");
  const [commentList, setCommentList] = useState([]);
  const { post: capsule } = useSelector((state) => {
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

  const commentInput = (e) => {
    setComments(e.target.value);
  };

  const commentSubmit = (e) => {
    e.preventDefault();
    const text = comments;
    setCommentList([...commentList, text]);
    setComments("");
  };

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
            <form onSubmit={commentSubmit} typeof="text">
              <TextField
                fullWidth
                rows={4}
                variant="outlined"
                label="Comment"
                multiline
                value={comments}
                onChange={commentInput}
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
                type="submit"
              >
                Comment
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <Comments commentList={commentList} />
    </>
  );
};

export default Details;
