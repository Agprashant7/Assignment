import React from 'react';
import classes from './admission.module.css'


class Admission extends React.Component{
    render(){
        return(
         
            
            <form className={classes.formdiv}>
                <h1 align="center">Register</h1>
	
		
		<div class="field">
			<input type="text" name="uname" pattern="[A-Za-z]+" maxLength='20' placeholder="Firstname"  required  className={classes.box}/>
		</div>
		<div class="field">
			<input type="text" name="Lname" pattern="[A-Za-z]+" maxLength='20' placeholder="LastName" required className={classes.box}/>
		</div>
		<div class="field">
			<input type="text" name="class" placeholder="Class" required className={classes.box}/>
		</div>
		<div class="field">
            <label>Year of Passing</label>
			<input type="date" max="2017-01-01" name="date" placeholder="Year of Passinng" required className={classes.box}/>
		</div>
        <div class="field">
			<input type="number" name="date" placeholder="Marks inPercentage" required className={classes.box}/>
		</div>
		
		<div class="sub">
            <center>
			<input type="submit" name="submit" value="Register" className={classes.submit}/></center>
		</div>
        
		
            </form>
            
        )
    }
    
}
export default Admission;