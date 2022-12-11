import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "../main.css";
import { useState } from "react";
import axios from 'axios';

function AddProperty() {
  const [title,setTitle] = useState("");
  const [description, setDescription]= useState("");
  const [img, setImg] = useState("");
  const [nightlyFee, setNightlyfee] = useState("");
  const [serviceFee, setServicefee] = useState("");
  const [amenities, setAmenities] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [guests, setGuests] = useState("");
  const [availabilityFrom, setAvailibilityfrom] = useState("");
  const [availabilityTo, setAvailibilityto] = useState("");
  const [propertyType, setPropertyType] = useState("");
 
  const settitle = (e)=>{
   const {value} = e.target;
   setTitle(value);
  }

  const setdescription = (e)=>{
    const {value} = e.target;
    setDescription(value);
   }

   const setimg = (e)=>{
    
    setImg(e.target.files[0]);
   }

   const setnightlyfee = (e)=>{
    const {value} = e.target;
    setNightlyfee(value);
   }
   
   const setservicefee = (e)=>{
    const {value} = e.target;
    setservicefee(value);
   }
   
   const setamenities = (e)=>{
    const {value} = e.target;
    setAmenities(value);
   }

   const setbedrooms = (e)=>{
    const {value} = e.target;
    setBedrooms(value);
   }

   const setguests = (e)=>{
    const {value} = e.target;
    setGuests(value);
   }

   const setavailibilityfrom = (e)=>{
    const {value} = e.target;
    setAvailibilityfrom(value);
   }
   
   const setavailibilityto = (e)=>{
    const {value} = e.target;
    setAvailibilityto(value);
   }

   const setpropertytype = (e)=>{
    const {value} = e.target;
    setPropertyType(value);
   }



   // TODO : this method has to be completed to send request to backend. 
  //  Formdata has to be updated with all the fields
  // just file has been appended. like wise json payload
   
const addPropertydata = async(e)=>{
  e.preventDefault();
  
  var formdata = new FormData();
  formdata.append('imgSrc', img);
  const data = JSON.stringify({
    imgSrc: 'property2.png',
    title: title,
    description: description,
    nightlyFee: nightlyFee,
    serviceFee: serviceFee,
    cleaningFee: 5,
    amenities: amenities,
    bedrooms: bedrooms,
    guests: guests,
    availabilityFrom: availabilityFrom,
    availabilityTo: availabilityTo,
    propertyType: propertyType
    
  })
  
  // append directly as part of the postData in plain text
  formdata.append('data', data);
  
  const config  ={
    headers:{
      "Content-Type": "multipart/form-data"
    }
  }
  const res = axios.post("/properties", formdata, config)
  console.log(res)
}
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="addproperty">
      <Form className="formproperty">
        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Property title</label>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control form-field"
                  type="text"
                  onChange={settitle}
                  name="title"
                  id="title"
                  placeholder="Property title"
                  {...register("title", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.title && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Description</label>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control form-field"
                  type="text"
                  onChange={setdescription}
                  name="description"
                  id="description"
                  placeholder="Description"
                  {...register("description", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.description && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Upload property Images</label>
              </div>
              <div className="col-md-5">
                <input
                  type="file"
                  onChange={setimg}
                  name="img"
                  id="img"
                  accept="image/jpg"
                  {...register("img", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.img && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Per Night Fees</label>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control form-field"
                  type="number"
                  onChange={setnightlyfee}
                  name="nightlyFee"
                  id="nightlyFee"
                  placeholder="in USD"
                  {...register("nightlyFee", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.nightlyFee && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Service Fees</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="number"
                  onChange={setservicefee}
                  name="serviceFee"
                  id="serviceFee"
                  placeholder="in USD"
                  {...register("serviceFee", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.serviceFee && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Amenities</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="text"
                  onChange={setamenities}
                  name="amenities"
                  id="amenities"
                  placeholder="eg. Swimming Pool, Free Parking, etc."
                  {...register("amenities", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.amenities && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Bedrooms</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="number"
                  onChange={setbedrooms}
                  name="bedrooms"
                  id="bedrooms"
                  placeholder="no. of bedrooms"
                  {...register("bedrooms", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.bedrooms && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Guests</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="number"
                  onChange={setguests}
                  name="guests"
                  id="guests"
                  placeholder="maximum of guests allowed per room"
                  {...register("guests", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.guests && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Available from</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="date"
                  onChange={setavailibilityfrom}
                  name="availabilityFrom"
                  id="availabilityFrom"
                  placeholder="Property title"
                  {...register("availabilityFrom", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.availabilityFrom && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Available to</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="date"
                  onChange={setavailibilityto}
                  name="availabilityTo"
                  id="availabilityTo"
                  placeholder="Property title"
                  {...register("availabilityTo", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.availabilityTo && <p>This field is required</p>}
        </div>

        <div className="form-group mb-2 mt-4 signup-form-group">
          <Form.Field>
            <div className="row">
              <div className="col-md-7">
                <label>Property Type</label>
              </div>
              <div className="col-md-5">
                <input
                className="form-control form-field"
                  type="text"
                  onChange={setavailibilityto}
                  name="propertyType"
                  id="propertyType"
                  placeholder="Property type"
                  {...register("propertyType", { required: true })}
                />
              </div>
            </div>
          </Form.Field>
          {errors.propertyType && <p>This field is required</p>}
        </div>

        <div className="text-lg-start mt-4 pt-2">
          <Button type="submit"  onClick={addPropertydata}className="btn loginButton">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddProperty;
