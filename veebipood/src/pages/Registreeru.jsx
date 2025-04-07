import { useRef } from "react"
import kasutajadFailist from "../data/kasutajad.json"
import { ToastContainer, toast } from "react-toastify";

function Registreeru() {
  const emailRef = useRef();
  const passwordRef = useRef();


  const registreeru = () => {

    if (emailRef.current.value.includes("@") === false) {
        toast.error("Email peab sisaldama @");
        return; //lõpetab funktsiooni
      }
  
      if (emailRef.current.value.length < 6) {
       toast.error("Email pole korrektne");
        return; //lõpetab funktsiooni
      }
      
      toast.success("Email edukalt lisatud");

    kasutajadFailist.push({
        "email": emailRef.current.value,
        "password": passwordRef.current.value
    })

  }

  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      <button onClick={registreeru}>Registreeru</button>
      

      <ToastContainer />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="light"
        />
    </div>

    
  )
}

export default Registreeru
