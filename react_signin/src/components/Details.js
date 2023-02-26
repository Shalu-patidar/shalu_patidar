import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'



import "./Details.css"

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);

            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.clear("user_login")
        
        history("/login");
    }

    const userRemove=()=>{
        localStorage.removeItem("user_login")
        history("/")
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h1>Thank you for Logging In, {logindata[0].name}</h1>
                       <table className='first'>
                        <tr>
                         <th className='second'>Name</th>
                        <th className='second'>age</th>
                        <th className='second'>companyName</th>
                        <th className='second'>date of birth</th>
</tr>
<tr>
    <td className='second'>{logindata[0].name}</td>
    <td className='second'>{logindata[0].age}</td>
    <td className='second'>{logindata[0].companyName}</td>
    <td className='second'>{logindata[0].date}</td>
</tr>
                       </table>
                        
                        <Button className='m-5' onClick={userlogout} >Remove Account</Button>
                        <Button className='m-5' onClick={userRemove} >Logout</Button>

                
                        {
                    logindata[0].date === todayDate ? 
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>:""
                }   
                    </>
            }
        </>
    )
}

export default Details