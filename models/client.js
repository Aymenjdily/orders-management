import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema({
    name: {
        type: String,
        requied: [true, 'Name is required ! ']
    },
    phone: {
        type: String,
        required: [true, 'Username is required !'],
    },
    email: {
        type: String
    },
    city: {
        type: String,
        required: [true, 'City is required !']
    },
    address: {
        type: String,
        required: [true, "Address is required !"]
    }
})

const Client = models.Client || model('Client', ClientSchema)

export default Client