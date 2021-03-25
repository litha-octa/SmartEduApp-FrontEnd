import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./css/ActCont4.css";

class ActCont1 extends Component {
 render() {
    return ( 
    	<div>
    	 <table id="ActCont1-table">
        <tr className="ActCont1-header">
            <td>Class Name</td>
            <td>Category</td>
            <td>Description</td>
            <td>Level</td>
            <td>Pricing</td>
            <td></td>
        </tr>
        <br/>
        <tr>
            <td><Link to ="./Activity3" id="linkTo">Know more Javascript</Link></td>
            <td>Software</td>
            <td>Javascript from the basic for..</td>
            <td>Beginner</td>
            <td>Free</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
        <tr>
            <td>HTML and Css to code</td>
            <td>Software</td>
            <td>Start combining HTML and CSS to..</td>
            <td>Intermediate</td>
            <td>$10</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
        <tr>
            <td>Indonesian war history</td>
            <td>History</td>
            <td>From the first colonialization until..</td>
            <td>Advance</td>
            <td>$50</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
        <tr>
            <td>Buddhism and Modern Psychology</td>
            <td>Psychology</td>
            <td>Buddhism and science are deeply..</td>
            <td>Beginner</td>
            <td>Free</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
        <tr>
            <td>Financial markets</td>
            <td>Finance</td>
            <td>An overview of the ideas, methods...</td>
            <td>Intermediate</td>
            <td>$10</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
         <tr>
            <td>Corporate Finance</td>
            <td>Finance</td>
            <td>Introduction to the fundamentals...</td>
            <td>Advance</td>
            <td>$50</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
         <tr>
            <td>Algorithm specialization</td>
            <td>Math</td>
            <td>Learn to think like a computer...</td>
            <td>Advance</td>
            <td>$50</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
         <tr>
            <td>Business and Financial Modeling</td>
            <td>Software</td>
            <td>Designed to help you make..</td>
            <td>Beginner</td>
            <td>Free</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
        <tr>
            <td>Marketing in a Digital World</td>
            <td>Software</td>
            <td>This class examines how digital...</td>
            <td>Intermediate</td>
            <td>$10</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
        <br/>
        <tr>
            <td>Social Psychology</td>
            <td>Psychology</td>
            <td>This class offers some answers...</td>
            <td>Advance</td>
            <td>$50</td>
            <td><input type="button" id="ActCont1-btn" value="Register"/></td>
        </tr>
    </table>
    	</div>
    	);}}

export default ActCont1