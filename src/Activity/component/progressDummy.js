import React, { Component } from "react";
import "./ActCont4.css";

class progressDummy extends Component {
 render() {
    return ( 
    	<div>
    	
<table>
	<tr>
		<td><input type="checkbox" checked ="checked" /></td>
		<td>HTML Essential Training</td>
		<td>You have completed this topic</td>
		<td id="score"><div className="blue">100</div></td>
	</tr>
	<tr>
		<td><input type="checkbox" checked ="checked"/></td>
		<td>CSS Essential Training</td>
		<td>You have completed this topic</td>
		<td id="score"><div className="yellow">42</div></td>
	</tr>
	<tr>
		<td><input type="checkbox" checked ="checked"/></td>
		<td>Javascript Essential Training</td>
		<td>You have completed this topic</td>
		<td id="score"><div className="red">21</div></td>
	</tr>
	<tr>
		<td><input type="checkbox" checked ="checked"/></td>
		<td>Javascript Essential Training</td>
		<td>You have completed this topic</td>
		<td id="score"><div className="blue">98</div></td>
	</tr>
	<tr>
		<td><input type="checkbox" checked ="checked"/></td>
		<td>Mid-term Exam</td>
		<td>You have completed this topic</td>
		<td id="score"><div className="green">86</div></td>
	</tr>
	<tr>
		<td><input type="checkbox" checked ="checked"/></td>
		<td>Bootstrap4 Essential Training</td>
		<td>You have completed this topic</td>
		<td id="score"><div className="blue">72</div></td>
	</tr>
	<tr>
		<td><input type="checkbox"/></td>
		<td>Sass Essential Training</td>
		<td>Friday, 6 November 2020
08.00 - 09.40</td>
		<td></td>
	</tr>
	<tr>
		<td><input type="checkbox"/></td>
		<td>Learning React.js</td>
		<td>Friday, 13 November 2020
08.00 - 09.40</td>
		<td id="unfinished">unfinished</td>
	</tr>
	<tr>
		<td><input type="checkbox"/></td>
		<td>UX for Web Design</td>
		<td>Friday, 20 November 2020
08.00 - 09.40</td>
		<td id="unfinished">unfinished</td>
	</tr>
	<tr>
		<td><input type="checkbox"/></td>
		<td>Final-term Exam</td>
		<td>Friday, 27 November 2020
08.00 - 09.40</td>
		<td id="unfinished">
			unfinished</td>
	</tr>
</table>

    	</div>
    	);
  }
}
 

export default progressDummy;