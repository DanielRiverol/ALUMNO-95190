import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true, index: true },

  //   asociacion
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, //hay que prestar atencion
});


// hookSchema
productSchema.pre(/^find/,function(){
    this.populate("seller", "name email")
})

export const Product = mongoose.model("Product", productSchema);
