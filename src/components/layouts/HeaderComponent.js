import React from "react";
import "../layouts/HeaderComponent.css";
import img1 from "./headerimg/codemarker4.png";
import img2 from "./headerimg/customer-4.jpg";
import img3 from "./headerimg/Male User.png";
import img4 from "./headerimg/Frame 8.png";
import img5 from "./headerimg/Group 50.png";
import { Link } from "react-router-dom";
import CreatTestButton from "../test/CreateTestButton";

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header">
        <section className="navigation-container">
          <nav className="nav-bar">
            <img src={img1} alt="" className="nav-logo-image" />

            <span className="navbardrop">
              {/* <div><a href="trainer-dashboard.html" className="dashboard-button navbardropbtn">Dashboard</a></div> */}
              <div>
                <Link className="dashboard-button navbardropbtn" to="/">
                  Dashboard{" "}
                </Link>
              </div>
            </span>

            <span className="navbardrop">
              <button className="navbardropbtn">Test Management</button>
              <div className="navbardrop-content">
                <div>
                  <a
                    href="create-technology.html"
                    className="create-technology-button"
                  >
                    Create Technology
                  </a>
                </div>
                <div>
                  <a
                    href="list-question.html"
                    className="list-technology-button"
                  >
                    List Question
                  </a>
                </div>
                {/* <div><a href="create-test.html" className="create-test-button">Create Test</a></div> */}

                {/* <div>
              <Link to="/addTest" className="create-test-button">Create Test</Link>
            </div> */}
                <CreatTestButton />

                <div>
                  <Link className="list-technology-button" to="/listTest">
                    Test List{" "}
                  </Link>
                </div>
              </div>
            </span>

            <span className="navbardrop">
              <button className="navbardropbtn">User Management</button>
              <div className="navbardrop-content">
                <div>Create User</div>
                <div>List User</div>
                <div>Update User</div>
              </div>
            </span>

            <span className="navbardrop">
              <button className="navbardropbtn">Reports</button>
              <div className="navbardrop-content">
                <div className="createreport">
                  <Link className="createreport_btn" to="/createReport">
                    Create Report
                  </Link>
                </div>
                {/* <Link className="createreport_btn" to="/updateReport">
                  Update Reports
                </Link> */}
                <div className="reportlist">
                  <Link className="createreport_btn" to="/Reportlist">
                    Reports List
                  </Link>
                </div>
                {/* <div>
                  <Link className="updatereport_btn" to="/updateReport">
                    Update Reports
                  </Link>
                </div> */}
              </div>
            </span>

            <img
              src={img2}
              alt=""
              className="user-image"
              onclick="toggleMenu()"
            />

            <div className="user-menu-wrap" id="subMenu">
              <div className="user-sub-menu">
                <div className="user-info">
                  <img src={img2} alt="" />
                  <h3>Jhon Paterik</h3>
                </div>

                <hr />

                <a href="#" className="sub-menu-link">
                  <img src={img3} alt="" />
                  <p>Edit Profile</p>
                  <span></span>
                </a>
                <a href="#" className="sub-menu-link">
                  <img src={img4} alt="" />
                  <p>Settings</p>
                  <span></span>
                </a>

                <div className="logout-span">
                  <div>
                    <img src={img5} alt="" />
                  </div>

                  <div>
                    <a href="index.html" className="logout-button">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>

        <script>
          {/* let subMenu = document.getElementById("subMenu");

      function toggleMenu() {
        subMenu.classList.toggle("open-menu")
      }

      window.onclick = function (event) {
        if (!event.target.matches(".user-image")) {
          var dd = document.getElementsByClassName("user-menu-wrap");
          for (var i = 0; i < dd.length; i++) {
            var x = dd[i];

            if (x.classList.contains("open-menu")) { x.classList.remove("open-menu") }
          }


        }
      } */}
        </script>
      </header>
    );
  }
}

export default HeaderComponent;
