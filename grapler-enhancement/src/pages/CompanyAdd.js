import React from 'react';
import { Formik, Form, Field } from 'formik';
import { addCompanyApi } from '../api/api';
import { addCompany } from '../slices/companySlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompanyAdd = () => {
    const dispatch = useDispatch() ; 
    const navigate = useNavigate() ; 
    async function handleaddCompany(company ){

        console.log(company) ; 
        const respone = await  addCompanyApi(1 , company) ; 
        console.log(respone.data ) ;
        dispatch(addCompany(respone.data) ) ; 
        navigate(`/company`) ; 
    }
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Company</p>
                    <h2>Add New Owner</h2>
                    <Formik
      initialValues={{
        // id : "" , 
        name : "" ,
        email : "" ,
        description : ""  ,
        address : "",
        contactNumber : "" ,
        structureType : "",
      }}
      onSubmit={(values) => {
        console.log(values) ; 
        //updateCompany(values  ) ; 
        handleaddCompany(values);
      }}
    >
      <Form className="custom-form">
        <div className="form-group">
          <label htmlFor="name">Company Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field
            as="textarea"
            id="description"
            name="description"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <Field type="text" id="address" name="address" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <Field
            type="text"
            id="contactNumber"
            name="contactNumber"
            className="form-control"
            pattern="\d{10}"
            required
          />
        </div>

        <div className="form-group">
            <label htmlFor="structureType">Structure Type</label>
            <Field as="select" id="structureType" name="structureType" className="form-control" defaultValue="HIERARCHICAL" required>
                <option value="">Select an option</option>
                <option value="HIERARCHICAL">Hierarchical</option>
                <option value="NONHIERARCHICAL">NonHierarchical</option>
                {/* Add other structure types as options here */}
            </Field>
        </div>
        <br/><br/> 
        <button type="submit"  className="btn btn-primary">Add Company</button><br/><br/> 
        <button onClick={() => navigate(-1) }className="btn btn-primary">Go Back </button>
      </Form>
      
    </Formik>
                    
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
export default CompanyAdd;