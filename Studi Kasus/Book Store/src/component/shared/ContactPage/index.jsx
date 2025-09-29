export default function ContactPage() {
    return (<div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <h2 className="text-center mb-4">Hubungi Kami</h2>
                <p className="text-center text-body-secondary mb-5">Punya pertanyaan atau masukan? Jangan ragu untuk menghubungi kami melalui form di bawah ini.</p>
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Nama Lengkap</label>
                                <input type="text" className="form-control" id="nameInput" placeholder="Masukkan nama Anda" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Alamat Email</label>
                                <input type="email" className="form-control" id="emailInput" placeholder="nama@contoh.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="messageTextarea" className="form-label">Pesan Anda</label>
                                <textarea className="form-control" id="messageTextarea" rows="4" placeholder="Tuliskan pesan Anda di sini"></textarea>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Kirim Pesan</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h5>Informasi Kontak Lainnya</h5>
                    <p className="text-body-secondary">
                        <i className="fa-solid fa-location-dot me-2"></i>Jl. Pustaka No. 123, Jakarta, Indonesia<br />
                        <i className="fa-solid fa-phone me-2"></i>(021) 123-4567<br />
                        <i className="fa-solid fa-envelope me-2"></i>info@bookstore.com
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}