import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './cardbig.css';

function FacultyDetail() {
    let params = useParams();
    const navigate = useNavigate()
    const [faculty, setFaculty] = useState({});
    useEffect(() => {
        fetch("https://630eec4a37925634188391d3.mockapi.io/faculties/" + params.id, {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            }).then((res) => {
                setFaculty(res);
            })
    }, []);
    return (
        <>
            <div class="container2 py-4 my-4 mx-auto d-flex flex-column">
                <div class="header">
                    <div class="row r1">
                        <div class="col-md-9 abc">
                            <h1><b>{faculty.Booktitle}</b></h1>
                        </div>
                        <div class="col-md-3 text-right pqr"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                        <p class="text-right para" style={{ color: "red", fontSize: "25px" }}>Only 5 Left</p>
                    </div>
                </div>
                <div class="container-body mt-4">
                    <div class="row r3">
                        <table>
                            <tr>
                                <td><img src={faculty.BookImage} alt="" style={{ width: "350px", margin: "50px" }} /></td>
                                <td>
                                    <p><h4>Author :</h4> {faculty.BookAuthor}</p>
                                    <p><h4>Description :</h4>{faculty.BookDescription}</p>
                                    <p><h4>Number Of Pages :</h4>{faculty.bookNoOfPages}</p>
                                    <p><h4>Price :</h4>{faculty.BookPrice}</p>
                                    {/* <li>{faculty.bookNoOfPages}</li> */}
                                    <button className="btndelete" onClick={() => {
                                        fetch("https://630eec4a37925634188391d3.mockapi.io/faculties/" + params.id,
                                            {
                                                method: "DELETE"
                                            }).then((res) => {
                                                navigate("/faculties");
                                            })
                                    }}>Delete</button>

                                    <button className="btnedit" style={{ background: "blue", width: "150px" }} onClick={() => {
                                        navigate("/faculty/edit/" + params.id);
                                        // navigate(`/faculty/edit/${params.id}`);//or method 
                                    }}>Edit</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
export default FacultyDetail