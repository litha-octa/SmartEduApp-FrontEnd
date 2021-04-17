import React from 'react';
import './modal.css';

const modal = (props) => {
return (
<div>
<div className="modal-wrapper"
style={{
transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
opacity: props.show ? '1' : '0'
}}>
<div className="modal-header">
  <h2>Notification</h2>
  <span className="close-modal-btn" onClick={props.close}>x</span>
</div>
<div className="modal-body">
<table id="table-notif">
       <tr>
            <td colspan="3" id="slice-notif">Today</td>
        </tr>
        <tr>
            <td><img src="assets/hot.png" id="notif-img" alt=" "/></td>
            <td>There are 10 news update for today. Don't miss it!</td>
            <td>2 min</td>
        </tr>
        <tr>
            <td><img src="assets/notifnissa.png" id="notif-img" alt=" "/></td>
            <td>Nissa Sabyan sent you a message</td>
            <td>1 hr</td>
        </tr>
        <tr>
            <td><img src="assets/notifrio.png" id="notif-img" alt=" "/></td>
            <td>Rio Dewano sent you a message</td>
            <td>2 hr</td>
        </tr>
        <tr>
            <td><img src="assets/notifgrouptoday.png" id="notif-img" alt=" "/></td>
            <td>6 messages from Discussion Group 21</td>
            <td>10 hr</td>
        </tr>
        <tr>
            <td><img src="assets/notifclass.png" id="notif-img" alt=" "/></td>
            <td>You have 2 classes today.</td>
            <td>15 hr</td>
        </tr>
        <tr>
            <td colspan="3" id="slice-notif">Yesterday</td>
        </tr>
        <tr>
            <td><img src="assets/hot.png" id="notif-img" alt=" "/></td>
            <td>There are 4 news update for today. Don't miss it!</td>
            <td>Yesterday</td>
        </tr>
        <tr>
            <td><img src="assets/notifisyana.png" id="notif-img" alt=" "/></td>
            <td>Isyana Sarasvati sent you a message</td>
            <td>Yesterday</td>
        </tr>
        <tr>
            <td><img src="assets/notiftompi.png" id="notif-img" alt=" "/></td>
            <td>Tompi sent you a message</td>
            <td>Yesterday</td>
        </tr>
        <tr>
            <td><img src="assets/notifclass.png" id="notif-img" alt=" "/></td>
            <td>No class for today. Take a rest!</td>
            <td>Yesterday</td>
        </tr>
        <tr>
            <td colspan="3" id="slice-notif" >This Week</td>
        </tr>
        <tr>
            <td><img src="assets/notifclass.png" id="notif-img" alt=" "/></td>
            <td>You have 1 class today.</td>
            <td>8/10</td>
        </tr>
        <tr>
            <td><img src="assets/notifgrup.png" id="notif-img" alt=" "/></td>
            <td>6 new messages from multi-person chat</td>
            <td>8/10</td>
        </tr>
    </table>
</div>
</div>
</div>
)
}

export default modal;
