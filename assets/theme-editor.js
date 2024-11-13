document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function() {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});
   


// document.getElementById(`product-select-{{ section.id }}-{{ product.id }}`).addEventListener('change', function(event) {
//   const selectedVariantId = event.target.value;
//   updateInventoryNote(selectedVariantId);
//   });

//   function updateInventoryNote(variantId) {
//   const inventoryNote = document.querySelector('.inventoryNote');
  
//   if (variantStock[variantId] > 0) {
//       inventoryNote.textContent = `We have ${variantStock[variantId]} in stock`;
//   } else {
//       inventoryNote.textContent = 'Out of stock';
//   }
//   }