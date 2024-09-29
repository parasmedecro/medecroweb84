// this is the page when hospital have to add the doctor and its information 

import Header from "./Header";
import React, { useState } from 'react'
export default function Doctorregistration() {

    let [adddoctor, Setadddoctor] = useState({
        dname: '',
        dlicenceno: '',
        dmobbileno: '',
        demail: '',
        dspecialization: '',
        daddharno: '',
        dimage: ''
    })

    let dataofdoctor = (event) => {
        let olddata = { ...adddoctor };  // storing the object in oldata (key value pair)
        let inputemail = event.target.name;  //storing the name of the input section so to store it as key 
        let inputvalue = event.target.value; //this is for the value of key 
        olddata[inputemail] = inputvalue  //in this we are storing the value of key in the object
        console.log(olddata);
        Setadddoctor(olddata);
    }

    let [saveddata, Setsaveddata] = useState([])

    // this is to fetch data from the email and password section and store it in a object

    let notreload = (event) => {
        let eachdoctordata = {
            dname: adddoctor.dname,
            dlicenceno: adddoctor.dlicenceno,
            dmobbileno: adddoctor.dmobbileno,
            demail: adddoctor.demail,
            dspecialization: adddoctor.dspecialization,
            daddharno: adddoctor.daddharno,
            dimage: adddoctor.dimage
        }

        let newalldata = [...saveddata, eachdoctordata]
        Setsaveddata(newalldata)
        console.log(newalldata)
        Setadddoctor({
            dname: '',
            dlicenceno: '',
            dmobbileno: '',
            demail: '',
            dspecialization: '',
            daddharno: '',
            dimage: ''

        })
        event.preventDefault()
    }

    return (
        <div>
            <Header></Header>
            <div className="bg-[#ECE6E0]">
                <h1 className="flex justify-center items-center pt-9 font-poppins font-semibold text-4xl">Doctor Registration</h1>
                <form onSubmit={notreload}>
                    <div className="flex flex-row">
                        <div className="relative w-1/2">
                            <div>
                                <input type="text" placeholder="Fullname" onChange={dataofdoctor} value={adddoctor.dname} name="dname" className="w-[70%] h-[20ppx] m-6 rounded-lg p-2 "></input>
                                <input type="text" placeholder="Licence No" onChange={dataofdoctor} value={adddoctor.dlicenceno} name="dlicenceno" className="w-[70%] h-[20ppx] m-6 rounded-lg p-2 "></input>
                                <input type="text" placeholder="Mobile No" onChange={dataofdoctor} value={adddoctor.dmobbileno} name="dmobbileno" className="w-[70%] h-[20ppx] m-6 rounded-lg p-2 "></input>
                                <input type="text" placeholder="Email" onChange={dataofdoctor} value={adddoctor.demail} name="demail" className="w-[70%] h-[20ppx] m-6 rounded-lg p-2 "></input>
                                <input type="text" placeholder="Specialization" onChange={dataofdoctor} value={adddoctor.dspecialization} name="dspecialization" className="w-[70%] h-[20ppx] m-6 rounded-lg p-2 "></input>
                            </div>


                        </div>

                        <div className="relative w-1/2 flex flex-col">
                            {/* for image of doctor */}
                            <div className="flex flex-col gap-5">
                                <input type="file" accept="image/*" onChang={dataofdoctor} value={adddoctor.dimage} name="dimage" className="w-[40%] h-[40px] m-6 rounded-md pt-2 "></input>

                                <button type="submit" className="w-[40%] h-[40px] bg-[#024959] rounded-md ml-6">upload photo</button>

                            </div>
                            <input type="text" placeholder="Addhar No." onChange={dataofdoctor} value={adddoctor.daddharno} name="daddharno" className="w-[70%] h-[40px] rounded-lg p-2 mt-56 m-6"></input>

                        </div>

                    </div>

                </form>
            </div>
        </div>


    )
}