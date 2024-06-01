import * as Yup from "yup";


// Common fields
const commonFields = {
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.string()
    .matches(/^[0-9]+$/, "Price must contain only numbers")
    .required("Price is required"),
    filename: Yup.mixed().required("Images is required"),
    files: Yup.array()
    .of(
      Yup.mixed().test(
        "fileType",
        "Only images (jpeg, jpg, png, gif) are allowed",
        (value) => {
          return value && ["jpeg", "jpg", "png", "gif"].includes(value.type.split("/")[1].toLowerCase());
        }
      )
    )
    .min(1, 'At least one image is required')
};

// Schema for land-specific fields
const landSchema = Yup.object().shape({
  ...commonFields,
  size: Yup.string()
  .matches(/^[0-9]+$/, "Size must contain only numbers")
  .required("Size is required"),
  location: Yup.string().required("Location is required"),
  landType: Yup.string().required("Land Type is required"),
  ownershipType: Yup.string().required("Ownership Type is required"),
});

// Schema for house-specific fields
const houseSchema = Yup.object().shape({
  ...commonFields,
  area: Yup.string().required("Area is required"),
  bedrooms: Yup.string().required("Bedrooms are required"),
  houseType: Yup.string().required("House Type is required"),
  bathrooms: Yup.string().required("Bathrooms are required"),
  location: Yup.string().required("Location is required"),
  floors: Yup.string()
  .matches(/^[0-9]+$/, "Floors must contain only numbers")
  .required("Floors are required"),
});

// Schema for vehicle-specific fields
const vehicleSchema = Yup.object().shape({
  ...commonFields,
  vehicleType: Yup.string().required("Vehicle Type is required"),
  brand: Yup.string().required("Brand is required"),
  model: Yup.string().required("Model is required"),
  seats: Yup.string()
  .matches(/^[0-9]+$/, "Seats must contain only numbers")
  .required("Seats are required"),
  mileage: Yup.string()
  .matches(/^[0-9]+$/, "Mileage must contain only numbers")
  .required("Mileage is required"),
  yearOfProduction: Yup.string()
  .matches(/^[0-9]+$/, "Year of Production must contain only numbers")
  .required("Year of Production is required"),
  cc: Yup.string()
  .matches(/^[0-9]+$/, "CC must contain only numbers")
  .required("CC is required"),
  condition: Yup.string().required("Condition is required"),
});

// Function to get schema based on property type
const getSchema = (propertyType) => {
  switch (propertyType) {
    case "land":
      return landSchema;
    case "houses":
      return houseSchema;
    case "vehicle":
      return vehicleSchema;
    default:
      return Yup.object().shape(commonFields);
  }
};

export { getSchema };
