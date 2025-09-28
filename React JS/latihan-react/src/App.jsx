import "./App.css";

/**
 * membuat komponen header
 * compoenent menampilkan navigasi
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}


/**
 * membuat konten
 * membuat content menampung konten utama
 */
function Content() {
  return (
    <main>
      <h1>Welcome to React</h1>
      <p>This is a simple React application.</p>
    </main>
  )
}

/**
 * membuat komponen footer
 * component footer menampilkan footer
 */
function Footer() {
  return (
    <footer>
      <h2>&copy; 2024 My React App</h2>
    </footer>
  )
}


function Hello() {
  const nama = "Yossy Indra Kusuma";
  return (
    <>
    <h2>Hello React</h2>
    <p>Saya {nama} - Seorang Frontend Developer</p>
    </>
  )
}

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>
}

function Profile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  )
}

function App() {


  return (
    <>
      <Header />
      <Content />
      <Hello />
      <Greeting name="Yossy Indra Kusuma" />
      <Greeting name="John Doe" />
      <Profile name="Yossy Indra Kusuma" age={31} country="Indonesia" />
      <Profile name="John Doe" age={25} country="USA" />
      <Footer />
    </>
  )
}

export default App
