import './fac.css'
import './from.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function FacultyAdd() {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    return (
        <>
            <div class="container" id="addfrom">
                <form>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Book Title</label>
                        </div>
                        <div class="col-75">
                            {/* <input type="text" id="fname" name="BookTitle" placeholder="Your Book Title" /> */}
                            <input type="text" id="fname" placeholder="Book Title..."
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
                            <input type="text" id="lname" placeholder="Book Image.."
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
                            <input type="text" id="lname" placeholder="Book Author..."
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
                            <input type="text" id="lname" placeholder="Book Description..."
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
                            <input type="text" id="lname" placeholder="Book Price..."
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
                            <input type="text" id="lname" placeholder="bookNoOfPages..."
                                onChange={(e) => {
                                    setData({ ...data, bookNoOfPages: e.target.value })
                                }} />
                        </div>
                    </div>
                    <input type="button" value="Add Book" className='addbook glow-on-hover' onClick={() => {
                        fetch("https://630eec4a37925634188391d3.mockapi.io/faculties", {
                            method: "POST",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then((res) => {
                                navigate('/faculties');
                            })
                    }} />
                </form>
            </div>
        </>)
}
export default FacultyAdd


