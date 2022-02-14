import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import Loading from '../components/Loading';
import Button from '../components/Button';
import './NewEmployeePage.scss';

const UpdateEmployeePage = (props) => {
  const employeeId = useParams().id;
  const history = useHistory();
  const [chargingData, setChargingData] = useState(true)
  const [employeeDoesntExist, setEmployeeDoesntExist] = useState(false)
  const [name, setName] = useState();
  const [nameError, setNameError] = useState(false);
  const [nameMessage, setnameMessage] = useState("");
  const [lastname, setLastname] = useState();
  const [lastnameError, setLastnameError] = useState(false);
  const [lastnameMessage, setLastnameMessage] = useState("");
  const [age, setAge] = useState();
  const [ageError, setAgeError] = useState(false);
  const [ageMessage, setAgeMessage] = useState("");
  const [position, setPosition] = useState();
  const [positionError, setPositionError] = useState(false);
  const [positionMessage, setPositionMessage] = useState("");
  const [gender, setGender] = useState();
  const [genderError, setGenderError] = useState(false);
  const [genderMessage, setGenderMessage] = useState("");
  const [civil, setCivil] = useState();
  const [civilError, setCivilError] = useState(false);
  const [civilMessage, setCivilMessage] = useState("");
  const [address, setAddress] = useState();
  const [addressError, setAddressError] = useState(false);
  const [addressMessage, setAddressMessage] = useState("");
  const [highestDegree, setHighestDegree] = useState();
  const [highestDegreeError, setHighestDegreeError] = useState(false);
  const [highestDegreeMessage, setHighestDegreeMessage] = useState("");
  const [profession, setProfession] = useState();
  const [professionError, setProfessionError] = useState(false);
  const [professionMessage, setProfessionMessage] = useState("");
  const [experience, setExperience] = useState();
  const [experienceError, setExperienceError] = useState(false);
  const [experienceMessage, setExperienceMessage] = useState("");
  const [languages, setLanguages] = useState();
  const [languagesError, setLanguagesError] = useState(false);
  const [languagesMessage, setLanguagesMessage] = useState("");

  const handleChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    if (input === "name") {
      setName(value);
    } else if (input === "lastname") {
      setLastname(value)
    } else if (input === "age") {
      setAge(value)
    } else if (input === "position") {
      setPosition(value)
    } else if (input === "gender") {
      setGender(value)
    } else if (input === "civil") {
      setCivil(value)
    } else if (input === "address") {
      setAddress(value)
    } else if (input === "highestDegree") {
      setHighestDegree(value)
    } else if (input === "profession") {
      setProfession(value)
    } else if (input === "experience") {
      setExperience(value)
    } else if (input === "languages") {
      setLanguages(value)
    }
    setTimeout(() => {
      validateInput(input, value)
    }, 1000)
  }

  const validateInput = (input, value) => {
    let hasError = false,
      error = ""
    switch (input) {
      case "name":
        if (value.trim() === "") {
          setNameError(true)
          setnameMessage("*Firstame cannot be empty")
        }
        else {
          setNameError(false)
          setnameMessage("")
        }
        break
      case "lastname":
        if (value.trim() === "") {
          setLastnameError(true)
          setLastnameMessage("*Lastname cannot be empty")
        }
        else {
          setLastnameError(false)
          setLastnameMessage("")
        }
        break
      case "image":
        break
      case "age":
        if (value.trim() === "") {
          setAgeError(true)
          setAgeMessage("*Age cannot be empty")
        }
        else {
          setAgeError(false)
          setAgeMessage("")
        }
        break
      case "position":
        if (value.trim() === "") {
          setPositionError(true)
          setPositionMessage("*Position cannot be empty")
        }
        else {
          setPositionError(false)
          setPositionMessage("")
        }
        break
      case "gender":
        if (value.trim() === "") {
          setGenderError(true)
          setGenderMessage("*Gender cannot be empty")
        }
        else {
          setGenderError(false)
          setGenderMessage("")
        }
        break
      case "civil":
        if (value.trim() === "") {
          setCivilError(true)
          setCivilMessage("*Civil status Cannot be empty")
        }
        else {
          setCivilError(false)
          setCivilMessage("")
        }
        break
      case "address":
        if (value.trim() === "") {
          setAddressError(true)
          setAddressMessage("*Address cannot be empty")
        }
        else {
          setAddressError(false)
          setAddressMessage("")
        }
        break
      case "highestDegree":
        if (value.trim() === "") {
          setHighestDegreeError(true)
          setHighestDegreeMessage("*Highest degree cannot be empty")
        }
        else {
          setHighestDegreeError(false)
          setHighestDegreeMessage("")
        }
        break
      case "profession":
        if (value.trim() === "") {
          setProfessionError(true)
          setProfessionMessage("*Profession cannot be empty")
        }
        else {
          setProfessionError(false)
          setProfessionMessage("")
        }
        break
      case "experience":
        if (value.trim() === "") {
          setExperienceError(true)
          setExperienceMessage("*Experience cannot be empty")
        }
        else {
          setExperienceError(false)
          setExperienceMessage("")
        }
        break
      case "languages":
        if (value.trim() === "") {
          setLanguagesError(true)
          setLanguagesMessage("*Languages cannot be empty")
        }
        else {
          setLanguagesError(false)
          setLanguagesMessage("")
        }
        break
      default:
        break
    }
    return { hasError, error }
  }

  const employeeUpdateSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameError && !lastnameError && !ageError && !positionError) {
      const updatedDetails = {
        name: name,
        lastname: lastname,
        age: age,
        position: position,
        gender: gender,
        civil: civil,
        address: address,
        highestDegree: highestDegree,
        profession: profession,
        experience: experience,
        languages: languages,
      }
      sendUpdatedData(updatedDetails);
    }
  }

  const sendUpdatedData = async (updatedEmployee) => {
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/employees/${employeeId}`, updatedEmployee);
    } catch (error) {
      if (error.response.status === 404 || error.response.status === 400) {
        setEmployeeDoesntExist(true);
      } else {
        console.log('the server explode!!')
      }
    }
    props.refreshDom();
    setTimeout(() => {
      history.push('/')
    }, 2000);
  }


  useEffect(() => {
    async function searchEmployee() {
      try {
        const { data: employee } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/employees/${employeeId}`);
        setName(employee.name);
        setLastname(employee.lastname);
        setAge(employee.age);
        setPosition(employee.position);
        setCivil(employee.civil);
        setGender(employee.gender);
        setAddress(employee.address);
        setHighestDegree(employee.highestDegree);
        setProfession(employee.profession);
        setExperience(employee.experience);
        setLanguages(employee.languages);
        setChargingData(false);
      } catch (error) {
        if (error.response.status === 404 || error.response.status === 400) {
          setEmployeeDoesntExist(true);
        } else {
          console.log('the server explode!!')
        }
        setChargingData(false);
      }
    }
    searchEmployee();
  }, [])

  if (employeeDoesntExist) {
    return (
      <div className='page-margin'>
        <div className='page-space'>
          <p>Could not find employee!</p>
        </div>
      </div>
    )
  }

  if (chargingData) {
    return (
      <div className='page-margin'>
        <div className="page-space">
          <Loading />
        </div>
      </div>
    )
  }
  return (
    <div className='page-margin'>
      <div className='page-space'>
        <form className='form-container'
          onSubmit={employeeUpdateSubmitHandler}>
          <h1 className='align-title form-title'>Update Info</h1>
          <div className='inputs-container'>
            <input
              placeholder='Firstname'
              name="name"
              className='form-input'
              defaultValue={name}
              onChange={handleChange}
              maxLength="20"
            />
            {nameError && (
              <p className='form-error'>{nameMessage}</p>
            )}
            <input
              placeholder='Lastname'
              name="lastname"
              className='form-input'
              defaultValue={lastname}
              onChange={handleChange}
              maxLength="20"
            />
            {lastnameError && (
              <p className='form-error'>{lastnameMessage}</p>
            )}
            <input
              placeholder='Gender'
              name="gender"
              className='form-input'
              value={gender}
              onChange={handleChange}
              maxLength="10"
            />
            {genderError && (
              <p className='form-error'>{genderMessage}</p>
            )}
            <input
              placeholder='Age'
              name="age"
              type="number"
              className='form-input'
              defaultValue={age}
              onChange={handleChange}
            />
            {ageError && (
              <p className='form-error'>{ageMessage}</p>
            )}
            <input
              placeholder='Civil Status'
              name="civil"
              className='form-input'
              value={civil}
              onChange={handleChange}
              maxLength="20"
            />
            {civilError && (
              <p className='form-error'>{civilMessage}</p>
            )}
            <input
              placeholder='Address'
              name="address"
              className='form-input'
              value={address}
              onChange={handleChange}
            />
            {addressError && (
              <p className='form-error'>{addressMessage}</p>
            )}
            <input
              placeholder='Job position'
              name="position"
              className='form-input'
              defaultValue={position}
              onChange={handleChange}
            />
            {positionError && (
              <p className='form-error'>{positionMessage}</p>
            )}
            <input
              placeholder='Highest Degree'
              name="highestDegree"
              className='form-input'
              value={highestDegree}
              onChange={handleChange}
              maxLength="30"
            />
            {highestDegreeError && (
              <p className='form-error'>{highestDegreeMessage}</p>
            )}
            <input
              placeholder='Profession'
              name="profession"
              className='form-input'
              value={profession}
              onChange={handleChange}
              maxLength="30"
            />
            {professionError && (
              <p className='form-error'>{professionMessage}</p>
            )}
            <input
              placeholder='Years of experience'
              name="experience"
              type="number"
              className='form-input'
              value={experience}
              onChange={handleChange}
              maxLength="5"
            />
            {experienceError && (
              <p className='form-error'>{experienceMessage}</p>
            )}
            <input
              placeholder='Languages'
              name="languages"
              className='form-input'
              value={languages}
              onChange={handleChange}
              maxLength="50"
            />
            {languagesError && (
              <p className='form-error'>{languagesMessage}</p>
            )}
            <Button type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateEmployeePage;
