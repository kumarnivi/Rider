import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../navbar/NavBar';
import RiderService from '../../../backend/RiderService';
import Spinner from '../../Spinner/Spinner';
import Pagination from 'react-js-pagination';

const ListRider = () => {
  const [state, setState] = useState({
    loading: false,
    riders: [],
    filterRiders: [],
    errorMessage: '',
  });

  const [query, setQuery] = useState({
    text: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const resultPerPage = 6;
  const ridersCount = state.filterRiders.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        const res = await RiderService.getAllRiders();
        setState((prevState) => ({
          ...prevState,
          loading: false,
          riders: res.data,
          filterRiders: res.data,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          errorMessage: error.message,
        }));
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleClickDelete = async (id) => {
    try {
      await RiderService.deleteRider(id);
      setState((prevState) => ({ ...prevState, loading: true }));
      const res = await RiderService.getAllRiders();
      setState((prevState) => ({
        ...prevState,
        loading: false,
        riders: res.data,
        filterRiders: res.data,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        errorMessage: error.message,
      }));
    }
  };

  const searchRider = (event) => {
    const { riders } = state;
    const searchText = event.target.value.toLowerCase();
    if (riders) {
      const filteredRiders = riders.filter((rider) =>
        rider.name.toLowerCase().includes(searchText)
      );
      setState((prevState) => ({
        ...prevState,
        filterRiders: filteredRiders,
      }));
    }
  };

  const { loading, filterRiders, errorMessage } = state;

  // Pagination
  const indexOfLastRider = currentPage * resultPerPage;
  const indexOfFirstRider = indexOfLastRider - resultPerPage;
  const currentRiders = filterRiders.slice(indexOfFirstRider, indexOfLastRider);

  return (
    <React.Fragment>
      <NavBar />
      <section>
        <div className="rider-search p-3 header">
          <div className="rider">
            <div className="grid">
              <div className="row">
                <div className="col">
                  <p className="h3 text-success">
                    List of Riders
                    <Link to="/Rider/add" className="btn btn-primary ms-5">
                      <i className="fa fa-plus-circle me-2" />
                      New
                    </Link>
                  </p>
                  <p className="fat-italic">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <form>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <input
                            name="text"
                            type="text"
                            value={query.text}
                            className="form-control"
                            placeholder="Search Names"
                            onChange={searchRider}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-2">
                          <input
                            type="submit"
                            className="btn btn-outline-dark"
                            value="Search"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <div className="contact-list">
            <div className="container">
              <div className="row">
                {currentRiders.length > 0 ? (
                  currentRiders.map((rider) => (
                    <div className="col-md-6" key={rider.id}>
                      <div className="card mt-2">
                        <div className="card-body">
                          <div className="row align-item-center">
                            <div className="col-md-4">
                              <img
                                src={rider?.imgUrl}
                                alt="Rider"
                                className="img-fluid rider-img rounded"
                              />
                            </div>
                            <div className="col-md-7 mt-4">
                              <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                  Name: <span className="fw-bold">{rider.name}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                  Email: <span className="fw-bold">{rider.email}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Position: <span className="fw-bold">{rider?.Position}</span>
                                 </li>
                              </ul>
                            </div>
                            <div className="col-md-1 d-flex flex-column align-items-center">
                              <Link
                                to={`/Rider/View/${rider.id}`}
                                className="btn btn-warning my-1 mt-4"
                              >
                                <i className="fa fa-eye" />
                              </Link>
                              <Link
                                to={`/Rider/Edit/${rider.id}`}
                                className="btn btn-primary my-1"
                              >
                                <i className="fa fa-pen" />
                              </Link>
                              <Link
                                to={''}
                                className="btn btn-danger my-1"
                                onClick={() => handleClickDelete(rider.id)}
                              >
                                <i className="fa fa-trash" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col">
                    <p>No riders found.</p>
                  </div>
                )}
              </div>
              <div className="row mt-3">
                <div className="col">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={ridersCount}
                    onChange={handlePageChange}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="First"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default ListRider;
