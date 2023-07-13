// export default ViewRider;

import React, { useEffect, useState } from 'react';
import NavBar from '../../navbar/NavBar';
import { Link, useParams } from 'react-router-dom';
import RiderService from '../../../backend/RiderService';

const ViewRider = () => {
  let { Id } = useParams();
  let [state, setState] = useState({
    loading: false,
    rider: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        const response = await RiderService.getRider(Id);
        console.log(response.data);
        setState((prevState) => ({
          ...prevState,
          loading: false,
          rider: response.data,
        }));
      } catch (error) {
       
      }
    };

    fetchData();
  }, [Id]);

  const { loading, rider } = state;

  return (
    <React.Fragment>
      <NavBar />

      <section className="view-rider-intro p-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Rider</p>
              <div className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illo.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="view-rider mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={rider?.imgUrl}
                alt="Rider"
                className="rider-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'default-image-url'; // Replace 'default-image-url' with your default image URL
                }}
              />
            </div>
            <div className="col-md-8">
              {loading ? (
                <p>Loading rider details...</p>
              ) : (
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action">
                    id: <span className="fw-bold">{rider?.id}</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Name: <span className="fw-bold">{rider?.name}</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Email: <span className="fw-bold">{rider?.email}</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Position: <span className="fw-bold">{rider?.Position}</span>
                  </li>
                  <li className="list-group-item list-group-item-action">
                    Status: <span className="fw-bold">{rider?.Status}</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={'/Rider'} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ViewRider;


