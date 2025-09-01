// src/utils/preloadableLazy.js
import React from "react";

export function preloadableLazy(factory) {
  const Component = React.lazy(factory);
  Component.preload = factory; // attach preload method for preloading
  return Component;
}
