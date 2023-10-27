import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompany } from '../slices/companySlice';
import { updateCompanyApi } from '../api/api';


function CompanyUpdate() {
    
    const dispatch = useDispatch() ; 
    const { companies } = useSelector((state) => state.companylist);
  
    const queryParams = new URLSearchParams(window.location.search) ; 
    const companyId= queryParams.get("id") ; 
    console.log("insdie companyUpdate " , companyId) ; 
    const  company  = companies.find(comp => comp.id==companyId ); 
    console.log('cc' , company) ; 
    
    
    async function  onSubmit  (values)   {
        console.log(values) ; 
       const response = await  updateCompanyApi(companyId , values) ; 
       console.log("inside " , response.data  ) ; 
       
        dispatch(updateCompany(response.data )) ; 
       //updateCompany(respone.data ) ; 
        //console.log(respone) ; 
    }
  return (
  
    <Formik
      initialValues={{
        id : company.id , 
        name: company.name ,
        email: company.email,
        description: company.description,
        address: company.address,
        contactNumber: company.contactNumber,
        structureType: company.structureType,
      }}
      onSubmit={(values) => {
      //  console.log(values) ; 
        //updateCompany(values  ) ; 
       onSubmit(values);
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
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="structureType">Structure Type</label>
          <Field as="select" readonly id="structureType" name="structureType" className="form-control">
        {/* <option value="NONHIERARCHICAL">NonHierarchical</option> 
            {/* Add other structure types as options here 
          </Field>
        </div> */}
        <br/><br/> 
        <button type="submit" className="btn btn-primary">Update Company</button>
      </Form>
    </Formik>

  )
}

export default CompanyUpdate
