import { object, string } from "yup";

const allRegEx = /^[A-Za-z0-9'":;$@#&*!?,.-_+=(){}/ ]*$/;

export const emptyTicketValue = {
  name: "",
  topic: "",
  date: "",
  place: "",
  number_of_seats: "",
  ticket_price: "",
  currency: "",
  thumbnail: "",
  description: "",
};

export const ticketSchema = object({
      name: string().matches(allRegEx, { message: "Invalid name" }).required("Name is required"),
      topic: string().required("Topic is required"),
      date: string().required("Date is required"),
      place: string().matches(allRegEx, { message: "Invalid place" }).required("Place is required"),
      number_of_seats: string().required("number of seats is required"),
      ticket_price: string().required("ticket price is required"),
      currency: string().required("Currency is required"),
      thumbnail: string().required("Thumbnail is required"),
      description: string().matches(allRegEx, { message: "Invalid description" }).required("Description is required"),
})