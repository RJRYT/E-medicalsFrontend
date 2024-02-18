import React, { useEffect, useState } from 'react'
import axiosInstance from '../BaseUrls';

function LabViewTestBooking() {

    const [array,setArray]= useState([]);

    useEffect(()=>{
        axiosInstance.post(`/viewApprovedBookings`)
        .then((response)=>{
            console.log(response);
            if(response.data.msg=='No Data obtained '){
                setArray([])

            }else if(response.data.status==200){
                setArray(response.data.data)

            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div>
      <div class="container-xxl py-5 mt-3"  >
            <div class="container" style={{minHeight:'400px'}}>
                <h1 class="text-center  mb-5 wow fadeInUp" id='blue_clr' data-wow-delay="0.1s">Approved Bookings</h1>
                <div class="row g-4">
                    {
                        array.length?array.map((a,index)=>{
                            return(
                                <div className="col-6 " key={index}>
                        <div class="row gy-4">
                            <div class="col-md-12 wow fadeIn" data-wow-delay="0.1s">
                                <div class=" align-items-center rounded p-5" style={{backgroundColor:'#effdf5'}}>
                                    
                                    <div>
                                      
                                        <h3>{a.userid.firstname} {a.userid.lastname}</h3>
                                    </div>
                                    <div>
                                        <h5 >{a.testid.name}</h5>
                                    </div>
                                    <div class="d-flex align-items-center rounded justify-content-between">
                                            <p>{a.date}</p>
                                            <p>{a.time}</p>
                                            <p>₹{a.testid.price}</p>
                                            {/* <button class='btn btn-danger' onClick={() => handleRemove(a._id)} >Cancel</button> */}
                                    </div>
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                            )
                        }):<h2 style={{padding:'30px',textAlign:'center'}} >No bookings</h2>
                    }

                </div>
            </div>
        </div>
    </div>
  )
}

export default LabViewTestBooking
