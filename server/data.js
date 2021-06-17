import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Shuvro",
      email: "shuvro@admin.com",
      password: bcrypt.hashSync("alena123", 8),
      isAdmin: true,
    },

    {
      name: "Tester",
      email: "tester@admin.com",
      password: bcrypt.hashSync("tester123", 8),
      isAdmin: true,
    },
  ],
  bookings: [
    {
      name: "Shuvro",
      mobilenumber: 4556555,
      birthdate: "24.02.1986",
      age: "24",
      photoidproof: "pan card",
      idproofnumber: "adsds5454",
      sideinfo: "bp sugar",
      hoslocation: "B.M.R.C. Hospitals Ltd",
    },

    {
      name: "adrija das",
      mobilenumber: 455652878,
      birthdate: "24.02.1986",
      age: "24",
      photoidproof: "pan card",
      idproofnumber: "adsds5454",
      sideinfo: "bp sugar",
      hoslocation: "S>K>S>KM. Hospitals Ltd",
    },
  ],
};

export default data;
