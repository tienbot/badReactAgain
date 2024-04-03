function Button({action}) {
    // function test(){
    //     console.log('это только тест клика')
    // }

    return (
    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={action}>test </button>
  );
}

export default Button;


