import React, { useState } from "react";
import { FormLabel, TextField, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import Box from "@mui/material/Box";
import axios from "axios";

const Create = () => {
  const [inputs, setInputs] = useState({
    name: "",
    title: "",
    text: "",
    tags: "",
    selectFile: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const sendRequest = async () => {
    axios.post("http://localhost:8000/posts", {
      name: String(inputs.name),
      title: String(inputs.name),
      text: String(inputs.text),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent="center"
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>

        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        ></TextField>

        <FormLabel>Title</FormLabel>
        <TextField
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="title"
        ></TextField>

        <FormLabel>Text</FormLabel>
        <TextField
          value={inputs.text}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="text"
        ></TextField>

        <FormLabel>Tags</FormLabel>
        <TextField
          value={inputs.tags}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="tags"
        ></TextField>
        <div style={{ width: "97%", margin: "10px 0" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setInputs({ ...inputs, selectFile: base64 })
            }
          />
        </div>
        <Button
          variant="contained"
          size="large"
          type="submit"
          fullWidth="true"
          style={{ backgroundColor: "#9b5de5", color: "white" }}
        >
          Create
        </Button>
      </Box>
    </form>
  );
};

export default Create;
