import React, { Component } from "react";
import "./Notif.css";

class Notif extends Component {
 render() {
    return ( 
    	<div>

    <table>
        <tr>
            <td colspan="3">Notification</td>
        </tr>
       <tr>
            <td colspan="3">Today</td>
        </tr>
        <tr>
            <td></td>
            <td>There are 10 news update for today. Don't miss it!</td>
            <td>2 min</td>
        </tr>
        <tr>
            <td></td>
            <td>Nissa Sabyan sent you a message</td>
            <td>1 hr</td>
        </tr>
        <tr>
            <td></td>
            <td>Rio Dewano sent you a message</td>
            <td>2 hr</td>
        </tr>
        <tr>
            <td></td>
            <td>6 messages from Discussion Group 21</td>
            <td>10 hr</td>
        </tr>
        <tr>
            <td></td>
            <td>You have 2 classes today.</td>
            <td>15 hr</td>
        </tr>
        <tr>
            <td colspan="3">Yesterday</td>
        </tr>
        <tr>
            <td></td>
            <td>There are 4 news update for today. Don't miss it!</td>
            <td>Yesterday</td>
        </tr>
        <tr>
            <td></td>
            <td>Isyana Sarasvati sent you a message</td>
            <td>Yesterday</td>
        </tr>
        <tr>
            <td></td>
            <td>Tompi sent you a message</td>
            <td>Yesterday</td>
        </tr>
        <tr>
            <td></td>
            <td>No class for today. Take a rest!</td>
            <td>Yesterday</td>
        </tr>
        <tr>
            <td colspan="3">This Week</td>
        </tr>
        <tr>
            <td></td>
            <td>You have 1 class today.</td>
            <td>8/10</td>
        </tr>
        <tr>
            <td></td>
            <td>6 new messages from multi-person chat</td>
            <td>8/10</td>
        </tr>
    </table>
    	</div>
    	);}}

export default Notif;