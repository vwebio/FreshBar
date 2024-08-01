export const showLoader = () => {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
      <div class="loader__inner">
        <div class="loader__circle"></div>
      </div>
    `;
    document.body.appendChild(loader);
  };
  
  export const hideLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.remove();
    }
  };
  