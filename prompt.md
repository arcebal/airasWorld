# Aira's Little Birthday World — Master Project Prompt

## Project Vision

Create a delightful, interactive, pink-themed birthday website dedicated to Aira. The experience should feel like a tiny playable 3D birthday world—not a conventional landing page. Its emotional center is Aira's portrait, surrounded by a whimsical floating island, cute miniature NPCs that continually deliver greetings, little discoveries, memories, and a celebratory finale.

Build an immersive, polished, responsive experience with thoughtful pacing, soft animation, warmth, and charm. Avoid a cluttered interface or a generic template look.

## Creative Direction

- **Theme:** dreamy pastel pink, magical, cozy, whimsical, celebratory.
- **Visual style:** toy-like / soft low-poly miniature diorama, rounded shapes, gentle lighting, charming details.
- **Palette:**
  - Cotton candy: `#FFE4EF` (backgrounds)
  - Baby pink: `#F8BBD8` (UI and decorative elements)
  - Rose pink: `#EFA7CA` (accents)
  - Cream: `#FFF8F0` (clouds, cards, warm highlights)
  - Lavender: `#D9C2F0` (magical accents)
  - Complementary soft greens for island foliage.
- **Typography:** rounded, friendly fonts such as Fredoka, Nunito, or Quicksand. Use accessible sizing and hierarchy.
- **Motion:** smooth, gentle, whimsical—not chaotic. Avoid excessive motion and provide reduced-motion support.
- **Interface:** rounded panels, subtle glass effects where appropriate, soft shadows, delicate borders, floating UI accents.
- **Mood:** personal, joyful, sweet, imaginative, and sincere.

## Preferred Technology

Adapt to the existing project before changing its structure or dependencies.

If the project uses React:
- React
- Three.js
- React Three Fiber
- Drei
- GSAP, where it adds value
- Vite, if already used or appropriate
- CSS for interface and responsive layout

Use modular components and maintain a clear separation between the 3D scene, UI, content, animations, and interaction state. Avoid adding dependencies unnecessarily. Use original Three.js primitive-based characters and assets as an initial option so the project can run without relying on unavailable external models.

## Core Experience

### 1. Opening / Welcome Screen

Start with a cinematic but lightweight welcome screen:
- A dreamy pink background with floating clouds, hearts, stars, sparkles, and petals.
- Aira's name introduced with a gentle animation.
- A clear, inviting interaction such as **"Enter Aira's World ♡"**.
- A short introductory message, for example:

  > A little world was made just for you...
  >
  > Because today, someone very special deserves all the happiness in the universe.

- Transition into the main scene when the user enters.
- Start audio only after an explicit user interaction, respecting browser autoplay restrictions.

### 2. Main Three.js Birthday World

Create a floating island or miniature magical garden as the centerpiece:
- A floating island with grass, flowers, small decorative objects, and soft terrain.
- Floating clouds and subtle environmental elements.
- A little house or miniature building, where feasible.
- Stars, sparkles, petals, and drifting particles.
- A birthday cake as a prominent interactive object.
- A portrait display in the center of the island, or in a visually central composition.

Scene requirements:
- Smooth camera movement and a gentle perspective.
- Optional restrained orbit controls, without making the experience difficult to navigate.
- Thoughtful lighting, shadows, depth, and composition.
- Idle animation throughout the scene.
- Responsive framing for mobile, tablet, and desktop.
- Efficient rendering and animation loops.

### 3. Aira's Portrait — Central Feature

Use the actual portrait provided by the project owner when available. Until then, implement a clearly documented replaceable portrait placeholder.

Portrait presentation:
- Make the portrait visually central and prominent.
- Use a circular, heart-shaped, or other charming frame.
- Surround it with flowers, hearts, sparkles, or a gentle glow.
- Animate decorations subtly.
- Keep the photo crisp and appropriately cropped.
- Make replacing the placeholder with the actual image simple, with instructions and a predictable asset location.

Do not invent or use a random real person's portrait as Aira's photo.

### 4. Tiny NPC Greeting System — Signature Feature

Create multiple cute miniature characters that inhabit the island. They should be charming and expressive, and should continually deliver randomized birthday greetings.

Possible NPC personalities:
- **Bunny:** energetic and enthusiastic.
- **Bear:** comforting, sweet, and hug-themed.
- **Kitty:** playful and mischievous.
- **Fairy:** magical, dreamy, and wish-themed.

NPC appearance:
- Soft toy-like, chibi, low-poly, or stylized primitive-based models.
- Use original models made from Three.js shapes initially if custom assets are not available.
- Give each character a distinguishable silhouette, color, and personality.
- Optional accessories such as balloons, tiny gifts, hats, or signs.

