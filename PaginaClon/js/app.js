document.addEventListener('DOMContentLoaded', function() {
  // Image modal handling
  const imageModal = document.getElementById('imageModal');
  if (imageModal) {
    imageModal.addEventListener('show.bs.modal', function(event) {
      const image = event.relatedTarget;
      const modalImage = document.getElementById('modal-image');
      if (modalImage) modalImage.src = image.src;
    });
  }

  // Post actions (like, comment, share)
  const postActions = document.querySelectorAll('.post-action');
  postActions.forEach(action => {
    action.addEventListener('click', function() {
      if (this.innerHTML.includes('Like')) {
        this.classList.toggle('active');
        
        const icon = this.querySelector('i');
        if (this.classList.contains('active')) {
          icon.classList.remove('bi-hand-thumbs-up');
          icon.classList.add('bi-hand-thumbs-up-fill');
        } else {
          icon.classList.remove('bi-hand-thumbs-up-fill');
          icon.classList.add('bi-hand-thumbs-up');
        }
      }
    });
  });

  // Simulate loading feed with delay
  function simulateFeedLoading() {
    const feedLoader = document.getElementById('feed-loader');
    const postFeed = document.getElementById('post-feed');
    
    if (feedLoader && postFeed) {
      setTimeout(() => {
        feedLoader.classList.add('d-none');
        postFeed.classList.remove('d-none');
        setupInfiniteScroll();
      }, 1500);
    }
  }

  // Infinite scroll simulation
  function setupInfiniteScroll() {
    const loadMoreSpinner = document.getElementById('load-more-spinner');
    if (!loadMoreSpinner) return;
    
    loadMoreSpinner.style.display = 'none';
    
    window.addEventListener('scroll', function() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        if (loadMoreSpinner.style.display === 'none') {
          loadMoreSpinner.style.display = 'block';
          setTimeout(() => {
            loadMoreSpinner.style.display = 'none';
          }, 1500);
        }
      }
    });
  }

  // Initialize
  simulateFeedLoading();
});