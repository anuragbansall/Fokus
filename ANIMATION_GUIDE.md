# Framer Motion Animation Guide

This guide shows you how to use the animation components added to your Fokus website.

## Available Animation Components

### 1. PageTransition

Adds a smooth fade-in animation when navigating between pages.

```jsx
import PageTransition from "../components/PageTransition";

function MyPage() {
  return (
    <PageTransition>
      <div>Your page content</div>
    </PageTransition>
  );
}
```

### 2. FadeInWhenVisible

Animates elements when they come into the viewport.

```jsx
import FadeInWhenVisible from "../components/FadeInWhenVisible";

function MyComponent() {
  return (
    <FadeInWhenVisible delay={0.2}>
      <div>This will fade in when scrolled into view</div>
    </FadeInWhenVisible>
  );
}
```

### 3. HoverCard

Adds hover animations to card-like elements.

```jsx
import HoverCard from "../components/HoverCard";

function ProductCard() {
  return (
    <HoverCard className="bg-white p-4 rounded-lg shadow">
      <div>Card content that lifts on hover</div>
    </HoverCard>
  );
}
```

### 4. StaggerAnimation

Creates staggered animations for lists of items.

```jsx
import { StaggerContainer, StaggerItem } from "../components/StaggerAnimation";

function ProductList() {
  return (
    <StaggerContainer className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <StaggerItem key={product.id}>
          <div>Product item</div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
```

### 5. Enhanced Button

Buttons now have built-in hover and tap animations.

```jsx
import Button from "../components/Button";

function MyComponent() {
  return <Button onClick={handleClick}>Click me! (I have animations)</Button>;
}
```

## Animation Features Added

1. **Page Transitions**: Smooth fade-in when navigating between pages
2. **Scroll Animations**: Sections fade in as you scroll down
3. **Hover Effects**: Interactive elements respond to mouse hover
4. **Mobile Menu**: Smooth slide-in animation with staggered menu items
5. **Button Interactions**: Subtle scale effects on buttons
6. **Dropdown Menus**: Smooth appear/disappear animations

## Customization

You can customize animations by:

1. **Adjusting Delays**: Use the `delay` prop on `FadeInWhenVisible`
2. **Modifying Scale**: Use `hoverScale` prop on `HoverCard`
3. **Animation Config**: Edit `src/utils/animationConfig.js` for global settings

## Performance Notes

- Animations use `will-change` and GPU acceleration for smooth performance
- `once: true` prevents re-animations on scroll
- Minimal bundle size impact with tree-shaking

## Browser Support

Framer Motion works in all modern browsers and gracefully degrades in older ones.