NPC behavior:
- Wander around using safe, bounded paths or waypoints.
- Stop occasionally, wave, idle, dance, jump, or turn.
- Avoid walking through the portrait, cake, other objects, or island boundaries.
- Use varied but smooth movement.
- Have idle states and transition between actions.
- React when clicked or tapped.
- Occasionally approach a greeting point or deliver a message.
- Display speech bubbles or small message cards.
- Randomize greetings with sensible timing and prevent messages from overlapping excessively.
- Avoid flickering, overly frequent messages, or repetitive greeting spam.
- Allow the user to interact with individual NPCs.

Example greeting pool (expand it and keep messages configurable):
- "HAPPY BIRTHDAY, AIRA!!"
- "I brought you a virtual hug!"
- "You're today's main character!"
- "May all your wishes come true!"
- "You deserve all the happiness!"
- "Sending you the biggest little birthday hug!"
- "Today is your day—shine brightly!"
- "I hope this year brings you magical surprises!"
- "Don't forget how special you are!"
- "A little friend is cheering for you!"

Build a configurable greeting data structure so messages and characters can be edited without rewriting the scene.

### 5. Birthday Letter — Interactive Envelope

Include a floating or prominently displayed envelope:
- Soft pink envelope with a heart seal.
- Hover/tap animation.
- On click, open the envelope with a tasteful animation.
- Reveal a sincere, customizable birthday letter.
- Use readable typography and a warm, intimate presentation.
- The letter content should be easy to edit.
- Avoid making the message overly generic; provide an editable placeholder that the owner can personalize.

### 6. Mystery Gift

Add a clickable gift box:
- Pink box and ribbon.
- Gentle bounce or idle animation.
- Click/tap opens the box.
- Reveal a surprise: message, memory, photo, or other content.
- Animate the opening with sparkles or particles.
- Make the surprise content configurable.

### 7. Make a Wish

Create a wish interaction:
- A dedicated button, star, or object.
- When activated, show a gentle wish-making moment.
- Animate a shooting star across the scene.
- Show an encouraging message.
- Optionally allow a wish to be typed locally and displayed in a whimsical manner; avoid requiring storage or sending it anywhere.
- Keep the interaction optional and delightful.

### 8. Memory Garden / Photo Scrapbook

Create a memory area with editable photos and captions:
- Polaroid-inspired frames.
- Gentle floating or arranged scrapbook layout.
- A configurable collection of image assets and captions.
- Clicking a memory may enlarge it or reveal its caption.
- Use placeholders until actual photos are provided.
- Make adding or replacing photos easy and document the location and content format.

### 9. Birthday Cake and Grand Finale

The birthday cake should serve as the finale of the experience.

Possible finale sequence:
1. User clicks the birthday cake.
2. NPCs pause their activities or gather near a celebration area.
3. Camera gently focuses on the cake.
4. Candles glow and animate.
5. A **"Make your wish ♡"** interaction appears.
6. When activated, candles extinguish or change state.
7. Confetti, hearts, sparkles, and celebratory particles burst out.
8. NPCs jump, wave, dance, and celebrate.
9. A final birthday message appears.

Suggested finale message (editable):

> Happy Birthday, Aira! ♡
>
> I hope this new chapter of your life brings you moments you never have to pretend to be happy in, people who genuinely care about you, dreams that slowly become reality, and little reasons to smile every single day.
>
> You deserve a world as beautiful as this little one.

Make the sequence polished, emotionally meaningful, and not too long. Ensure the finale can be replayed or reset.

## Website Structure / Navigation

Use a coherent layout that may include these areas:
- **Home / Birthday World:** primary 3D scene and portrait.
- **NPC Greetings:** characters and their greeting interactions (integrated into the main scene where appropriate).
- **Birthday Letter:** envelope and personal letter.
- **Memory Garden:** photo scrapbook and captions.
- **Make a Wish:** wish interaction and shooting star.
- **Birthday Cake:** celebration finale.

These areas do not necessarily need to be separate traditional pages. Prefer an integrated experience with clear navigation and smooth transitions. Keep the 3D world as the main focus.

## Interface and Interaction Details

- A clean, unobtrusive interface that complements the 3D scene.
- Responsive layout and usable controls on desktop and mobile.
- Clear interaction hints, especially for first-time visitors.
- Buttons and interactive objects should have hover, focus, and pressed states.
- Include keyboard accessibility for UI controls and interactive objects where practical.
- Use appropriate contrast and legible text.
- Provide a mute/unmute control if audio is included.
- Audio should be optional and user-controlled.
- Avoid unnecessary sound effects and overwhelming audio.
- Respect `prefers-reduced-motion`.
- Provide loading or asset fallback states if needed.
- Use graceful fallback behavior when WebGL is unavailable.

## Sound and Atmosphere

Optional:
- Soft instrumental background music, enabled only after interaction.
- Gentle interaction sounds, such as a gift opening, sparkle, or click.
- A subtle birthday celebration sound.

Keep audio optional, add mute controls, and avoid copyrighted tracks unless properly supplied or licensed. No autoplay audio before consent/interactions.

## Technical Quality

