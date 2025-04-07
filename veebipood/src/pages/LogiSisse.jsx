
import { useRef } from "react"
import kasutajadFailist from "../data/kasutajad.json"
import { ToastContainer, toast } from "react-toastify";

function LogiSisse() {
  const emailRef = useRef();
  const passwordRef = useRef();


  const logiSisse = () => {
        const found = kasutajadFailist.find(kasutaja => kasutaja.email === emailRef.current.value);

        if (found === undefined) {
            toast.error("Email pole korrektne")
            return;
        }

        if (found.parool !== passwordRef.current.value) {
            toast.error("Parool pole korrektne")
            return;
        }

        toast.success("Edukalt sisse logitud!");
    }

  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      <button onClick={logiSisse}>Logi sisse</button>
      

      <ToastContainer />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="light"
        />
    </div>

    
  )
}

export default LogiSisse
