import { useEffect, useState } from "react"
import './card.css'
import './fac.css';
import { Link } from 'react-router-dom';
function Faculties() {
    const [faculties, setFaculties] = useState([]);
    useEffect(() => {
        fetch("https://630eec4a37925634188391d3.mockapi.io/faculties/")
            .then((res) => {
                return res.json();
            }).then((res) => {
                setFaculties(res);
            })
    }, []);
    const FormatedFaculty = faculties.map((fac) => {
        return (
            <>
                <div class="container card col-md-4">
                    <div class="card">
                        <div class="box">
                            <div class="content">
                                <p>{fac.Booktitle}</p>
                                <img class="card-img-top" style={{height:"250px"}} src={fac.BookImage} alt="Card image cap" />
                                <Link to={"../faculty/" + fac.id}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    });
    return <div className="row">{FormatedFaculty}</div>;
}

export default Faculties




// import {React, useEffect, useState} from "react";
// import { Component } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";


// const root = createRoot(document.getElementById('root'));

// function GetAllFaculty(){
//   const navigate = useNavigate();
//   const apiUrl = "https://630c330f53a833c534258a78.mockapi.io/faculties";

//   const [data,setData] = useState([]);

//   useEffect(()=>{
//     fetch(apiUrl)
//     .then(res=>res.json())
//     .then(res=>setData(res));
//   },[]);

//   const formatedData = data.map((fac)=>{
//     return <h1 onClick={()=>{
//       navigate('/faculties/'+fac.id);
//     }}>{ fac.FacultyName }</h1>
//   });
  

//   return(<>
//     {formatedData}
//   </>);

// }








// -----------------------------------------------------------------------------------------------------










// function DetailFaculty(){
//   const navigate = useNavigate();
//   const param = useParams();

//   const apiUrl = "https://630c330f53a833c534258a78.mockapi.io/faculties";

//   const [data,setData] = useState({});

//   useEffect(()=>{
//     fetch(apiUrl+"/"+param.id,{method:"GET"})
//     .then(res=>res.json())
//     .then(res=>setData(res));
//   },[]);

//   return <>
//       <h1>FacultyName : {data.FacultyName} </h1>
//       <h1>FacultySalary : {data.FacultySalary} </h1>
//       <img src={data.FacultyImage} />
//       <button onClick={()=>{
//         fetch(apiUrl+"/"+param.id,{method:"DELETE"})
//         .then(res=>{
//           navigate('/faculties');
//         });
//       }}>Delete</button>
//       <button onClick={()=>{
//         navigate('../faculties/edit/'+param.id);
//       }}>Edit</button>
//     </>;
// }











// ------------------------------------------------------------------------------------------------












// function AddFaculty(){
//   const navigate = useNavigate();
//   const apiUrl = "https://630c330f53a833c534258a78.mockapi.io/faculties";

//   const [data, setData] = useState({FacultyName:""});
//   return(<>
//     <input type="text" onChange={(e)=>{
//       setData({...data,FacultyName:e.target.value});
//     }} />

//     <input type="text" onChange={(e)=>{
//       setData({...data,FacultyImage:e.target.value});
//     }} />
    
//     <input type="text" onChange={(e)=>{
//       setData({...data,FacultyDepartment:e.target.value});
//     }} />

//     <input type="text" onChange={(e)=>{
//       setData({...data,FacultySalary:e.target.value});
//     }} />

//     <input type="button" value="Add Faculty" onClick={()=>{

//       fetch(apiUrl,{
//         method:"POST",
//         body:JSON.stringify(data),
//         headers:{
//           "Content-Type":"application/json"
//         }
//       })
//       .then((res)=>{
//         navigate('/faculties');
//       })
//     }} />
//   </>);
// }
















// -------------------------------------------------------------------






// function EditFaculty(){
//   const param = useParams();
//   const navigate = useNavigate();
//   const apiUrl = "https://630c330f53a833c534258a78.mockapi.io/faculties";

//   useEffect(()=>{
//     fetch(apiUrl+"/"+param.id,{method:"GET"})
//     .then(res=>res.json())
//     .then(res=>setData(res));
//   },[]);

//   const [data, setData] = useState({});
//   return(<>
//     <input type="text" value={data.FacultyName} onChange={(e)=>{
//       setData({...data,FacultyName:e.target.value});
//     }} />

//     <input type="text" value={data.FacultyImage} onChange={(e)=>{
//       setData({...data,FacultyImage:e.target.value});
//     }} />
    
//     <input type="text" value={data.FacultyDepartment} onChange={(e)=>{
//       setData({...data,FacultyDepartment:e.target.value});
//     }} />

//     <input type="text" value={data.FacultySalary} onChange={(e)=>{
//       setData({...data,FacultySalary:e.target.value});
//     }} />

//     <input type="button" value="Edit Faculty" onClick={()=>{

//       fetch(apiUrl+"/"+param.id,{
//         method:"PUT",
//         body:JSON.stringify(data),
//         headers:{
//           "Content-Type":"application/json"
//         }
//       })
//       .then((res)=>{
//         //console.log(res);
//         navigate('/faculties');
//       })
//     }} />
//   </>);
// }