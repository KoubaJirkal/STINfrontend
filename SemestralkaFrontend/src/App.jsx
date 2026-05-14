import './App.css';
import me from './assets/me.jpg';

function App() {
    return (
        <div className="app">

            <section className="hero">
                <img src={me} alt="Me" className="profile-image" />

                <h1>Kuba Jirkal</h1>

                <p className="subtitle">
                    Applied Informatics Student • Developer • Gamer
                </p>
            </section>

            <section className="card">
                <h2>About Me</h2>

                <p>
                    I am currently studying Information Technology at
                    Technical University of Liberec with specialization
                    in Applied Informatics.
                </p>

                <p>
                    I enjoy programming, game development, graphics,
                    backend systems and learning new technologies.
                </p>
            </section>

            <section className="card">
                <h2>Education</h2>

                <div className="timeline-item">
                    <h3>Technical University of Liberec (TUL)</h3>
                    <p>Information Technology — Applied Informatics</p>
                </div>

                <div className="timeline-item">
                    <h3>Industrial High School Liberec</h3>
                    <p>Information Technology</p>
                </div>
            </section>

            <section className="card">
                <h2>Skills</h2>

                <div className="skills">
                    <span>C</span>
                    <span>C#</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>OpenGL</span>
                    <span>SDL2</span>
                    <span>Python</span>
                    <span>SQL</span>
                    <span>ASP.NET</span>
                    <span>Git</span>
                </div>
            </section>

            <section className="card">
                <h2>Gaming & Achievements</h2>

                <p>
                    League of Legends player on EUW server.
                </p>

                <p>
                    Reached Top 2000 players on EUW ladder.
                </p>
            </section>

            <section className="card">
                <h2>Contact</h2>

                <p>Email: kuba@example.com</p>
                <p>GitHub: github.com/yourgithub</p>
            </section>

        </div>
    );
}

export default App;