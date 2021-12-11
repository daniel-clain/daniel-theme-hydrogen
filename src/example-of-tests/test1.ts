Feature : Slider

* Description
* key ideas
 - the idea of a web component is to give the developer the best ux for implementing any kind of style of that component
  ~ it should give them complete freedom, and only provide them ways of implementing common features and quickly and easily as possible
  ~ the most common type of this component should be the quickest and easiest to make, prime features should be based on how common the scenario is
 - the component should not try to do too much, the component shouldnt get it the owners way
 - the end to end test should only be for the purpose of making component library docs
 - when you make the component and the test, then the component is automatically created. can also have anutomation for 
 - the default component should be the most common scenario, and then there should be sub component presets as children of the default component. sub components should be a combination of (other common scenarios for the component | scenarios that demonstrate desirable features)
 - dev requirements should be offered, and easy to understand, components should have info that is faqs

* What does it need to do?
  - slide left or right up or down
    ~ when you swipe or drag (up | down | left | right)
  - slide 
  - shows a small percentage of (next | previous) slide based on percentage of (slide | slider)
* what does it need to have
  - progress bar
  - thumbnails for each slide
    ~ handle extreme cases of (no slide | 1 slide | too many slides)
    ~ handle lazy loading, img optimisation
    ~ handle them all fitting nicely in the dom when many items and narrow width
  - accessibility
    ~ aria
    ~ tab index, focus state
    ~ title and alt attributes
  - easily switches between slider and 
  - analytics friendly and seo friendly (is it easy to derive key info about. can bots read content in slides)
  - server side rendering
  - entry in components library
   ~ shows all the possible states it can be in
   ~ shows video of all main capabilities it claims to have
  - it needs classes for what different states it can be in
   ~ (is-active | is-selected | has-video | has-image | is-next | is-right | is-left | is-visible | is-partially-visible | is-fully-visible | is-animating | is-disabled | has-link | is-first | is-last | does-not-have-enough-slides)
  - auto slide speed
  - slide direction
  - it should have a list of animations
  - next and previous arrows
    ~ easy to position anywhere


  
