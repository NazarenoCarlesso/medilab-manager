import React from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Test from './Test'
import Script from '@gumgum/react-script-tag';




export default function Home() {
    const tests = useSelector(state => state.tests)
    const samples = useSelector(state => state.samples)
    const categories = useSelector(state => state.categories)


   
    return (
        <div>
     
            <b>Samples:</b> {samples.join(' | ')}
            <hr/>
            <b>Categories:</b> {categories.join(' | ')}
            <hr/>
            <Row md={3} className="g-4">
                {tests.map(test =>
                    <Test
                        key={test.id}
                        id={test.id}
                        name={test.name}
                        description={test.description}
                        price={test.price}
                    />
                )}
            </Row>     
            <br/>
            <br />

         <div>
            <div class="powr-comments" id="e403d4d9_1677603213"></div>
               <Script src="https://www.powr.io/powr.js?platform=html"></Script>     
          </div>

        </div>
    )
}


/*
{ <div id="disqus_thread"></div>
<script>
  var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
//     (function() { // DON'T EDIT BELOW THIS LINE
//     var d = document, s = d.createElement('script');
//     s.src = 'https://medialab-2.disqus.com/embed.js';
//     s.setAttribute('data-timestamp', +new Date());
//     (d.head || d.body).appendChild(s);
//     })();
// </script>
// <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> */}