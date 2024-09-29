// this will a form page asking the details of the website user and stor every details about the user.
import Header from "./Header";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function PatientData() {



    let [addpatient, Setaddpatient] = useState({
        pname: '',
        pdateofbirth: '',
        paddress: '',
        pphoneno: '',
        pheight: '',
        pweight: '',
        planguage: '',
        pbloodgroup: '',
        paddharno: ''
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
            pname: addpatient.pname,
            pdateofbirth: addpatient.pdateofbirth,
            paddress: addpatient.paddress,
            pphoneno: addpatient.pphoneno,
            pheight: addpatient.pheight,
            pweight: addpatient.pweight,
            planguage: addpatient.planguage,
            pbloodgroup: addpatient.pbloodgroup,
            paddharno: addpatient.paddharno

        }

        let newalldata = [...savepdata, eachpatientdata]
        Setsavepdata(newalldata)
        console.log(newalldata)
        Setaddpatient({
            pname: '',
            pdateofbirth: '',
            paddress: '',
            pphoneno: '',
            pheight: '',
            pweight: '',
            planguage: '',
            pbloodgroup: '',
            paddharno: ''

        })
        event.preventDefault()
    }
    return (
        <div>
            <Header></Header>
            <form onSubmit={notreload}>
                <div className="bg-[#91B0FF] pb-24">
                    <h1 className="flex justify-center font-poppins font-medium text-5xl py-10"> Patient Profile </h1>

                    <div className="flex flex-row">

                        <div className="w-2/3 m-9">
                            <div>
                                <label className="ml-4 block">Name</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.pname} name="pname"></input>
                            </div>

                            <div>
                                <label className="ml-4 block ">Date of Birth</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.pdateofbirth} name="pdateofbirth"></input>
                            </div>

                            <div>
                                <label className="ml-4 block">Address</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.paddress} name="paddress"></input>
                            </div>

                            <div>
                                <label className="ml-4 block">Phone no.</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.pphoneno} name="pphoneno"></input>
                            </div>

                            <div>
                                <label className="ml-4 block">Height</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.pheight} name="pheight"></input>
                            </div>

                            <div>
                                <label className="ml-4 block">Weight</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.pweight} name="pweight"></input>
                            </div>

                            <div>
                                <label className="ml-4 block">Language</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.planguage} name="planguage"></input>
                            </div>

                            <div>
                                <label className="ml-4 block">Blood Group</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.pbloodgroup} name="pbloodgroup"></input>
                            </div>

                            <div>
                                <label className="ml-4 block">Adhaar No.</label>
                                <input className="w-[50%] h-[40px] m-4 rounded-md" onChange={dataofpatient} value={addpatient.paddharno} name="paddharno"></input>
                            </div>

                        </div>

                        <div className="w-1/3">

                            <img alt="image of patient" className="w-[60%] h-[150px] border-[3px] rounded-md bg-[grey] my-10"></img>



                        </div>

                    </div>
                    <div className="flex justify-center">
                        <Link to="/Payment"><button className=" rounded-lg my-10  text-[white] w-[190%] h-[40px] bg-[#024959]">Pay Now</button></Link>
                    </div>

                </div>
            </form>
        </div>

    )
}