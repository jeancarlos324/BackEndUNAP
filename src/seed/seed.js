const Profile = require("../models/profile.models");
const initModels = require("../models/initModels");
const User = require("../models/user.models");
const Admission = require("../models/admission.models");
const Address = require("../models/address.models");
const College = require("../models/college.models");
const School = require("../models/school.models");
const db = require("../utils/db");
const UserData = require("../models/userInfo.models");

const users = [
  {
    documentIdentity: "12312312",
    typeIdentity: "DNI",
    email: "maria@gmail.com",
    password: "1234",
  },
  {
    documentIdentity: "321321212",
    typeIdentity: "DNI",
    email: "maria2212@gmail.com",
    password: "1234",
  },
  {
    documentIdentity: "21212121",
    typeIdentity: "PASSPORT",
    email: "maria3@gmail.com",
    password: "1234",
  },
];
const usersData = [
  {
    documentIdentity: "75843254",
    typeIdentity: "DNI",
    email: "afloreso@est.unap.edu.pe",
    firstName: "Andre",
    lastName: "Flores Oquendo",
  },
  {
    documentIdentity: "75089499",
    typeIdentity: "DNI",
    email: "mparil@est.unap.edu.pe",
    firstName: "Maryluz",
    lastName: "Pari Laura",
  },
  {
    documentIdentity: "21212121",
    typeIdentity: "PASSPORT",
    email: "azapanac@est.unap.edu.pe",
    firstName: "Anthuane",
    lastName: "Zapana Canaza",
  },
];
const profiles = [
  {
    firstName: "Jose",
    lastName: "Perez",
    gender: "Masculino",
    phone: "1231231232",
    codORCID: "asdasd1",
    dateBirth: "12/12/2012",
    disability: "Manco",
    userId: 1,
  },
  {
    firstName: "Jose2",
    lastName: "Perez2",
    gender: "Masculino",
    phone: "1231231233",
    codORCID: "asdasd2",
    dateBirth: "12/12/2012",
    disability: "Manco",
    userId: 2,
  },
  {
    firstName: "Jose3",
    lastName: "Perez3",
    gender: "Masculino",
    phone: "1231231235",
    codORCID: "asdasd3",
    dateBirth: "12/12/2012",
    disability: "Manco",
    userId: 3,
  },
];

const admissions = [
  {
    admissionMode: "GENERAL",
    studyProgram: "MAESTRIA",
    processType: "NORMAL",
    userId: 1,
  },
  {
    admissionMode: "GENERAL",
    studyProgram: "MAESTRIA",
    processType: "NORMAL",
    userId: 2,
  },
  {
    admissionMode: "GENERAL",
    studyProgram: "MAESTRIA",
    processType: "NORMAL",
    userId: 3,
  },
];

const addresses = [
  {
    country: "PERU",
    codUbigeo: "210101",
    department: "PUNO",
    province: "PUNO",
    district: "PUNO",
    userId: 1,
  },
  {
    country: "PERU",
    codUbigeo: "210101",
    department: "PUNO",
    province: "PUNO",
    district: "NORMAL",
    userId: 2,
  },
  {
    country: "PERU",
    codUbigeo: "210101",
    department: "PUNO",
    province: "PUNO",
    district: "PUNO",
    userId: 3,
  },
];
const colleges = [
  { name: "FIE", userId: 1 },
  { name: "FICA", userId: 2 },
  { name: "FIMMES", userId: 3 },
];
const schools = [
  { name: "ESPIE", collegeId: 1 },
  { name: "EPIC", collegeId: 2 },
  { name: "EPIS", collegeId: 3 },
];

initModels();

db.sync({ force: true })
  .then(() => {
    console.log("seeding start");

    users.forEach(async (user) => await User.create(user));

    setTimeout(() => {
      profiles.forEach(async (profile) => await Profile.create(profile));
      console.log("add users");
    }, 100);

    setTimeout(() => {
      admissions.forEach(
        async (admission) => await Admission.create(admission)
      );
      console.log("add addmissions");
    }, 200);

    setTimeout(() => {
      addresses.forEach(async (address) => await Address.create(address));
      console.log("add addresses");
    }, 300);

    setTimeout(() => {
      colleges.forEach(async (college) => await College.create(college));
      console.log("add colleges");
    }, 400);

    setTimeout(() => {
      schools.forEach(async (school) => await School.create(school));
      console.log("add schools");
    }, 500);

    setTimeout(() => {
      usersData.forEach(async (user) => await UserData.create(user));
      console.log("add users data");
    }, 600);
  })
  .finally(() => {
    console.log("seeding stop");
  });
