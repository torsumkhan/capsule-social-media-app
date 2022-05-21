import React, { useEffect } from "react";
import { Avatar, Grid, Paper, Container } from "@material-ui/core";
import moment from "moment";
import "./styles.css";

const Comments = ({ commentList }) => {
  return (
    <Container>
      <div style={{ margin: "2.4rem" }} className="comment-div">
        <h2>Comments</h2>
        {commentList.map((comment) => {
          return (
            <Paper style={{ padding: "40px 20px", margin: "16px" }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <p style={{ textAlign: "left" }}>{comment}</p>
                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted {moment().fromNow()}
                  </p>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </div>
    </Container>
  );
};

export default Comments;
