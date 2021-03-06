import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


// ============================================================================================

// Set up Carousel view and receive placeData as props from Home Component

const ShowcaseBody = (props) => {
  //   console.log(props.place);
  const { name, image, shortDescription, placeId } = props.place;

//  const [place,setPlace] = useContext(PlaceContext);

  // Handle "Booking" Button dynamically and store the placeId for later use in Hotel Component
  const history = useHistory();
  const handleClickPlace = (placeId) => {
    history.push(`/place-details/${placeId}`);
  };

  return (
    <Row className='d-flex align-items-center justify-content-center'>
      <Col md={5}>
        <div className='mb-2'>
          <h3>{name}</h3>
          <p>{shortDescription}</p>
          <Button onClick={() => handleClickPlace(placeId)} variant='warning'>
            Booking <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </Col>

      <Col md={5}>
        <img
          className='d-block carousel-img'
          style={{ width: '60%', margin: 'auto' }}
          src={image}
          alt='First slide'
        />
      </Col>
    </Row>
  );
};

export default ShowcaseBody;
