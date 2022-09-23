const initialValues = {
  search: "",
  minAge: "",
  maxAge: "",
  gender: "",
};

const initialFilter = {
  minAge: "",
  maxAge: "",
  gender: "",
};

const listCheckBox = [
  {
    id: 1,
    label: "Female",
    value: "female",
  },
  {
    id: 2,
    label: "Male",
    value: "male",
  },
  {
    id: 3,
    label: "Others",
    value: "others",
  },
];

export { initialValues, initialFilter, listCheckBox };
