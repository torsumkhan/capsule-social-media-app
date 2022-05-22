import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  IconButton,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteCapsule, likeCapsule } from "../../../actions/capsules";
import { useHistory } from "react-router-dom";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditIcon from "@mui/icons-material/Edit";

const Capsule = ({
  capsule,
  setCurrentId,
  handleModal,
  showNav,
  updateForm,
  user,
}) => {
  const history = useHistory();

  const classes = useStyles();
  const dispatch = useDispatch();

  const tweetfunc = () => {
    const twitterUrl = `https:twitter.com/intent/tweet?text=${capsule.text}&hashtags=${capsule.tags}`;
    window.open(twitterUrl, "_blank");
  };

  console.log("user from home--->", user);

  const openDetails = () => {
    history.push(`/posts/${capsule._id}`);
  };

  console.log("check capsule", capsule);

  let edits;
  if (user._id === capsule.creator) {
    edits = (
      <Button
        size="small"
        style={{ color: "gray" }}
        onClick={() => {
          setCurrentId(capsule._id);
          handleModal(true);
          showNav(false);
        }}
      >
        <EditIcon fontSize="small" />
        Edit
      </Button>
    );
  }

  let delets;
  if (user._id === capsule.creator) {
    delets = (
      <Button
        size="small"
        style={{ color: "gray" }}
        onClick={() => dispatch(deleteCapsule(capsule._id))}
      >
        <DeleteIcon fontSize="small" />
        Delete
      </Button>
    );
  }

  let tweets;
  if (user._id === capsule.creator) {
    tweets = (
      <IconButton onClick={tweetfunc}>
        <TwitterIcon fontSize="small" style={{ color: "white" }} />
      </IconButton>
    );
  }

  console.log("capsule creator ---->", capsule, capsule.Creator, user._id);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={capsule.selectFile}
        title={capsule.title}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{capsule.name}</Typography>
        <Typography variant="body2">
          {moment(capsule.createdAt).fromNow()}
        </Typography>
        <div>{tweets}</div>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={openDetails}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {capsule.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {capsule.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" component="p" style={{ color: "gray" }}>
          {capsule.text}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          style={{ color: "#9b5de5" }}
          onClick={() => dispatch(likeCapsule(capsule._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; like &nbsp;
          {capsule.like}
        </Button>

        {edits}
        {delets}
      </CardActions>
    </Card>
  );
};

export default Capsule;
