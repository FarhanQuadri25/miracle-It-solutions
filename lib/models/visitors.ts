import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVisitor extends Document {
  count: number;
  lastUpdated: Date;
}

const VisitorSchema = new Schema<IVisitor>(
  {
    count: {
      type: Number,
      default: 0,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Visitor: Model<IVisitor> =
  mongoose.models.Visitor || mongoose.model<IVisitor>("Visitor", VisitorSchema);

export default Visitor;
