import React from "react";
import "../App.css";
import Axios from "axios";
import { styled } from "@mui/material/styles";
import { Container, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Day8() {
  const [search, setSearch] = React.useState("");
  const [dataGet, setDataGet] = React.useState([]);
  const [taskCount, setTaskCount] = React.useState(1);
  
  React.useEffect(() => {
    getData();
  }, []);
 
  const getData = async () => {
    try {
      let response = await Axios.get(`https://localhost:44365/api/RealDB/GetProducAdapter?name=${search}`);
      console.log('%cDay8.js line:36 response', 'color: #007acc;', response);
      setDataGet([...response.data])
    } catch (error) {
      console.log('%cDay8.js line:37 error', 'color: #007acc;', error);
    }
  };
  //https://bobbyhadz.com/blog/react-get-input-value
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('%cDay8.js line:45 e.target.value', 'color: #007acc;', e.target.getAttribute('id'));
    // console.log(e.target.name)
    // Array.from(Array(taskCount).keys()).map((item, index) =>{
    //   console.log('%cDay8.js line:47 e.target.name.value', 'color: #007acc;', e.target.name.value);
    //   if(e.target.name == `task_${index+1}`){
    //     console.log('%cDay8.js line:48 e.target.name.value', 'color: #007acc;', e.target.name.value);
    //   }
    // })

    // let dataSubmit = {
    //   "pk_user_id": 0,
    //   "name": e.target.name.value,
    //   "products": [
    //     {
    //       "pk_product_id": 0,
    //       "product_name": "string",
    //       "fk_user_id": 0
    //     }
    //   ]
    // }
    // try {
    //   let response = Axios.post("https://localhost:44365/api/RealDB/InsertUserWithProduct",dataSubmit)
    //   console.log('%cDay8.js line:67 response', 'color: #007acc;', response);
    // } catch (error) {
    //   console.log('%cDay8.js line:68 error', 'color: #007acc;', error);
    // }
  }
  return (
    <div className="App">
      <Container maxWidth="xl" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper>
              <Typography>Get Data</Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                spacing={2}
                sx={{ padding: 4 }}
              >
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <Button
                  onClick={() => {
                    getData();
                  }}
                >
                  Search
                </Button>
              </Stack>

              <List>
                {dataGet.map((item, index) => (
                  <Item sx={{ margin: "0 20px 10px" }} key={index + "dataget"}>
                    <ListItem>
                      <ListItemText primary={item.product_name} />
                    </ListItem>
                  </Item>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Typography>Post Data</Typography>
              <form onSubmit={handleSubmit}>
              <Stack sx={{ padding: "20px" }} spacing={2}>
                <TextField
                  id="name"
                  label="name"
                  variant="standard"
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                />

                {Array.from(Array(taskCount).keys()).map((item, index) => (
                  <TextField
                    key={`task-${index}`}
                    id={`task_${index+1}`}
                    label={`task ${index + 1}`}
                    variant="standard"
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                  />
                ))}

                <Button variant="outlined" onClick={()=>setTaskCount((prev)=>prev+1)}>Add more task</Button>

                <Button variant="contained" type="submit">Submit</Button>
              </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Day8;
