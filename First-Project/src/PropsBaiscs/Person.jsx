import PropTypes from 'prop-types';
function Person(props)
{
    return (
        <div className='Card'>
            <h3 className='Cardheading'>Name: {props.name}</h3>
            <div className='CardBody'>
                <h5>Age: {props.age}</h5>
                <h4>Email: {props.email}</h4>
                <h4>{props.isStudent?"Student":"Not Student"}</h4>
            </div>
        </div>
    )
}
Person.defaultProps = {
    name: "Person",
    age: 25,
    email: "abc@gmail.com",
    isStudent: false
}
Person.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    isStudent: PropTypes.bool
}
export default Person