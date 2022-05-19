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

const Capsule = ({
  capsule,
  setCurrentId,
  handleModal,
  showNav,
  updateForm,
}) => {
  const history = useHistory();

  const classes = useStyles();
  const dispatch = useDispatch();

  const tweetfunc = () => {
    const twitterUrl = `https:twitter.com/intent/tweet?text=${capsule.text}&hashtags=${capsule.tags}`;
    window.open(twitterUrl, "_blank");
  };
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
        <div>
          <IconButton onClick={tweetfunc}>
            <TwitterIcon fontSize="small" style={{ color: "white" }} />
          </IconButton>
        </div>
      </div>

      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(capsule._id);
            handleModal(true);
            showNav(false);
          }}
        >
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

        <Button
          size="small"
          style={{ color: "gray" }}
          onClick={() => dispatch(deleteCapsule(capsule._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Capsule;
