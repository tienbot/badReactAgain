import Button from '../Button/Button';
import Time from '../Time/Time';
import Img from '../Img/Img';
import Descr from '../Descr/Descr';

function Card({descr, time, img, alt}) {
    function test(){
        console.log('это только тест клика')
    }

    return (
        <div className="card mb-4 box-shadow">
            <Img img={img} alt={alt}/>
            <div className="card-body">
            <Descr descr={descr} />
            <div className="d-flex justify-content-between align-items-center">
                <Button action={test}/>
                <Time time={time}/>
            </div>
            </div>
        </div>
    );
  }
  
  export default Card;
  