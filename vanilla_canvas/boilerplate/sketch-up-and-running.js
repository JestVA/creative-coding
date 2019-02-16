// #### BOILERPLATE  extends  CANVAS  #####

// Let's use a function to set the 2d Context. Which has access to a Canvas HTML5 element coming neatly as a function parameter. 

const cx =  $c  =>  $c.getContext("2d")
const $c = document.querySelector("canvas");

// We don't use jquery but use $ to indicate selector of view type
// Variables that influence the view type are also easy to identify:

let $c_width, // multi line assignment (not recommended but looks cool)
    $c_height
    
    ({ $c_width, $c_height } = { $c_width: 500, $c_height: 500 })

/*    
Note how we store data in objects and 
use destructuring to set implicit values.

wrapping in round "( )", otherwise Invalid syntax as Js interprets as code block
*/

// And finally, in an imperative style, we make the pixel a reality.
$c.setAttribute('width', $c_width);
$c.setAttribute('height', $c_height);

