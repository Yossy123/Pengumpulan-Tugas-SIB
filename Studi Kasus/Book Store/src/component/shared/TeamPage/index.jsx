export default function TeamPage() {
    return (<div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom text-center">Tim Kami</h2>
        <p className="text-center text-body-secondary mb-5">Kami adalah sekelompok orang yang bersemangat dalam membawa buku-buku terbaik untuk Anda.</p>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')", backgroundSize: 'cover' }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Andi Pratama</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <i className="fa-solid fa-user-tie me-2"></i>
                                <small>Founder & CEO</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')", backgroundSize: 'cover' }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Citra Lestari</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <i className="fa-solid fa-pen-nib me-2"></i>
                                <small>Head of Content</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Budi Santoso</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <i className="fa-solid fa-truck-fast me-2"></i>
                                <small>Marketing & Operations</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}