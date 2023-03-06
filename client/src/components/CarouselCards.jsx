import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack'
import { useSelector } from 'react-redux'
import Test from '../components/Test'



export default  function CarouselCards (){
  const fav1 = useSelector(state => state.tests.find((test)=> test.id === 1))
  const fav2 = useSelector(state => state.tests.find((test)=> test.id === 5))
  const fav3 = useSelector(state => state.tests.find((test)=> test.id === 6))
  const fav4 = useSelector(state => state.tests.find((test)=> test.id === 7))
  const fav5 = useSelector(state => state.tests.find((test)=> test.id === 8))
  const fav6 = useSelector(state => state.tests.find((test)=> test.id === 13))
  const fav7 = useSelector(state => state.tests.find((test)=> test.id === 638))
  const fav8 = useSelector(state => state.tests.find((test)=> test.id === 647))

    return (
      <Carousel variant="dark">
        <Carousel.Item style={{ height: 400 }}>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}>  
          <Test
              key={fav1}
              id={fav1?.id}
              name={fav1?.name}
              price={fav1?.price}
          />
          <Test
              key={fav2}
              id={fav2?.id}
              name={fav2?.name}
              price={fav2?.price}
          /> 

          <Test
              key={fav3}
              id={fav3?.id}
              name={fav3?.name}
              price={fav3?.price}
          />
            
            <Test
              key={fav4}
              id={fav4?.id}
              name={fav4?.name}
              price={fav4?.price}
          />
          </Stack>
    
        </Carousel.Item>
        <Carousel.Item style={{ height: 400 }}>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}>
            <Test
              key={fav5}
              id={fav5?.id}
              name={fav5?.name}
              price={fav5?.price}
          />
          <Test
              key={fav6}
              id={fav6?.id}
              name={fav6?.name}
              price={fav6?.price}
          /> 

          <Test
              key={fav7}
              id={fav7?.id}
              name={fav7?.name}
              price={fav7?.price}
          />
            
            <Test
              key={fav8}
              id={fav8?.id}
              name={fav8?.name}
              price={fav8?.price}/>
              
          </Stack>
        </Carousel.Item>
      </Carousel>
    );
  }
  




    

    
        
