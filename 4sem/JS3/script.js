// IntersectionObserver(callback, options);

// const options = {
//     root: null,
//     rootMargin: '10px 20px 30px 40px',
//     threshold: 0.1,
// }

// const onEntry = (entries, observer) => {
//     ///
// }

// const observer = new IntersectionObserver(onEntry, options)



document.addEventListener('DOMContentLoaded', () => {
    const fruits = document.querySelectorAll('.fruits-list li');

    const observer = new IntersectionObserver((entries) => 
        entries.forEach((entry) => {
            const img = entry.target.querySelector('img');
            const title = entry.target.querySelector('h3');

            if (entry.isIntersecting) {
                img.src = img.getAttribute("data-high-res");
                entry.target.classList.add('visible');
            } else {
                img.src = img.src.replace('-high', '-low');
                entry.target.classList.remove('visible');
            }
        }))
    fruits.forEach((fruit) => observer.observe(fruit));
})