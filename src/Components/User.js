import {useState} from "react";
import { Link } from "react-router-dom";
const User = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        const userData={name:name,email:email}
        fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then((r) => r.json())
    .then((newUser) => console.log(newUser))
    setEmail("")
    setName("")
    }
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
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label>Email address</label>
                        <input 
                            type='text' 
                            placeholder='Email address'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>

                    <input type='submit' value='Save User' className='btn btn-block' />
                </form>
                <Link to={"/"}><button className="btn btn-block">back home</button></Link>
              
        </div>
    )
}

export default User
