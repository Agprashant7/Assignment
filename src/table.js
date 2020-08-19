import React from 'react';
import studentdata from './data.json';
import classes from './table.module.css';
import {Redirect}from 'react-router-dom';
import Axios from 'axios';

class Table extends React.Component{

    constructor(props){
        super(props)
    
    }
    state={
        studentdata:studentdata,
        list:[]
  
      }
      componentDidMount(){
          {/*
        Axios.get('https://5f3ce7ff6c11f80016d6f6a9.mockapi.io/students')
        .then(respons=>{
            this.setState({studentdata:respons.data})
            console.log(this.state.studentdata)
        });
    */  }{/* backend API   */}

        const updated=studentdata.sort((a,b)=>a.name.localeCompare(b.name));
        this.setState({studentdata:updated})
        console.log(this.state.studentdata)
      };
     
     
     
      Next=()=>{
          this.props.history.push('/Admission')
      }
     
      render(){
         
        const table=this.state.studentdata.map((i,j)=>{
            let arr=[]
            let a=parseInt(i.marks.Science);
            let b= parseInt(i.marks.English);
            let c= parseInt(i.marks.Maths);
            let total= a + b + c;
            let colour='black'
            arr.push(total)
            
            let res=''
           if(a<20 || b<20 || c<20){
               res="fail"
               colour='red'
           }
           else {
            let large=Math.max(arr)
            total>large?res='topper':res='pass'
           }
           
           
          return(
            <tr>
                
          <td style={{color:colour,textTransform:'capitalize'}} className={classes.capName}>{i.name}</td>
          <td style={{color:colour}}>{i.rollNumber}</td>
          <td style={{color:colour}}>{total}</td>
          <td style={{color:colour}}>{res}</td>
            </tr>
      
          
          )
        })

         return(
            <div className={classes.container}>
                <table className={classes.tab}>
                    <tr><td colSpan='4'style={{fontStyle:"bold",fontWeight:"bolder"}}>Students result</td></tr>
                    <tr>
                        <td className={classes.subHeading}>Student Name</td>
                        <td className={classes.subHeading}>RollNumber</td>
                        <td className={classes.subHeading}>Total</td>
                        <td className={classes.subHeading}>status</td>
                    </tr>
                {table}
                </table>
                <center>
                <button onClick={this.Next} >Admission Page</button></center>
            </div>
         )
          
      }
}
export default Table