import React from "react";
import "../Styles/Root.less";
import { Link } from 'react-router-dom';

function Root() {

        return (
            <>
                <div className="rootewrap">
                    <div className="rootetxt">
                        <p className="load">가장 넓은 길은</p>
                        <p className="mind">언제나 내 마음속에</p>
                        <p className="smalltxt">다이어리와 함께 걸어요</p>
                        <div className="signup-link"> 
                            <button><Link to="/Login">Let's go</Link></button> 
                        </div>
                    </div>
                </div>    
            </>
        )
    }
  
  export default Root;