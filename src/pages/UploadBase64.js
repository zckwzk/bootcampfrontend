import React from "react";
import { Container, Paper, Typography } from "@mui/material";
function UploadBase64() {
  const [imageRaw, setImageRaw] = React.useState(null);
  const [imageBase64, setImageBase64] = React.useState("");
  const onPickImage = (e) => {
    const tempImg = e.target.files[0];
    setImageRaw(tempImg);

    //convert to base64
    let reader = new FileReader();
    reader.onload = function(){
        console.log(reader.result);
        setImageBase64(reader.result)
    }
    reader.onerror = function(err){
        console.log(err)
    }

    reader.readAsDataURL(tempImg);
  };
  return (
    <Container maxWidth="lg">
      <Paper sx={{ margin: "20px", padding: "20px" }}>
        <Typography>Upload File</Typography>
        <input type="file" accept="image/*" onChange={onPickImage} />
        <img src={imageBase64} />
      </Paper>
    </Container>
  );
}

export default UploadBase64;
