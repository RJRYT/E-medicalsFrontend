import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrls';

function UserViewResult() {

    const { id } = useParams();
  const [data, setData] = useState({ userid: { dob: "" }, testid: {} });
  const [testDetails, setTestDetails] = useState([]);
  const [resultDetails, setResultDetails] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewResultByBookingId/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        setTestDetails(response.data.data.testid.details);
        setResultDetails(response.data.data.resultdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let combinedArray;

  return (
    <div className="container lab_view_result">
      <div className="lab_view_result_patient_title">
        <p>Patient Details</p>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>
            <tr>
              <th scope="col" id="btns_bg">
                Name
              </th>
              <td>
                {data.userid.firstname} {data.userid.lastname}
              </td>
              <th scope="col" id="btns_bg">
                Dob
              </th>
              <td>{data.userid.dob.slice(0, 10)}</td>
              <th scope="col" id="btns_bg">
                City
              </th>
              <td>{data.userid.city}</td>
            </tr>
            <tr>
              <th scope="col" id="btns_bg">
                E-mail
              </th>
              <td>{data.userid.email}</td>
              <th scope="col" id="btns_bg">
                Gender
              </th>
              <td>{data.userid.gender}</td>
              <th scope="col" id="btns_bg">
                District
              </th>
              <td>{data.userid.district}</td>
            </tr>
            <tr>
              <th scope="col" id="btns_bg">
                Contact
              </th>
              <td>{data.userid.contact}</td>
              <th scope="col" id="btns_bg">
                House name
              </th>
              <td>{data.userid.housename}</td>
              <th scope="col" id="btns_bg">
                Pincode
              </th>
              <td>{data.userid.pincode}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="lab_view_result_patient_title">
        <p>{data.testid.name} Details</p>
      </div>

      <div>
        <table border="1" class="table table-striped ">
          {
            (combinedArray = testDetails.map((item1, index) => {
              const item2 = resultDetails[index];
              console.log(item1);
              console.log(item2);
              return (
                <tbody>
                  <tr className="container">
                    <td className="">{item1.description}</td>
                    <td className="">
                      {item1.minrange} - {item1.maxrange}
                    </td>
                    <td
                      className={
                        item2.deviation == 1 ? "text-danger fw-bold" : ""
                      }
                    >
                      {item2.value}
                    </td>
                  </tr>
                </tbody>
              );
            }))
          }
        </table>
      </div>
      <div className="lab_view_result_variations">
        <p
          className={
            data.comments ==
            "Please consult a doctor as you have some variations with your reports."
              ? `fs-5 text-center pt-3 text-danger`
              : "fs-5 text-center pt-3 text-success"
          }
        >
          {data.comments}
        </p>
      </div>
    </div>
  )
}

export default UserViewResult
