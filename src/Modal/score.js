import React from 'react';
import './memberpopup.css';

const score = (props) => {
return (
<div>
<div className="modal-wrapper"
style={{
transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
opacity: props.show ? '1' : '0'
}}>
<div className="modal-header">
  <h2>Isyana</h2>
  <span className="close-modal-btn" onClick={props.close}>x</span>
</div>
<div className="modal-body">
<img src="assets/Member.png" alt=" "/><h3>Isyana</h3>
<table id="table-notif">
       <tr>
            <td colspan="2" id="slice-notif"></td>
        </tr>
        <tr>
            <td>HTML Essential Training<br/></td>
            <td>100</td>    
        </tr>
        <tr>
            <td>CSS Essential Training</td>
            <td>42</td>    
        </tr>
        <tr>
            <td>Javascript Essential Training</td>
            <td>21</td>    
        </tr>
        <tr>
            <td>Responsive Layout</td>
            <td>98</td>    
        </tr>
        <tr>
            <td>Mid-term Exam</td>
            <td>86</td>    
        </tr>
        <tr>
            <td>Bootstrap4 Essential Training</td>
            <td>Unfinished</td>    
        </tr>
        
    </table>
</div>
</div>
</div>
)
}

export default score;