- Inspect the existing project before making changes.
- Preserve existing work.
- Choose architecture based on the current framework and dependencies.
- Build modular components and reusable systems.
- Keep 3D logic separate from birthday UI and content data.
- Keep NPC behavior configurable and maintainable.
- Optimize the scene for common desktop and mobile devices.
- Avoid unnecessarily heavy models, textures, or dependencies.
- Handle loading errors and asset fallbacks.
- Use stable animation loops and clean up listeners and resources.
- Avoid memory leaks.
- Ensure responsive sizing and camera behavior.
- Test interactions and basic navigation.
- Check console errors where tooling allows.
- Ensure the project builds and runs.

## Suggested Modular Structure

Adapt to the existing repository; this is a suggested organization, not a rigid requirement:

- `src/`
  - `components/`
    - `BirthdayUI`
    - `GreetingBubble`
    - `LetterModal`
    - `GiftInteraction`
    - `MemoryGallery`
    - `WishInteraction`
    - `CakeCelebration`
  - `scene/`
    - `BirthdayScene`
    - `FloatingIsland`
    - `PortraitDisplay`
    - `Clouds`
    - `Flowers`
    - `Particles`
    - `Cake`
  - `npcs/`
    - `NPCManager`
    - `NPCCharacter`
    - `NPCBehavior`
    - `NPCGreetingData`
    - character components
  - `data/`
    - greetings
    - letter content
    - memories
    - configuration
  - `assets/`
    - portrait
    - memory photos
    - audio
    - custom models, if any
  - `styles/`
    - theme
    - layout
    - responsive styles

## Development Phases

Work incrementally. Each phase should be tested and stable before moving on.

### Phase 1 — Inspect and establish
- Inspect project structure, framework, dependencies, and existing work.
- Preserve existing files and implementation.
- Establish the architecture.
- Implement the initial landing UI and a working 3D scene.
- Create a floating island, decorative elements, portrait placeholder, cake, and basic NPC placeholders.
- Ensure the project starts and runs.

### Phase 2 — Floating Island
- Refine the island and miniature environment.
- Add terrain, foliage, flowers, clouds, lights, stars, and particles.
- Improve camera, scene composition, and idle animations.
- Optimize for different screen sizes.

### Phase 3 — NPCs and Greetings
- Create distinct characters and animations.
- Implement wandering, idling, waving, dancing, jumping, interaction, and greeting speech bubbles.
- Implement randomized greeting pools and message timing.
- Test interactions and prevent behavior conflicts.

### Phase 4 — Portrait and UI Polish
- Replace placeholder styling as needed.
- Add the real portrait when supplied.
- Create the portrait frame and visual effects.
- Polish interface, typography, transitions, and navigation.

### Phase 5 — Letters, Gifts, Wishes, Memories
- Implement the interactive envelope and letter.
- Implement gift opening and surprise content.
- Implement wish-making and shooting star.
- Implement memory garden and photo gallery.
- Make content easy to customize.

### Phase 6 — Cake Celebration
- Implement cake interaction and candle states.
- Implement the finale animation.
- Coordinate NPC celebration.
- Add confetti and particles.
- Add final message and replay/reset behavior.

### Phase 7 — Sound, Responsive Design, and Optimization
- Add optional audio and mute control.
- Ensure desktop, tablet, and mobile layouts.
- Add accessibility, reduced-motion, keyboard interactions, and fallbacks.
- Optimize performance and resource cleanup.
- Test the build and major interactions.

## Content Customization

Centralize editable content:
- Aira's name.
- Welcome text.
- Birthday letter.
- NPC greetings.
- Memory photos and captions.
- Gift surprise.
- Wish messages.
- Finale message.

Document how to replace the portrait, add photos, change greetings, customize the letter, and update audio assets.

## Acceptance Criteria

The finished website should:
- Feel like a personal, magical birthday experience rather than a template.
- Have a visually cohesive pink pastel world.
- Feature Aira's portrait as a central focal point.
- Include a functioning Three.js environment.
- Include multiple animated NPCs with randomized greetings.
- Allow visitors to interact with NPCs.
- Include an interactive letter, gift, wish, and memory experience.
- Have an interactive birthday cake and celebration finale.
- Be responsive, accessible, and performant.
- Have optional user-controlled sound.
- Be maintainable, modular, and easy to customize.
- Run without errors in the project's supported environment.

## Instructions for the Implementing Agent

Do not merely describe what should be built. Inspect the project and implement the requested phases in the existing codebase. Make reasonable design and technical decisions without repeatedly asking for approval. Do not remove or overwrite existing work without inspecting and understanding it. If an asset is missing, use an elegant placeholder and clearly document how to replace it.

Prioritize the signature experience—the tiny NPCs continually greeting Aira, her portrait at the heart of the world, and the magical birthday finale. Build the project incrementally, test what you can, and report clearly what has been completed, what remains, and how to run the project.
