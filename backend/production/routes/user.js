const apiKey = "2sAOJcsJktEfGMMWGQB8Wv4t6KRGdDdQKn6Uz0VShgZn81fS";
const recaptchaKey = "6LdVnqAbAAAAAJUy73bUpOCixIq5spB5hmUNbSW-";
const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const Joi = require("joi");
const mongoose = require("mongoose");

const panel = axios.create({
  baseURL: "https://panel.alveehawak.xyz/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + apiKey,
    cookie:
      "pterodactyl_session=eyJpdiI6InhIVXp5ZE43WlMxUU1NQ1pyNWRFa1E9PSIsInZhbHVlIjoiQTNpcE9JV3FlcmZ6Ym9vS0dBTmxXMGtST2xyTFJvVEM5NWVWbVFJSnV6S1dwcTVGWHBhZzdjMHpkN0RNdDVkQiIsIm1hYyI6IjAxYTI5NDY1OWMzNDJlZWU2OTc3ZDYxYzIyMzlhZTFiYWY1ZjgwMjAwZjY3MDU4ZDYwMzhjOTRmYjMzNDliN2YifQ%253D%253D",
  },
});

router.post("/register", async (req, res) => {
  const user = {
    email: req.body.email,
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  const schema = Joi.object({
    email: Joi.string().email().max(255).required(),
    username: Joi.string().max(50).required(),
    first_name: Joi.string().max(50).required(),
    last_name: Joi.string().max(50).required(),
    password: Joi.string().max(1024).required(),
    recaptcha: Joi.string().required(),
  });
  const { value, error } = schema.validate({
    ...user,
    password: req.body.password,
    recaptcha: req.body.recaptcha,
  });
  if (error) return res.send(error);

  const google = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaKey}&response=${req.body.recaptcha}`
  );
  if (!google.data.success) return res.send("Invalid Recaptcha");
  panel
    .post("application/users", JSON.stringify(user))
    .then((response) =>
      panel
        .patch(
          "application/users/" + response.data.attributes.id,
          JSON.stringify({
            ...user,
            language: response.data.attributes.language,
            password: req.body.password,
          })
        )
        .then((a) => res.send(a.status))
        .catch((b) => res.send(b.message))
    )
    .catch((err) => {
      res.send("User with the same Username or Email Already Exists");
    });
});

router.post("/login", (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  console.log(user);
});

module.exports = router;
