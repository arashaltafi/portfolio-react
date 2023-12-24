import { useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

interface PropType {
  show: boolean,
  onHide: any,
  appname: string,
  items:
  {
    title: string,
    url: string
  }[]
}

const VerticallyCenteredModal = (props: PropType) => {
  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.appname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel ref={carouselRef} fade={true} slide={true} controls={true} indicators={true} keyboard={true} touch={true} variant="dark" pause="hover">
          {
            props.items.map((item, index) => {
              return <Carousel.Item className='h-[50vh]' interval={3000} key={index}>
                <img onClick={() => window.open(item.url)} className="flex h-[40vh] items-center justify-center mx-auto cursor-pointer" src={item.url} alt="test 1" />
                <Carousel.Caption>
                  <h3 className='mt-8 text-zinc-900'>{item.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            })
          }
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <div className='w-full grid grid-cols-6 grid-rows-1 gap-3'>
          <button className='btnCarouse col-start-1 col-end-2' onClick={handlePrev}>Prev</button>
          <button className='btnCarouse col-start-2 col-end-3' onClick={handleNext}>Next</button>
          <button className='btnCarouse col-start-6 col-end-7' onClick={props.onHide}>Close</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticallyCenteredModal