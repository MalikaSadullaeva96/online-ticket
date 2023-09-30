import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Button, CardContent, CircularProgress, Grid, MenuItem } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { emptyTicketValue, ticketSchema } from "../config/constant";

const CreateItems = () => {
 
  const qy = document.querySelector.bind(document);
  const [loading, setLoading] = useState(false);

  const submit = (value) => {

    const body = new FormData()
    body.append("name", value.name)
    body.append("topic", value.topic)
    body.append("date", value.date)
    body.append("place", value.place)
    body.append("currency", value.currency)
    body.append("number_of_seats", value.number_of_seats)
    body.append("ticket_price", value.ticket_price)
    body.append("thumbnail", qy("#file").files[0])
    body.append("description", value.description)

    axios.post(`${process.env.REACT_APP_API_URL}/events/create/`, body, {
      headers: { "Content-Type": "application/json" },
    }).then((res) => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <main className="container px-1 px-lg-5">
      <div className="d-flex justify-content-center flex-column container py-4">
        <div className="card py-2">
          <h4 className="text_title">Create ticked</h4>
          <CardContent style={{ padding: "15px 5%" }}>
            <Formik initialValues={emptyTicketValue} validationSchema={ticketSchema} onSubmit={(values) => {submit(values)}}>
              {({ values, errors, isSubmitting }) => (
                <Form autoComplete="off">
                  <Grid container direction="column" spacing={2}>
                    <Grid item container spacing={2} xs={12} >
                      <Grid item xs={12} sm={6}>
                        <Field fullWidth
                          variant="standard"
                          name="name"
                          component={TextField}
                          disabled={loading}
                          label="Name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field fullWidth select
                          variant="standard"
                          name="topic"
                          component={TextField}
                          disabled={loading}
                          label="Select topic"
                        >
                          <MenuItem value="">nnsdas</MenuItem>
                          <MenuItem value="dfsd">naansdas</MenuItem>
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field className="mt-3" fullWidth type="date"
                          variant="standard"
                          name="date"
                          component={TextField}
                          disabled={loading}
                          // label="Date"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field fullWidth
                          variant="standard"
                          name="place"
                          component={TextField}
                          disabled={loading}
                          label="Place"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field fullWidth
                          variant="standard"
                          name="number_of_seats"
                          component={TextField}
                          disabled={loading}
                          label="Number of seats"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field fullWidth
                          variant="standard"
                          name="ticket_price"
                          component={TextField}
                          disabled={loading}
                          label="Ticket price"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field fullWidth select
                          variant="standard"
                          name="currency"
                          component={TextField}
                          disabled={loading}
                          label="Select currency"
                        >
                          <MenuItem value="">nnsdas</MenuItem>
                          <MenuItem value="dfsd">naansdas</MenuItem>
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field fullWidth type="file"
                          variant="standard"
                          name="thumbnail" id="file"
                          component={TextField}
                          disabled={loading}
                          label="Thumbnail"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Field fullWidth
                          variant="standard"
                          name="description"
                          component={TextField}
                          disabled={loading}
                          label="Description"
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={12}>
                        <Button
                          className="float-end mt-2"
                          disabled={loading}
                          type="submit"
                          variant="contained"
                          startIcon={ loading ? (<CircularProgress size="0.9rem" />) : undefined }
                        >{loading ? "Saving" : "Save"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </CardContent>
        </div>
      </div>
    </main>
  );
};

export default CreateItems;
