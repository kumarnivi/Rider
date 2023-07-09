// import React, { useEffect, useState } from "react";
// import NavBar from "../../navbar/NavBar";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import RiderService from "../../../backend/RiderService";

// const EditRider = () => {
//     let navigate = useNavigate();
//     let { Id } = useParams();

//     let [state, setState] = useState({
//         loading: false,
//         rider: {
//             name: '',
//             email: '',
//             Position: '',
//             Status: '',
//             NRIC: '',
//             imgUrl: '',
//         },
//         errorMessage: '',
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setState((prevState) => ({
//                     ...prevState,
//                     loading: true,
//                 }));
//                 let response = await RiderService.getRider(Id);
//                 setState((prevState) => ({
//                     ...prevState,
//                     loading: false,
//                     rider: response.data,
//                 }));
//             } catch (error) {
//                 setState((prevState) => ({
//                     ...prevState,
//                     loading: false,
//                     errorMessage: error.message,
//                 }));
//             }
//         };
//         fetchData();
//     }, [Id]);

//     let updateInput = (event) => {
//         setState({
//             ...state,
//             rider: {
//                 ...state.rider,
//                 [event.target.name]: event.target.value
//             }
//         });
//     };

//     let submitForm = async (event) => {
//         event.preventDefault();
//         try {
//             let response = await RiderService.updateRider(state.rider, Id);
//             if (response) {
//                 navigate('/Rider', { replace: true });
//             }
//         } catch (error) {
//             setState({
//                 ...state,
//                 errorMessage: error.message
//             });
//             navigate(`/Rider/Edit/${Id}`, { replace: false });
//         }
//     };

//     let { loading, rider, errorMessage } = state;

//     return (
//         <React.Fragment>
//             <NavBar />
//             {/* <pre>{JSON.stringify(rider)}</pre> */}
//             <section className="add-rider p-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 text-primary fw-bold">Edit Rider</p>
//                             <p className="fas-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iusto?</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-4">
//                             <form onSubmit={submitForm}>
//                                 <div className="mb-2">
//                                     <input type="text"
//                                         className="form-control"
//                                         placeholder="ID"
//                                         value={rider.id}
//                                         readOnly
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="text"
//                                         className="form-control"
//                                         placeholder="Name"
//                                         value={rider.name}
//                                         name="name"
//                                         onChange={updateInput}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="text"
//                                         className="form-control"
//                                         placeholder="Email"
//                                         value={rider.email}
//                                         name="email"
//                                         onChange={updateInput}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="text"
//                                         className="form-control"
//                                         placeholder="Position"
//                                         value={rider.Position}
//                                         name="Position"
//                                         onChange={updateInput}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="text"
//                                         className="form-control"
//                                         placeholder="NRIC"
//                                         value={rider.NRIC}
//                                         name="NRIC"
//                                         onChange={updateInput}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="text"
//                                         className="form-control"
//                                         placeholder="Status"
//                                         value={rider.Status}
//                                         name="Status"
//                                         onChange={updateInput}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="text"
//                                         className="form-control"
//                                         placeholder="Image URL"
//                                         value={rider.imgUrl}
//                                         name="imgUrl"
//                                         onChange={updateInput}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="submit"
//                                         className="btn btn-primary"
//                                         value='Edit'
//                                     />
//                                     <Link to={'/Rider'} className="btn btn-dark ms-2">Cancel</Link>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="col-md-6">
//                             <img src={rider.imgUrl} className="rider-img align-items-center"  onChange={updateInput}/>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//     )
// }

// export default EditRider;
