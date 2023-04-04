const mongoose = require("mongoose");
const calculteSchema = mongoose.Schema({
    annualInstalmentAmount: {
        type: Number,
        required: true,
      },
      annualInterestRate: {
        type: Number,
        required: true,
      },
      totalNumYears: {
        type: Number,
        required: true,
      },
      totalInvestmentAmount: {
        type: Number,
      },
      totalInterestGained: {
        type: Number,
      },
      maturityValue: {
        type: Number,
      },
});
const calculateModel = mongoose.model("calculate", calculteSchema);
module.exports = { calculateModel };