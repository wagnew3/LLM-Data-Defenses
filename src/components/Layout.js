import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="./">
            
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav> */}
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="subtitle is-3">Protecting Text From Unauthorized Large Language Model Inference</h1>
            <div className="notification is-link is-family-secondary">
              <p>
                <a href="https://mailchi.mp/4f24aa0852fd/text-ai-data-defenses-mailing-list-sign-up">
                  Sign up for our mailing list!
                </a>{" "}
                If you are a text worker interested in preventing LLM inference on your
                data, please consider signing up for our{" "}
                <a href="https://qualtricsxmgs946wmcc.qualtrics.com/jfe/form/SV_0re3BjXFhORvBJA">
                  paid study
                </a>{" "}
                to help improve this tool!
              </p>
            </div>
            <div className="tabs is-centered">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  )
};

export default Layout;
