import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Lab 14 Imports
import App14 from "./Lab 14/App14";
import L14_A1 from "./Lab 14/L14_A1";
import L14_A2 from "./Lab 14/L14_A2";
import L14_A3 from "./Lab 14/L14_A3";
import L14_A4 from "./Lab 14/L14_A4";
import L14_A5 from "./Lab 14/L14_A5";

// Lab 15 Imports
import App15 from "./Lab 15/App15";
import FunctionHello from "./Lab 15/FunctionHello";
import ClassHello from "./Lab 15/ClassHello";

// Lab 16 Imports
import App16 from "./Lab 16/App16";
import L16_A1 from "./Lab 16/L16_A1";
import L16_A2 from "./Lab 16/L16_A2";
import L16_A3 from "./Lab 16/L16_A3";

// Lab 17 Imports
import App17 from "./Lab 17/App17";
import L17_A1 from "./Lab 17/L17_A1";
import L17_B1 from "./Lab 17/L17_B1";
import L17_B2 from "./Lab 17/L17_B2";
import L17_C1 from "./Lab 17/L17_C1"; 

// Lab 18 Imports
import Layout1 from "./Lab 18/Layout1";
import App1 from "./Lab 18/Lab 18_1/App1"; 
import App2 from "./Lab 18/Lab 18_2/App2"; 
import App3 from "./Lab 18/Lab 18_3/App3";

//Lab 19 Imports
import Layout2 from "./Lab 19/Layout2";
import App4 from "./Lab 19/App4";

// Lab 20 Files
import Lab20Layout from "./Lab 20/Layout";
import Home from "./Lab 20/Home";
import About from "./Lab 20/About";
import Contact from "./Lab 20/Contact";
import Services from "./Lab 20/Services";
import Portfolio from "./Lab 20/Portfolio";

// Lab 21 Files
import Lab21Layout from "./Lab 21/Layout";
import UseStateDemo from "./Lab 21/UseStateDemo";
import UseEffectDemo from "./Lab 21/UseEffectDemo";

// Lab 22 Files
import Layout3 from "./Lab 22/Layout3";
import A1 from "./Lab 22/A1";
import A2 from "./Lab 22/A2";

// Lab 23 Files
import Layout4 from "./Lab 23/Layout4";
import Product from "./Lab 23/Product";
import Student from "./Lab 23/Student";
import Faculties from "./Lab 23/Faculties";

// Lab 24 Files
import Layout5 from "./Lab 24/Layout5";
import Faculity_MockApi from "./Lab 24/Faculity_MockApi";
import Students from "./Lab 24/Students";
import DetailStudent from "./Lab 24/DetailStudent";
import AddStudent from "./Lab 24/AddStudents";
import EditStudent from "./Lab 24/EditStudent";

//Lab 25 Files
import App25 from "./Lab 25/App25";
import Login from "./Lab 25/Login";
import Profile from "./Lab 25/Profile";
import Dashboard from "./Lab 25/Dashboard";

//Lab 26 Files 
import Layout7 from "./Lab 26/Layout7";
import LibraryHome from "./Lab 26/LibraryHome";
import ManageBooks from "./Lab 26/ManageBooks";
import AddBook from "./Lab 26/AddBook";
import EditBook from "./Lab 26/EditBook";

//Lab 27 Files
import App27 from "./Lab 27/App27";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-light w-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 w-100">
          <div className="container-fluid px-4">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab14">
                    Lab 14
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab15">
                    Lab 15
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab16">
                    Lab 16
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab17">
                    Lab 17
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab18">
                    Lab 18
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab19">
                    Lab 19
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab20">
                    Lab 20
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab21">
                    Lab 21
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab22">
                    Lab 22
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab23">
                    Lab 23
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab24">
                    Lab 24
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab25">
                    Lab 25
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab26">
                    Lab 26
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link text-white" to="/lab27">
                    Lab 27
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow-1 container-fluid px-4 mt-4 mb-5">
          <Routes>
            {/* Lab 14 Routes */}
            <Route path="/lab14" element={<App14 />}>
              <Route index element={<L14_A1 />} />
              <Route path="a1" element={<L14_A1 />} />
              <Route path="a2" element={<L14_A2 />} />
              <Route path="a3" element={<L14_A3 />} />
              <Route path="a4" element={<L14_A4 />} />
              <Route path="a5" element={<L14_A5 />} />
            </Route>

            {/* Lab 15 Routes */}
            <Route path="/lab15" element={<App15 />}>
              <Route index element={<FunctionHello />} />
              <Route path="function" element={<FunctionHello />} />
              <Route path="class" element={<ClassHello />} />
            </Route>

            {/* Lab 16 Routes */}
            <Route path="/lab16" element={<App16 />}>
              <Route index element={<L16_A1 />} />
              <Route path="a1" element={<L16_A1 />} />
              <Route path="a2" element={<L16_A2 />} />
              <Route path="a3" element={<L16_A3 />} />
            </Route>

            {/* Lab 17 Routes */}
            <Route path="/lab17" element={<App17 />}>
              <Route index element={<L17_A1 />} />
              <Route path="a1" element={<L17_A1 />} />
              <Route path="b1" element={<L17_B1 />} />
              <Route path="b2" element={<L17_B2 />} />
              <Route path="c1" element={<L17_C1 />} />
            </Route>

            {/* Lab 18 Routes */}
            <Route path="/lab18" element={<Layout1 />}>
              <Route index element={<App1 />} />
              <Route path="task2" element={<App2 />} />
              <Route path="task3" element={<App3 />} />
            </Route>

            {/* Lab 19 Routes */}
            <Route path="/lab19" element={<Layout2 />}>
              <Route index element={<App4 />} />
            </Route>

            {/* Lab 20 Routes */}
            <Route path="/lab20" element={<Lab20Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
            </Route>

            {/* Lab 21 Routes */}
            <Route path="/lab21" element={<Lab21Layout />}>
              <Route index element={<UseStateDemo />} />
              <Route path="usestate" element={<UseStateDemo />} />
              <Route path="useeffect" element={<UseEffectDemo />} />
            </Route>

            {/* Lab 22 Routes */}
            <Route path="/lab22" element={<Layout3 />}>
              <Route index element={<A1 />} />
              <Route path="scientific" element={<A2 />} />
            </Route>

            {/* Lab 23 Routes */}
            <Route path="/lab23" element={<Layout4 />}>
              <Route index element={<Product />} />
              <Route path="student" element={<Student />} />
              <Route path="faculties" element={<Faculties />} />
            </Route>

            {/* Lab 24 Routes */}
            <Route path="/lab24" element={<Layout5 />}>
              <Route index element={<Faculity_MockApi />} />
              <Route path="students" element={<Students />} />
              <Route path="students/:id" element={<DetailStudent />} />
              <Route path="students/add" element={<AddStudent />} />
              <Route path="students/edit/:id" element={<EditStudent />} />
            </Route>

            {/* Lab 25 Routes */}
            <Route path="/lab25" element={<App25 />}>
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>

            {/* Lab 26 Library Project Routes */}
            <Route path="/lab26" element={<Layout7 />}>
              <Route index element={<LibraryHome />} />
              <Route path="manage" element={<ManageBooks />} />
              <Route path="add" element={<AddBook />} />
              <Route path="edit/:id" element={<EditBook />} />
            </Route>

            {/* Lab 27 Attendance Management Routes */}
            <Route path="/lab27" element={<App27 />} />

          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-auto w-100">
          <div className="container-fluid">
            <p className="mb-0 text-white-50" style={{ fontSize: "14px" }}>
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;