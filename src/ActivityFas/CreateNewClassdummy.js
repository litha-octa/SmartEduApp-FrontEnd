import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import "../css/styleActFas/CreateNewClass.css";
import HeaderAct from "../component/HeaderAct";
import ModalComp from '../component/ModalComp';
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import { createClass } from '../redux/ActionCreators/createClass';



function CreateNewClass2(props) {
    const [class_name, setClassName] = useState();
    const [category_id, setCategory_id] = useState();
    const [level_id, setLevel_id] = useState();
    const [description, setDescription] = useState();
    const [pricing, setPricing] = useState();
    const [schedule, setSchedule] = useState();
    const [classImage, setClassImage] = useState();
    const [, setClassNameIsTaken] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [, setRequiredTxt] = useState(false);

    const { createClassReducer, classAdd } = props;

    const class_nameHandler = (e) => {
        setClassName(e.target.value);
        setClassNameIsTaken(false);
    };

    const categoryHandler = (e) => {
        setCategory_id(e.target.value);
    };

    const levelHandler = (e) => {
        setLevel_id(e.target.value);
    };

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    const pricingHandler = (e) => {
        setPricing(e.target.value);
    };

    const scheduleHandler = (e) => {
        setSchedule(e.target.value);
    };
    const fileHandler = (e) => {
        setClassImage(e.target.value);
    };

    const subClassHandler = (e) => {
        e.preventDefault();
        const dataClass = {
            class_name: class_name,
            category_id: category_id,
            description: description,
            level_id: level_id,
            pricing: pricing,
            schedule: schedule,
            classImage: classImage,
        };

        classAdd(dataClass);
    };
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
        } else {
            if (createClassReducer.isPending) {
                console.log('Loading');
            } else if (createClassReducer.isFulfilled) {
                setModalShow(true);
            } else if (createClassReducer.isRejected) {
                const conflict =
                    props.createClassReducer.result.payload;

                if (conflict === 'name') {
                    setClassNameIsTaken(true);
                } else {
                    setRequiredTxt(true);
                }
            }
        }
    }
        , [
            createClassReducer.isFulfilled,
            createClassReducer.isPending,
            createClassReducer.isRejected,
            props,
        ]);


    return (


        <div>
            <HeaderAct />
            {/* <SideActivity /><br /> */}
            <div id="title-box">
                <label id="title-act">Activity</label><br />
                <label id="subtitle">My Class</label><br /><br />
            </div>
            <div className="d-flex">
                <table>
                    <tr className="table-title">
                        <td><input className="form-check-input" type="checkbox" /></td>
                        <td id="nameclass-t1">Class Name</td>
                        <td id="category-t1">Category</td>
                        <td id="description-t1">Description</td>
                        <td>Schedule</td>
                        <td>Student</td>
                    </tr>
                    <tr className="table-content">
                        <td><input className="form-check-input" type="checkbox" /></td>
                        <td>Front-end fundamentals</td>
                        <td>Software</td>
                        <td>Learn the fundamentals of front end...</td>
                        <td>Friday, 08:00 - 09:40</td>
                        <td> 24<img src="assets/Student Icon.png" id="student-icon" alt="student-icon" />
                            <img src="assets/list.png" alt="list" className="list" /></td>
                    </tr>
                    <tr className="table-content">
                        <td><input className="form-check-input" type="checkbox" /></td>
                        <td>HTML for Beginners</td>
                        <td>Software</td>
                        <td>HTML from scratch</td>
                        <td>Monday, 13:00 - 14:40</td>
                        <td> 32<img src="assets/Student Icon.png" id="student-icon" alt="student-icon" />
                            <img src="assets/list.png" alt="list" className="list" /></td>
                    </tr>
                    <tr className="table-content">
                        <td><input className="form-check-input" type="checkbox" /></td>
                        <td id="nameclass">History of Europe</td>
                        <td id="category">History</td>
                        <td id="description">The history of Europe concerns itself...</td>
                        <td>Monday, 15:00 - 16:40</td>
                        <td> 17<img src="assets/Student Icon.png" id="student-icon" alt="student-icon" />
                            <img src="assets/list.png" alt="list" className="list" /></td>
                    </tr>
                </table>

            </div><br />
            <div id="title-box">
                <label id="title-act">Activity</label><br />
            </div>
            <div className="create-container" >
                <table className="form-create-new-class">
                    <tr>
                        <td id="td-left">
                            <div>
                                Class Name : <input type="text" className="class-name" onChange={class_nameHandler} />
                            </div>
                        </td>
                        <td>
                            <div>
                                Pricing : &nbsp; <div className="radio" >
                                    <input type="radio" id="male" name="pricing" value="0" onChange={pricingHandler} />
                                    <label for="free">Free</label>&nbsp;&nbsp;
                                    <input type="radio" id="female" name="pricing" value="10" onChange={pricingHandler} />
                                    <label for="paid">Paid</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                Categories :<select id="category-selector" onChange={categoryHandler}>
                                    <option>........</option>
                                    <option value="7">Software</option>
                                    <option value="4">Math</option>
                                    <option value="3">History</option>
                                    <option value="2">Finance</option>
                                    <option value="5">Psychology</option>
                                    <option value="6">Sience</option>
                                </select >
                            </div>
                        </td>
                        <td>
                            <div>
                                Schedule : &nbsp;&nbsp;<input type="date" className="date" onChange={scheduleHandler} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                Level :  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                <select id="category-selector" onChange={levelHandler}>
                                    <option>.....</option>
                                    <option value="3">Advanced</option>
                                    <option value="1">Beginner</option>
                                    <option value="2">Intermediate</option>
                                </select >
                            </div>
                        </td>
                        <td><input type='file' onChange={fileHandler} /></td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                Description :
                            </div>
                        </td>
                    </tr>
                </table>
                <textarea className="description-field" onChange={descriptionHandler} />
                <button id="btn-create" onClick={subClassHandler}>Create</button>

            </div>
            <ModalComp
                header='Login gagal !'
                msg='Email atau Password salah'
                show={modalShow}
                onHide={() => useHistory.push('/CreateNewClass')}
                variant='success'
                footermsg='refresh' />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { createClassReducer } = state;
    return {
        createClassReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        classAdd: (data) =>
            dispatch(createClass('http://localhost:8300/api/v1/newclass/create', data)),
    };
};

const ConnectedCreateClass2 = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateNewClass2);

export default ConnectedCreateClass2;