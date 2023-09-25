// according to chatgpt
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://local-choice:gSCbdkmjwtYgeCGa@cluster0.exgtxpx.mongodb.net/local_choice?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const paymentSchema = new mongoose.Schema({
  amount: Number,
  paymentMethod: String,
  // Other payment-related fields
});

const Payment = mongoose.model("Payment", paymentSchema);

// Inside the webhook handler
// Create a new Payment document and save it to MongoDB
const payment = new Payment({
  amount: paymentIntent.amount / 100, // Convert from cents to dollars
  paymentMethod: paymentIntent.payment_method_types[0], // Assuming the first payment method is the primary one
  // Set other payment-related fields as needed
});

await payment.save();
