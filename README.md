# Frontend Mentor - Suite landing page

![Design preview for the Art Gallery coding challenge](images/preview.jpg)

Continuing to explore intrinsic design. I think this is a big improvement on my last attempt. Again I've pushed myself to avoid the use of media queries in favour of a more fluid approach. As with most things, there's a balance to be found here I think. I like the intrinsic design approach, and then using media queries to tweak details.

## Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

## Lessons learnt

- 💡 Focusing on intrinsic design forced me to improve my knowledge of modern CSS functions (`min`, `max`, `clamp`, and `flex` and `grid` etc.)
- 💡 CUBE CSS seems to play really nicely with this approach, I think as container queries come online this approach will become more practical

## Problems

I think the layout is mostly working OK but have two issues that have flummoxed me that I would welcome advice on:

- The `h1` should be white on the black background, and black otherwise. I have tried following some online tutorials using `mix-blend-mode` for this but cannot make it work.
- For some reason, `object-fit` and `object-postioning` don't seem to have any impact on the map image. This is only really obvious on large screens, but again, I am a bit unsure of what I am doing wrong here.

## Resources

- 🔗 A lot of the approach I've tried to apply here comes from the work Stephanie Eckles has been doing on [intrinsic design](https://moderncss.dev/contextual-spacing-for-intrinsic-web-design/).
- 🔗 I revisited [Every Layout](https://every-layout.dev) and used many of the approaches on the site for this challenge. They can sometimes appear quite complicated, but I really like the approach advocated. Highly recommended.

## Future learning

- 🙇‍♂️ I want to keep pushing on my learning an intrinsic design approach, but I'll allow myself more use of media queries so that the final product is more finished.