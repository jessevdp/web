# Images
Images can simply be inserted into the main container (inline) for a full width effect.

![image](https://source.unsplash.com/9IBqihqhuHc/500x300)

As an alternative images can also be put inside of a `.image-container`. This will cause the images to be aligned in a grid on bigger screen sizes.

On smaller screen sizes the images will appear as if inline.

When using this `.image-container` you should be mindful of the sizes of the images you select. Selecting varying sizes can cause a weirdly aligned layout.

Note that in browsers that **don't support `CSS grid`** the images will appear as if inline.

<div class="image-container">
  <img src="https://source.unsplash.com/Pqh8WGC_i9k/500x300" alt="img">
  <img src="https://source.unsplash.com/Zrzf2XMx6tg/500x300" alt="img">
  <img src="https://source.unsplash.com/t1Sp-gwFAPg/500x300" alt="img">
</div>
