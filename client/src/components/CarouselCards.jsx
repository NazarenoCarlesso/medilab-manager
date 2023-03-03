import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

  function CarouselCards (){
    return (
      <Carousel variant="dark">
        <Carousel.Item style={{ height: 400 }}>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
          </Stack>
    
        </Carousel.Item>
        <Carousel.Item style={{ height: 400 }}>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
          </Stack>
        </Carousel.Item>

        <Carousel.Item style={{ height: 400 }}>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: 250, height: 320 }}></Card>
          </Stack>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default CarouselCards;