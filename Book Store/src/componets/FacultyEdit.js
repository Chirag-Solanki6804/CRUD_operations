
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import './fac.css';

function EditFaculty() {
    const param = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://630eec4a37925634188391d3.mockapi.io/faculties/";

    useEffect(() => {
        fetch(apiUrl + "/" + param.id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const [data, setData] = useState({});
    return (
        <div class="container" id='addfrom'>
            <form>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Book Title</label>
                    </div>
                    <div class="col-75">
                        {/* <input type="text" id="fname" name="BookTitle" placeholder="Your Book Title" /> */}
                        <input type="text" id="fname" value={data.Booktitle}
                            onChange={(e) => {
                                setData({ ...data, Booktitle: e.target.value })
                            }} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Book Image</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lname" value={data.BookImage}
                            onChange={(e) => {
                                setData({ ...data, BookImage: e.target.value })
                            }} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Book Author</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lname" value={data.BookAuthor}
                            onChange={(e) => {
                                setData({ ...data, BookAuthor: e.target.value })
                            }} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Book Description</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lname" value={data.BookDescription}
                            onChange={(e) => {
                                setData({ ...data, BookDescription: e.target.value })
                            }} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Book Price</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lname" value={data.BookPrice}
                            onChange={(e) => {
                                setData({ ...data, BookPrice: e.target.value })
                            }} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lname">Book No Of Pages</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lname" value={data.bookNoOfPages}
                            onChange={(e) => {
                                setData({ ...data, bookNoOfPages: e.target.value })
                            }} />
                    </div>
                </div>

                <input type="button" class="glow-on-hover addbook" value="Edit Book" onClick={() => {

                    fetch(apiUrl + "/" + param.id, {
                        method: "PUT",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then((res) => {
                            //console.log(res);
                            navigate('/faculties');
                        })
                }} />
            </form>
        </div>
    );
}

export default EditFaculty

