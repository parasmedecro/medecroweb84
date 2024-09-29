// this is the contact us page for the patient and hospital for website
import Header from "./Header";
import React, { useState } from 'react';
// importing image for the outerbox
import outerbox from './contactusp.png'
// importing image for te innerbox

// importing image of the lady doctor to paste under the innerbox


export default function ContactUs() {


    // Here the part to fetch value from the input box
    // to reset the input section of the email and password

    let [addpatient, Setaddpatient] = useState({
        uname: '',
        umobile: '',
        uemail: '',
        umessage: ''
    })

    let dataofpatient = (event) => {
        let olddata = { ...addpatient };  // storing the object in oldata (key value pair)
        let inputemail = event.target.name;  //storing the name of the input section so to store it as key 
        let inputvalue = event.target.value; //this is for the value of key 
        olddata[inputemail] = inputvalue  //in this we are storing the value of key in the object
        console.log(olddata);
        Setaddpatient(olddata);
    }

    let [savepdata, Setsavepdata] = useState([])

    // this is to fetch data from the email and password section and store it in a object

    let notreload = (event) => {
        let eachpatientdata = {
            uname: addpatient.uname,
            umobile: addpatient.umobile,
            uemail: addpatient.uemail,
            umessage: addpatient.umessage

        }

        let newalldata = [...savepdata, eachpatientdata]
        Setsavepdata(newalldata)
        console.log(newalldata)
        Setaddpatient({
            uname: '',
            umobile: '',
            uemail: '',
            umessage: ''


        })
        event.preventDefault()
    }

    return (
        <div>
            {/* this is the header part  */}
            <Header></Header>
            {/* from here main part of sign IN start */}
            {/* outer box */}
            <form onSubmit={notreload}>
                <div className=" w-full h-[600px] flex  bg-cover bg-center " style={{ backgroundImage: `url(${outerbox})` }}>
                    {/* <h1 className="text-5xl font-roboto ">CONTACT US</h1> */}
                    {/* innerbox */}
                   

                        {/* this is for curved part */}
                        <div className="relative w-1/2">

                        </div>
                        <div className="relative w-1/2 p-12 " >





                            {/* this is for the input part */}

                            <div className="flex flex-col gap-6 pt-10 mt-[20px] justify-center items-center ">
                                {/* email */}
                                <input placeholder="Full Name" onChange={dataofpatient} value={addpatient.uname} name="uname" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>
                                <input placeholder="Mobile NO." onChange={dataofpatient} value={addpatient.umobile} name="umobile" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>
                                <input placeholder="Email" onChange={dataofpatient} value={addpatient.uemail} name="uemail" type="text" className="rounded-2xl w-[60%] h-[40px] text-center "></input>
                                <input placeholder="Message..." onChange={dataofpatient} value={addpatient.umessage} name="umessage" type="text" className="rounded-2xl w-[60%] h-[80px] text-start "></input>

                                <button className="rounded-2xl w-[40%] h-[40px] bg-[#3CA6A6]">Submit</button>




                            </div>
                        </div>

                    

                </div>
            </form>

        </div>

    )
}