import facebook from "../assets/iconoFb.png"
import instagram from "../assets/iconoIg.png"

export const Footer = () => {
  return (
    <div className="footer">
        <p className="copyright">Copyright 2023 Martina Tahir</p>
        <div>
            <img src={facebook} className="icons" />
            <img src={instagram} className="icons" />
        </div>       
    </div>
  )
}
