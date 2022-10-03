# Finger Swipe JS
<p>Run any function on swipe!</p>
<p>Finger Swipe JS is a easy-to-use library which you can trigger any function on swipe with your finger!
<p> Works only mobile devices. </p>

## Try live demo:
<p>https://finger-swipe-js.vercel.app </p>

# How to install

<h3>NPM<h3>

``` JSX
  npm install finger-swipe-js
```  

## Usage
import Finger Swipe Js into your file.
<pre>import FingerSwipe from 'finger-swipe-js'</pre>

<h3>Props</h3>
<table>
  <tr>
    <td></td>
    <td>Type</td>
    <td>Description</td>
  </tr>
  
   <tr>
    <td>direction</td>
    <td>horizontal / vertical</td>
    <td>Declare on which direction callbacks will be triggered.</td>
  </tr>
  
   <tr>
    <td>motionSensivity</td>
    <td>number</td>
    <td>How much pixels you need to swipe your finger to trigger callback. Default is 50.</td>
  </tr>
  
   <tr>
    <td>style</td>
    <td>object</td>
    <td>Add style to container</td>
  </tr>
  
   <tr>
    <td>onLeft</td>
    <td>function</td>
    <td>Callback function to trigger on swipe left.</td>
  </tr>
  
   <tr>
    <td>onRight</td>
    <td>function</td>
    <td>Callback function to trigger on swipe right.</td>
  </tr>
  
   <tr>
    <td>onUp</td>
    <td>function</td>
    <td>Callback function to trigger on swipe up.</td>
  </tr>
  
   <tr>
    <td>onDown</td>
    <td>function</td>
    <td>Callback function to trigger on swipe down.</td>
  </tr>
</table>

<h3>Example</h3>
  
 ```JSX
  import { useEffect, useState } from 'react';
  import FingerSwipe from 'finger-swipe-js';
  
  const App = () => {
      return (
        <FingerSwipe
          direction='horizontal'
          style={{width: '100%'}}
          onLeft={() => {
            console.log('deleted!');
          }}
        >
          <div className='demo-container-delete'>
            Swipe left to delete me!
          </div>
        </FingerSwipe>
      )
  }
  
  export default App;
  ```

<h2>Done!!</h2>
