import './Img.css';
// import img from '../img/spider-man.jpg'

function Img({img, alt}) {
    return (
        <img className="card-img-top" src={img} alt={alt} />
    );
  }
  
  export default Img;