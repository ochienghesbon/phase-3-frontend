import {useState} from "react";
import { Link } from "react-router-dom";

    return (
        <div>
             
                <form className='add-form' onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label>Name</label>
                        <input 
                            type='text' 
                            placeholder='Add Name' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className='form-control'>
                        <label>Email address</label>
                        <input 
                            type='text' 
                            placeholder='Email address'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <input type='submit' value='Save User' className='btn btn-block' />
                </form>
                <Link to={"/"}><button className="btn btn-block">back home</button></Link>
              
        </div>
    )
}

export default User
