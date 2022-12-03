import './fac.css';
function Footer() {
    // <><h1 className="footer">Footer</h1></>
    return (
        <>
            <footer class="bg-light text-center text-white " id='footermy'>
                {/* <!-- Grid container --> */}
                <div class="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section class="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            class="btn text-white btn-floating m-1"
                            style={{ background: "#3b5998" }}
                            href="#!"
                            role="button"
                        ><i class="fab fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a
                            class="btn text-white btn-floating m-1"
                            style={{ background: "#55acee" }}
                            href="#!"
                            role="button"
                        ><i class="fab fa-twitter"></i
                        ></a>

                        {/* <!-- Google --> */}
                        <a
                            class="btn text-white btn-floating m-1"
                            style={{ background: " #dd4b39" }}
                            href="#!"
                            role="button"
                        ><i class="fab fa-google"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a
                            class="btn text-white btn-floating m-1"
                            style={{ background: " #ac2bac" }}
                            href="#!"
                            role="button"
                        ><i class="fab fa-instagram"></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            class="btn text-white btn-floating m-1"
                            style={{ background: "#0082ca" }}
                            href="#!"
                            role="button"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>
                        {/* <!-- Github --> */}
                        <a
                            class="btn text-white btn-floating m-1"
                            style={{ background: " #333333" }}
                            href="#!"
                            role="button"
                        ><i class="fab fa-github"></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}

                <div class="text-center p-3" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/"> CRS.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}

export default Footer