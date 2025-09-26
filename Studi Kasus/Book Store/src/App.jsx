import React, { useState } from 'react';

// Komponen untuk Halaman Beranda (Home)
// Saya mempertahankan struktur komponen ini agar kode tetap rapi,
// sambil mengintegrasikan konten yang sudah Anda tambahkan.
const HomePage = () => (
  <>
    {/* hero section */}
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits – James Clear</h1>
          <p className="lead">Buku ini membahas bagaimana perubahan kecil dalam kebiasaan sehari-hari bisa menghasilkan dampak besar dalam hidup. James Clear menjelaskan dengan sederhana konsep compound effect—bahwa kebiasaan baik yang konsisten akan memberikan hasil luar biasa dalam jangka panjang. Ia juga memberikan strategi praktis seperti habit stacking (menempelkan kebiasaan baru pada kebiasaan lama), membuat kebiasaan baik lebih mudah dilakukan, dan kebiasaan buruk lebih sulit dilakukan. Cocok bagi siapa saja yang ingin meningkatkan produktivitas, kesehatan, maupun kualitas hidup secara berkelanjutan.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button> <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> <img className="rounded-lg-3" src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80" alt="Book" width="720" /> </div>
      </div>
    </div>

    {/* Product List */}
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Best Sellers</h1>
          <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p> <a href="#" className="btn btn-primary my-2 m-2">View</a> <a href="#" className="btn btn-secondary my-2">Other Book</a> </p>
        </div>
      </div>
    </section>
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://www.books4people.co.uk/cdn/shop/files/71lTi4KIrjL._SL1500_1024x.jpg?v=1755089132" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="The Subtle Art of Not Giving a F*ck"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">The Subtle Art of Not Giving a F*ck – Mark Manson</h5>
                <p className="card-text">Sebuah pendekatan yang berlawanan dengan intuisi untuk menjalani kehidupan yang baik oleh Mark Manson.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://www.oskareggert.com/content/images/size/w2000/2024/02/image_67203329.JPG" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="Atomic Habits"/>
              <div className="card-body d-flex flex-column">
                 <h5 className="card-title">Atomic Habits – James Clear</h5>
                <p className="card-text">Buku ini membahas bagaimana perubahan kecil dapat menghasilkan hasil besar dalam jangka panjang. James Clear menjelaskan strategi praktis membentuk kebiasaan baik, menghancurkan kebiasaan buruk, dan menguasai sistem yang mendukung pertumbuhan pribadi.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://cdn.gramedia.com/uploads/items/9786020333175_rich-dad-poor-dad-_edisi-revisi_.jpg" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="Rich Dad Poor Dad "/>
              <div className="card-body d-flex flex-column">
                 <h5 className="card-title">Rich Dad Poor Dad – Robert T. Kiyosaki</h5>
                <p className="card-text">Buku finansial klasik yang membandingkan dua cara pandang tentang uang: dari "ayah kaya" dan "ayah miskin". Kiyosaki mengajarkan dasar-dasar literasi keuangan, investasi, serta pentingnya membangun aset dibanding hanya bekerja untuk gaji.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://static.wixstatic.com/media/ef8af1_7ef516561bbe4f6ba2ac6e0a52b5686a~mv2.jpg/v1/fill/w_695,h_854,al_c,q_85/Thinking-fast-and-slow.jpg" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="Thinking, Fast and Slow"/>
              <div className="card-body d-flex flex-column">
                 <h5 className="card-title">Thinking, Fast and Slow – Daniel Kahneman</h5>
                <p className="card-text">Ditulis oleh pemenang Nobel Ekonomi, buku ini menjelaskan dua sistem berpikir manusia: cepat (intuitif) dan lambat (analitis). Kahneman menunjukkan bagaimana keduanya memengaruhi keputusan, bias, dan cara kita memahami dunia.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-VhVmPDuaRa3fnFNgL4JA8gE0ry03vTYng&s" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="The 7 Habits of Highly Effective People"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">The 7 Habits of Highly Effective People – Stephen R. Covey</h5>
                <p className="card-text">Salah satu buku pengembangan diri paling berpengaruh. Covey menawarkan tujuh kebiasaan kunci yang membantu seseorang lebih efektif dalam kehidupan pribadi maupun profesional, seperti proaktif, menetapkan tujuan, dan berpikir win-win.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://www.bookmarked.id/cdn/shop/products/StartwithWhyNEW_860x.jpg?v=1607098849" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="Start with Why"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Start with Why – Simon Sinek</h5>
                <p className="card-text">Buku ini menekankan pentingnya menemukan “mengapa” sebelum memulai sesuatu. Sinek menunjukkan bagaimana pemimpin dan organisasi hebat berhasil menginspirasi dengan mengomunikasikan alasan mendasar mereka, bukan sekadar produk atau layanan.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://ebooks.gramedia.com/ebook-covers/65686/image_highres/BLK_TPONPMPS2021777758.jpg" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="The Power of Now"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">The Power of Now – Eckhart Tolle</h5>
                <p className="card-text">Buku spiritualitas modern yang menekankan kesadaran penuh (mindfulness) dan hidup di masa kini. Tolle mengajak pembaca untuk melepaskan keterikatan pada masa lalu atau kekhawatiran masa depan demi mencapai kedamaian batin.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://m.media-amazon.com/images/I/713jIoMO3UL.jpg" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="Sapiens: A Brief History of Humankind"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Sapiens: A Brief History of Humankind – Yuval Noah Harari</h5>
                <p className="card-text">Buku sejarah populer yang menjelaskan evolusi manusia dari Homo sapiens kuno hingga era modern. Harari membahas bagaimana bahasa, budaya, agama, dan teknologi membentuk dunia yang kita kenal sekarang.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <img src="https://cdn.gramedia.com/uploads/product-metas/fcfod5se-n.jpg" className="card-img-top" style={{height: '350px', objectFit: 'cover'}} alt="How to Win Friends and Influence People"/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">How to Win Friends and Influence People – Dale Carnegie</h5>
                <p className="card-text">Klasik pengembangan diri yang terbit sejak 1936 namun tetap relevan hingga kini. Carnegie membagikan prinsip komunikasi efektif, membangun hubungan, dan cara memengaruhi orang lain dengan etika serta kehangatan.</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

// Komponen untuk Halaman Tim
const TeamPage = () => (
  <div className="container px-4 py-5" id="custom-cards">
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

// Komponen untuk Halaman Kontak
const ContactPage = () => (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="text-center mb-4">Hubungi Kami</h2>
        <p className="text-center text-body-secondary mb-5">Punya pertanyaan atau masukan? Jangan ragu untuk menghubungi kami melalui form di bawah ini.</p>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" id="nameInput" placeholder="Masukkan nama Anda"/>
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Alamat Email</label>
                <input type="email" className="form-control" id="emailInput" placeholder="nama@contoh.com"/>
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
                <i className="fa-solid fa-location-dot me-2"></i>Jl. Pustaka No. 123, Jakarta, Indonesia<br/>
                <i className="fa-solid fa-phone me-2"></i>(021) 123-4567<br/>
                <i className="fa-solid fa-envelope me-2"></i>info@bookstore.com
            </p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Team':
        return <TeamPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Home':
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <style>{`
        .text-shadow-1 { text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25); }
        .card-cover {
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
      `}</style>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('Home'); }} className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">Book Store</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('Home'); }} className={`nav-link px-2 ${activePage === 'Home' ? 'link-secondary' : 'text-body-emphasis'}`}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('Team'); }} className={`nav-link px-2 ${activePage === 'Team' ? 'link-secondary' : 'text-body-emphasis'}`}>Team</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('Contact'); }} className={`nav-link px-2 ${activePage === 'Contact' ? 'link-secondary' : 'text-body-emphasis'}`}>Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
        
        <main>
          {renderPage()}
        </main>

        {/* Footer */}
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('Home'); }} className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('Team'); }} className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('Contact'); }} className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 Yossy Indra Kusuma</p>
        </footer>
      </div>
    </>
  );
}

export default App;

