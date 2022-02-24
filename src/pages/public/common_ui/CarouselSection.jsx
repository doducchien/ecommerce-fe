import { Carousel } from 'antd';
const contentStyle = {
    // height: '160px',
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
function CarouselSection() {

    return (
        <Carousel className='carousel-section' style={{width: '100%', height: '400px'}} autoplay>
            <div style={{height: '600px'}}>
                <img width='100%' height='600px' src='/assets/img/carousel/img2.jpeg'/>
            </div>
            <div  style={{height: '400px'}}>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div  style={{height: '400px'}}>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div  style={{height: '400px'}}>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );

}

export default CarouselSection;