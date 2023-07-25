import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const LibraryServices = () => {
  const { authState } = useOktaAuth();

  return (
    <div className="row g-0 mt-5">
      <div className=" row  align-items-center border shadow-lg">
        <div className="col-lg-7 p-3">
          <h1 className="display-4 fw-bold">
            Can not find what you are looking for ?
          </h1>
          <p className="lead">Send to our admin message</p>
          <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
            {authState?.isAuthenticated ? (
              <Link
                to="#"
                type="button"
                className="btn main-color btn-lg px-4 me-md-2 fw-bold text-white"
              >
                Library services
              </Link>
            ) : (
              <Link className="btn main-color btn-lg text-white" to="/login">
                Sign up
              </Link>
            )}
          </div>
        </div>
        <div className="col-lg-4 offset-lg lost-image"></div>
      </div>
    </div>
  );
};
