'use strict';

import React from 'react';

var person = [];
const Myform = React.createClass({
    render:function(){
        return(
            <div className="home">
                <p className="heading">Please fill the form </p>
                <form id="myForm" noValidate>
                    <div className="form-para">
                        <label htmlFor ="firstname" className="label-para">First Name</label>
                        <input ref="name" type="text" name="fname" id="firstname" pattern="[A-Za-z]{1,32}" required/>
                    </div>

                    <div className="form-para">
                        <label htmlFor ="lastname" className="label-para">Last Name</label>
                        <input type="text" name="lname" id="lastname" pattern="[A-Za-z]{1,32}" required />
                    </div>

                    <div className="form-para">
                        <label htmlFor ="age" className="label-para">Age</label>
                        <input type ="number" id="age" name="age" min="1" max="99" pattern="\d+" required/>
                    </div>

                    <div className="form-para">
                        <label htmlFor ="dob" className="label-para">Date of birth</label>
                        <input type ="date" id="dob" onClick={this.props.dateofbirth} required />
                    </div>

                    <div className="form-para">
                        <label htmlFor ="gender" className="label-para">Gender</label>
                        <input type="text" id="gender" name="gender" list="l1" required
                            pattern="[Mm]ale|[Ff]emale" />
                        <datalist id="l1">
                            <option>Male</option>
                            <option>Female</option>    
                        </datalist>
                    </div>

                    <div className="form-para">
                        <label htmlFor ="phone" className="label-para">Phone</label>
                        <input type="text" id="phone" name="phone" pattern="[789][0-9]{9}" required/>
                    </div>

                    <div className="form-textarea">
                        <label htmlFor ="text" className="label-para">message</label>
                        <textarea type="text" rows="4" placeholder="write your message"></textarea>
                    </div>
                    
                    <button className="button" type="text" onClick={this.props.readvalue}>submit</button>
                </form>
            </div>
        );
    }
});

const Sidebar = React.createClass({
    handleKeyPress:function(){
        $("#search-criteria").on("keyup", function() {
        var g = $(this).val().toLowerCase();
        $(".sidebar__name label").each(function() {
        var s = $(this).text().toLowerCase();
        $(this).closest('.sidebar__name')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
         });
    });
},
render:function(){
    // console.log(this.props.person);
        return(
            <div className="sidebar">
                <form>
                    <input id="search-criteria" className="search" type="text" name="search" placeholder="search..." onKeyPress={this.handleKeyPress} />
                </form>
                <div className="sidebar__name">
                    <label htmlFor="check">{this.props.person}</label>
                </div>
            </div>
        );
    }
});

const Home= React.createClass({
    getInitialState: function() {
        return {
            person: person
        }
    },
    dateofbirth:function(){
            $("#datepicker").datepicker();
    },
    readvalue:function(event){
        var that = this;
       // $("form").submit(function(event) {
            debugger;
            event.preventDefault();
            var dataObj = this.fname.value;
            person.push(dataObj);
            console.log(person);
            that.setState({
             person: person
            });
        // });
    },
    render:function(){
        return(
            <div className="container">
                <Sidebar person={this.state.person}/>
                <Myform readvalue={this.readvalue} dateofbirth={this.dateofbirth}/>
            </div>
        );
    }
});



export default Home;