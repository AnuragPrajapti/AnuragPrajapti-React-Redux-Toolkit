import React,{useEffect} from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import { useContext } from "react";
import noteContext from "../../Context/NoteContext";
const Home = () => {

  const title = useContext(noteContext);

  useEffect(() => {
    title.setTitle("Home component....")
  }, [])
  

  return (
    <div>
       <title>Home Page...</title>
      <div>
        <Carousel >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
              height="500"
            />
            <Carousel.Caption >
              <h3 className="textArea">First slide label</h3>
              <p className="textArea">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
              height="500"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              height="500"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h1 align="center">Welcome to YuvaSoft</h1>
      </div>
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa earum porro commodi, quas autem reiciendis explicabo est ad, laborum dolore qui id eligendi corporis soluta, doloribus accusantium magni architecto cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae obcaecati rerum id, quia odit quaerat doloribus labore, necessitatibus repellendus rem iure omnis natus minus porro excepturi. Voluptas, ipsum molestias!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita rem provident rerum harum neque, tenetur magnam quis molestias voluptas. Reiciendis, quisquam aspernatur. Nesciunt accusantium quaerat modi! Eius, inventore veniam.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aliquam dolorem numquam magni, quas, blanditiis, cupiditate deserunt voluptas atque reiciendis placeat. In culpa aut, repudiandae sed aliquid accusantium? Dolor, mollitia!</p>
      </div>
    </div>
  );
}

export default Home;