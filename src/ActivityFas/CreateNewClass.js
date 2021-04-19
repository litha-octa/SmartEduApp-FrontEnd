// import React, { Component } from "react";
// import "../css/styleActFas/CreateNewClass.css";
// //import { Link } from "react-router-dom";
// import HeaderAct from "../component/HeaderAct";
// // import SideActivity from "./component/SideActivity";



// class CreateNewClass extends Component {
//   render() {
//     return (
//       <div>
//         <HeaderAct />
//         {/* <SideActivity /><br /> */}
//         <div id="title-box">
//           <label id="title-act">Activity</label><br />
//           <label id="subtitle">My Class</label><br /><br />
//         </div>
//         <div className="d-flex">
//           <table>
//             <tr className="table-title">
//               <td><input className="form-check-input" type="checkbox" /></td>
//               <td id="nameclass-t1">Class Name</td>
//               <td id="category-t1">Category</td>
//               <td id="description-t1">Description</td>
//               <td>Schedule</td>
//               <td>Student</td>
//             </tr>
//             <tr className="table-content">
//               <td><input className="form-check-input" type="checkbox" /></td>
//               <td>Front-end fundamentals</td>
//               <td>Software</td>
//               <td>Learn the fundamentals of front end...</td>
//               <td>Friday, 08:00 - 09:40</td>
//               <td> 24<img src="assets/Student Icon.png" id="student-icon" alt="student-icon" />
//                 <img src="assets/list.png" alt="list" className="list" /></td>
//             </tr>
//             <tr className="table-content">
//               <td><input className="form-check-input" type="checkbox" /></td>
//               <td>HTML for Beginners</td>
//               <td>Software</td>
//               <td>HTML from scratch</td>
//               <td>Monday, 13:00 - 14:40</td>
//               <td> 32<img src="assets/Student Icon.png" id="student-icon" alt="student-icon" />
//                 <img src="assets/list.png" alt="list" className="list" /></td>
//             </tr>
//             <tr className="table-content">
//               <td><input className="form-check-input" type="checkbox" /></td>
//               <td id="nameclass">History of Europe</td>
//               <td id="category">History</td>
//               <td id="description">The history of Europe concerns itself...</td>
//               <td>Monday, 15:00 - 16:40</td>
//               <td> 17<img src="assets/Student Icon.png" id="student-icon" alt="student-icon" />
//                 <img src="assets/list.png" alt="list" className="list" /></td>
//             </tr>
//           </table>

//         </div><br />
//         <div id="title-box">
//           <label id="title-act">Activity</label><br />
//         </div>
//         <div className="create-container" >
//           <table className="form-create-new-class">
//             <tr>
//               <td id="td-left"><div>Class Name : <input type="text" className="class-name" /></div></td>

//               <td><div>Pricing : &nbsp; <div className="radio"><input type="radio" id="male" name="pricing" value="free" />
//                 <label for="free">Free</label>&nbsp;&nbsp;
//                                                   <input type="radio" id="female" name="pricing" value="paid" />
//                 <label for="paid">Paid</label>
//               </div>

//               </div>
//               </td>
//             </tr>
//             <tr>
//               <td><div>Categories : <select id="category-selector">
//                 <option>Software</option>
//                 <option>Math</option>
//                 <option>History</option>
//                 <option>Finance</option>
//                 <option>Psychology</option>
//               </select >
//               </div>
//               </td>
//               <td><div>Schedule : &nbsp;&nbsp;<input type="date" className="date" /></div></td>
//             </tr>
//             <tr>
//               <td><div>Level :  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<select id="category-selector">
//                 <option>Advanced</option>
//                 <option>Beginner</option>
//                 <option>Intermediate</option>
//               </select >
//               </div>
//               </td>
//               <td><input type='file' name='foto' /></td>
//             </tr>
//             <tr>
//               <td colSpan="2"><div>Description :</div></td>
//             </tr>
//           </table>
//           <textarea className="description-field"></textarea>
//           <button id="btn-create">Create</button>

//         </div>
//       </div>
//     );
//   }
// }

// export default CreateNewClass;