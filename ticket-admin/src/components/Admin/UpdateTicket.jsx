import axios from "axios";
import { toast } from "react-toastify";
import React, { useEffect, useRef, useState } from "react";
import { Button, CardContent, CircularProgress, Grid, MenuItem } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { ticketSchema } from "../config/constant";

const UpdateTicket = ({ item }) => {

  const qy = document.querySelector.bind(document);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const closeRef = useRef(null)

  const getData = () => {
    setLoading(true)
    setData(item)
    setLoading(false)
  }

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

    axios.post(`${process.env.REACT_APP_API_URL}/events/update/`, body, {
      headers: { "Content-Type": "application/json" },
    }).then((res) => console.log(res))
    .catch(err => console.log(err))
  };

  useEffect(() => {
    getData()
  }, [item?.id])

  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Update Ticket
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
                onClick={() => setTimeout(() => {setData(null)}, 100)}
              ></button>
            </div>

            <div class="modal-body m-0 p-0">
              {
                data ?
                <div className="d-flex justify-content-center flex-column">
                  <div className="card py-2">
                    <CardContent style={{ padding: "15px 5%" }}>
                      <Formik initialValues={data}
                        validationSchema={ticketSchema}
                        onSubmit={(values) => {
                          submit(values);
                        }}
                      >
                        {({ values, errors, isSubmitting }) => (
                          <Form autoComplete="off">
                            <Grid container direction="column" spacing={2}>
                              <Grid item container spacing={2} xs={12}>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    variant="standard"
                                    name="name"
                                    component={TextField}
                                    label="Name"
                                    defaultValue={data?.name}
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    select
                                    variant="standard"
                                    name="topic"
                                    component={TextField}
                                    label="Select topic"
                                    defaultValue={data?.topic}
                                  >
                                    <MenuItem value="">nnsdas</MenuItem>
                                    <MenuItem value="dfsd">naansdas</MenuItem>
                                  </Field>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    className="mt-3"
                                    fullWidth
                                    type="date"
                                    variant="standard"
                                    name="date"
                                    component={TextField}
                                    defaultValue={data?.date?.slice(0, 10)}
                                    // label="Date"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    variant="standard"
                                    name="place"
                                    component={TextField}
                                    defaultValue={data?.place}
                                    label="Place"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    variant="standard"
                                    name="number_of_seats"
                                    component={TextField}
                                    defaultValue={data?.number_of_seats}
                                    label="Number of seats"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    variant="standard"
                                    name="ticket_price"
                                    component={TextField}
                                    defaultValue={data?.ticket_price}
                                    label="Ticket price"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    select
                                    variant="standard"
                                    name="currency"
                                    component={TextField}
                                    defaultValue={data?.currency}
                                    label="Select currency"
                                  >
                                    <MenuItem value="">nnsdas</MenuItem>
                                    <MenuItem value="dfsd">naansdas</MenuItem>
                                  </Field>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <Field
                                    fullWidth
                                    type="text"
                                    variant="standard"
                                    name="thumbnail"
                                    id="file" disabled
                                    component={TextField}
                                    defaultValue={data?.thumbnail}
                                    label="Thumbnail"
                                  />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                  <Field
                                    fullWidth
                                    variant="standard"
                                    name="description"
                                    component={TextField}
                                    defaultValue={data?.description}
                                    label="Description"
                                  />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                  <Button
                                    className="float-end mt-2"
                                    disabled={loading}
                                    type="submit"
                                    variant="contained"
                                    startIcon={
                                      loading ? (
                                        <CircularProgress size="0.9rem" />
                                      ) : undefined
                                    }
                                  >
                                    Update
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Form>
                        )}
                      </Formik>
                    </CardContent>
                  </div>
                </div> : ""
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTicket;
