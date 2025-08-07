import PropTypes from 'prop-types';
function Person(props)
{
    return (
        <div className='Card'>
            <h3 className='Cardheading'>{props.name}</h3>
            <div className='CardBody'>
                <h4>Age: {props.age}</h4>
                <h4>Email: <span className='email'>{props.email}</span></h4>
                <h4>Occopation: {props.isStudent?"Student":"Not Student"}</h4>
            </div>
        </div>
    )
}
//does not work in React 18 and above. Instead need to use function parameters default values
Person.defaultProps = {
    name: "Person",
    age: 25,
    email: "abc@gmail.com",
    isStudent: false,
};
//does not work in React 19 + Vite
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    isStudent: PropTypes.bool,
};
export default Person