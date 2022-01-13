export default function FormValidation(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = "Name required";
    }
  
    if (!values.lastname.trim()) {
      errors.lastname = "Lastname required";
    }

    if (!values.age.trim()) {
        errors.age = "Age required";
    }

    if (!values.position.trim()) {
        errors.position = "Position required";
      }
  
    // if (!values.email) {
    //   errors.email = "Email required";
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = "Email address is invalid";
    // }
  
    return errors;
  }