export function Hero() {
  return (
    <>
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
    </>
  );
}