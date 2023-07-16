import "../styling/SPL.css";
import NavBar from "../components/kSComponents/NavBar.js";
import ScrollUp from "../components/componentsLuis/ScrollUp";
import Footer from "../components/componentsLuis/Footer";
import FilteringLibraryProjects from "../components/componentsLuis/FilteringLibraryProjects";
import CheckboxFilteringProjects from "../components/componentsLuis/CheckboxFilteringProjects";
import TestBackendLibraryProjects from "../components/componentsLuis/TestBackendLibraryProjects";

export default function StudentProyectLibrary() {
  return (
    <>
      <header className="navbar">
        <NavBar />
      </header>

      <div className="main-SPL-container">
        <section className="myCheckbox">
          <CheckboxFilteringProjects />
        </section>

        <section className="projects-container">
          <h1>PROJECTS</h1>
          <p>
            Welcome to the library project.You can use the filters on the right
            to help you search for specific projects
          </p>
          {/* <FilteringLibraryProjects /> */}
          <TestBackendLibraryProjects/>
          <ScrollUp />
        </section>
      </div>
      <Footer />
    </>
  );
}
