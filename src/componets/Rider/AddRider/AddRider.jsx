// import React, { useState } from 'react';
// import NavBar from "../../navbar/NavBar";
// import { Link, useNavigate } from "react-router-dom";
// import RiderService from "../../../backend/RiderService";

// const AddRider = () => {
//     let navigate = useNavigate();

//     let [state, setState] = useState({
//         loading: false,
//         add: {
//             name: '',
//             email: '',
//             Position: '',
//             Status: '',
//             NRIC : '',
//             imgUrl : '',
//         },
//         errorMessage: ''
//     });

//     let updateInput = (event) => {
//         setState({
//             ...state,
//             add: {
//                 ...state.add,
//                 [event.target.name]: event.target.value
//             }
//         });
//     };

//     let submitForm = async (event) => {
//         event.preventDefault();
//         try {
//             let response = await RiderService.createRider(state.add);
//             if (response) {
//                 navigate('/Rider', { replace: true });
//             }
//         } catch (error) {
//             setState({
//                 ...state,
//                 errorMessage: error.message
//             });
//             navigate('/Rider', { replace: false });
//         }
//     };

//     let { loading, add, errorMessage } = state;

//     return (
//         <React.Fragment>
//             <NavBar />
//             <section className="add-rider p-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 text-success fw-bold">Create Rider</p>
//                             <p className="fas-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iusto?</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-4">
//                             <form onSubmit={submitForm}>
//                                 <div className="mb-2">
//                                     {/* <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="ID"
//                                         onChange={updateInput}
//                                         required={true}
//                                         name='id'
//                                         value={add.id}
//                                     /> */}
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Name"
//                                         onChange={updateInput}
//                                         required={true}
//                                         name='name'
//                                         value={add.name}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Email"
//                                         onChange={updateInput}
//                                         required={true}
//                                         name='email'
//                                         value={add.email}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Position"
//                                         onChange={updateInput}
//                                         required={true}
//                                         name='Position'
//                                         value={add.Position}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Status"
//                                         onChange={updateInput}
//                                         required={true}
//                                         name='Status'
//                                         value={add.Status}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="NRIC"
//                                         onChange={updateInput}
//                                         required={true}
//                                         name='NRIC'
//                                         value={add.NRIC}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Image URL"
//                                         onChange={updateInput}
//                                         required={true}
//                                         name='imgUrl'
//                                         value={add.imgUrl}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         type="submit"
//                                         className="btn btn-success"
//                                         value='Create'
//                                     />
//                                     <Link to={'/Rider'} className="btn btn-dark ms-2">Cancel</Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//     );
// }

// export default AddRider;
