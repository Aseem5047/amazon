import { Carousel } from 'react-carousel-minimal';
import "./Gallery.css"
function Gallery({ image, title }) {

const data = [];
for(var i=0; i<image.length; i++){
  // console.log(image.length);
  var obj = { "image": image[i], "caption": title};
  data.push(obj);
}

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    display: 'none',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Gallery">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "-10vh auto",
          
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;