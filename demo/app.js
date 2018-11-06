import Carousel from '../src/index';
import React from 'react';
import ReactDom from 'react-dom';

const colors = ['7732bb', '047cc0', '00884b', 'e3bc13', 'db7c00', 'aa231f'];
const images = ['test1.jpg', 'test2.jpg', 'test3.jpg', 'test4.jpg', 'test5.jpg']; 
const styles = {
  image: {
    display: 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
  }
};

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      slideIndex: 0,
      length: 6,
      wrapAround: false,
      underlineHeader: false,
      slidesToShow: 1,
      cellAlign: 'left',
      transitionMode: 'scroll',
      heightMode: 'max',
      withoutControls: false
    };

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    this.setState({ underlineHeader: !this.state.underlineHeader });
  }

  render() {
    return (
      <div style={{ width: '375px', margin: 'auto' }}>
        <Carousel
         wrapAround={true}
         slidesToShow={1.0}
         withoutControls={true}
         cellSpacing={5}
         heightMode={'current'}
        >
        {images.map((image, index) => {
          return (
              <div
                key={index}
                style={styles.image}
              >
                <img
                src={`${image}`}
                key={index}
                style={{ height: '228px'}}
                />
              </div>
          );
        })}
        </Carousel>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('content'));
