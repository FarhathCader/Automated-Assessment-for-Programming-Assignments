import "./front.css";
import { useNavigate } from "react-router-dom";

const Front = () => {

    const navigate = useNavigate()

    function signup(){
        navigate('/login')
    }
  return (
    <div className="front">
      <div className="front-content">
        <h1 className="front-title">Code Unlocks Infinite Possibilities</h1>
        <div className="front-texts">
          <p className="front-text">
            Empowering Students to Excel Through Code and Creativity
          </p>
          <p>
            <button className="signup" onClick={signup} >Sign up</button>
          </p>
          <p className="front-text">
            Crafting Futures with <b>Z-Code</b>: Empowering Minds, Fueling
            Innovations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Front;