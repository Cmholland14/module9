"use strict";
const axios = require("axios");

// GET random cat fact
const getFact = async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    res.status(200).json({ fact: response.data.fact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET list of cat facts
const getFacts = async (req, res) => {
  try {
    const { limit = 5 } = req.query; // default 5 facts
    const response = await axios.get(`https://catfact.ninja/facts?limit=${limit}`);
    res.status(200).json({ facts: response.data.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET cat breeds
const getBreeds = async (req, res) => {
  try {
    const { limit = 5 } = req.query;
    const response = await axios.get(`https://catfact.ninja/breeds?limit=${limit}`);
    res.status(200).json({ breeds: response.data.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getFact,
  getFacts,
  getBreeds,
};
