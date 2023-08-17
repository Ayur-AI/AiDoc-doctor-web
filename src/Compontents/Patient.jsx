import React from 'react'
import SideBar from './SideBar'
import { useContext } from 'react'
import { contextAPI } from './Context';
import { useParams } from 'react-router-dom'
function Patient() {
  let {id}=useParams()
  const data =useContext(contextAPI)

  return <>
    <SideBar/>
    <div className="p-4 sm:ml-64">
            <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
              {data.users.filter((s)=>{
                if(s.Patient_id===id){
                  return s
                }
              }).map((e)=>{

              return <>
            <div class='patient-information'>
        <p id='Patient-Information'>
          Patient Information
        </p>
        <div class='information'>
          <div>
            <p id='info-t'>
              Name
            </p>
            <p>{e?.PatientDetails?.Name}</p>
          </div>
                <div>
            <p id='info-t'>
              DOB
            </p>
            <p>{e?.PatientDetails?.Birthdate}</p>
          </div> 
                <div>
            <p id='info-t'>
              Email
            </p>
            <p>{e?.PatientDetails?.Email}</p>
          </div>
                <div>
            <p id='info-t'>
              Gender
            </p>
            <p>{e?.PatientDetails?.Gender}</p>
          </div>
          <div>
            <p id='info-t'>
              Height / Weight
            </p>
            <p>{e?.PatientDetails?.Height_Weight}</p>
          </div>
             <div>
             
            <p id='info-t'>
              Contact
            </p>
            <p>{e?.PatientDetails?.Contact}</p>
          </div>
          <div>
            <p id='info-t'>
              Address
            </p>
            <p>{e?.PatientDetails?.Address}</p>
          </div>
          <div>
            <p id='info-t'>
              City/state/Zip
            </p>
            <p>{e?.PatientDetails?.detailedAddress}</p>
          </div>
          <div>
            <p id='info-t'>
              Marital Status
            </p>
            <p>{e?.PatientDetails?.Maritalstatus}</p>
          </div>
          <div>
            <p id='info-t'>
              Occupation
            </p>
            <p>{e?.PatientDetails?.Occupation}</p>
          </div>
          <div>
            <p id='info-t'>
              Employer
            </p>
            <p>{e?.PatientDetails?.Employer}</p>
          </div>
          <div>
            <p id='info-t'>
              Work Phone
            </p>
            <p>{e?.PatientDetails?.Work_phone}</p>
          </div>
          <div>
            <p id='info-t'>
            Emergency contact
            </p>
            <p>{e?.PatientDetails?.Emergency_Phone}</p>
          </div>
          <div>
            <p id='info-t'>
            Phone
            </p>
            <p>{e?.PatientDetails?.Phone}</p>
          </div>
          <div>
            <p id='info-t'>
            Relation
            </p>
            <p>{e?.PatientDetails?.Relation}</p>
          </div>
          <div>
            <p id='info-t'>
            Children’s names/ages
            </p>
            <p>{e?.PatientDetails?.Children_details}</p>
          </div>
          <div>
            <p id='info-t'>
            How did you hear about us
            </p>
            <p>{e?.PatientDetails?.HearAboutus}</p>
          </div>
          <div>
            <p id='info-t'>
            Primary care physician
            </p>
            <p>{e?.PatientDetails?.physician}</p>
          </div>
          <div>
            <p id='info-t'>
            Phone no
            </p>
            <p>{e?.PatientDetails?.Phone_no}</p>
          </div>
        </div>
        <div>
                </div>
                <p id='Patient-Information'>
          Diagnosis
        </p>
        <table id='table'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Current Concern</th>
            <th>Approximate Date of Diagnosis</th>
            <th>Treatment already Received</th>
            <th>Response to treatment</th>
          </tr>
        </thead>
        <tbody>
        {e.Diagnosis.map((e,i)=>{
          return <tr key={i}>
             <td>{i+1}</td>
             <td>{e.Current_Concern}</td>
             <td>{e.Diagnosis_date}</td>
             <td>{e.treated}</td>
             <td>{e.Response}</td>
              </tr>
        }) }
        </tbody>
      </table>
      <p id='Patient-Information'>
      Current Medication
        </p>
        <table id='table'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name Of Medication</th>
            <th>Strength</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
        {e.currentlist.map((e,i)=>{
          return <tr key={i}>
             <td>{i+1}</td>
             <td>{e.Medication}</td>
             <td>{e.Reason}</td>
             <td>{e.Strength}</td>
              </tr>
        }) }
        </tbody>
      </table>
      <p id='Patient-Information'>
      Family Health History
        </p>
        <table id='table'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Relation</th>
            <th>Age</th>
            <th>Health Condition</th>
          </tr>
        </thead>
        <tbody>
        {e.Health_history.map((e,i)=>{
          return <tr key={i}>
             <td>{i+1}</td>
             <td>{e.Relation}</td>
             <td>{e.Age}</td>
             <td>{e.Condition}</td>
              </tr>
        }) }
        </tbody>
      </table>
      <p id='Patient-Information'>
      Diet Questionnaire
        </p>
        <table id='table'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Meal</th>
            <th>Variety</th>
            <th>Quantity</th>
            <th>Timing</th>
          </tr>
        </thead>
        <tbody>
        {e.Diet_Questions.map((e,i)=>{
          return <tr key={i}>
             <td>{i+1}</td>
             <td>{e.Meal}</td>
             <td>{e.Variety}</td>
             <td>{e.Quantity}</td>
             <td>{e.Timing}</td>
              </tr>
        }) }
        </tbody>
      </table>
                </div>
                </>})}
                </div>
                </div>
  </>
}

export default Patient