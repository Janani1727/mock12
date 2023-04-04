const express = require("express");

const { calculateModel } = require("../model/calculate.model");

const calculateRouter = express.Router();

calculateRouter.post("/calculate", async (req, res) => {
  try {
    const { annualInstalmentAmount, annualInterestRate, totalNumYears } =
      req.body;
    const rateOfInterest = annualInterestRate / 100;
    const totalInvestmentAmount = annualInstalmentAmount * totalNumYears;
    const maturityValue =
      annualInstalmentAmount *
      ((Math.pow(1 + rateOfInterest, totalNumYears) - 1) / rateOfInterest);
    const totalInterestGained = maturityValue - totalInvestmentAmount;
    const calculation = new calculateModel({
      annualInstalmentAmount,
      annualInterestRate,
      totalNumYears,
      totalInvestmentAmount,
      totalInterestGained,
      maturityValue,
    });

    await calculation.save();

    res.json(calculation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { calculateRouter };
