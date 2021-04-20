const PHOTO_SELECTOR = ".image-carousel__photo";
const NEXT_SELECTOR = ".image-carousel__button--next";
const PREV_SELECTOR = ".image-carousel__button--prev";

const Carousel = () => {
    let imageNodes = [];
    let currentImageIndex = 0;
    const setNextAndPrevious = () => {
        imageNodes[currentImageIndex].classList.add("active");
        imageNodes[currentImageIndex + 1].classList.add("next");
        imageNodes[imageNodes.length - 1].classList.add("prev");
    };

    const moveTo = (imageIndex) => {
        console.log({ imageIndex });
        const removedActive = imageNodes.item(currentImageIndex);
        removedActive.classList.remove("active");

        currentImageIndex = imageIndex;

        const current = imageNodes.item(imageIndex);

        let nextImageIndex = imageIndex + 1;
        if (nextImageIndex === imageNodes.length) {
            nextImageIndex = 0;
        }

        let prevImageIndex = imageIndex - 1;
        if (prevImageIndex === -1) {
            prevImageIndex = imageNodes.length - 1;
        }

        document.querySelector(".prev").classList.remove("prev");
        document.querySelector(".next").classList.remove("next");

        current.classList.add("active");

        const next = imageNodes.item(nextImageIndex);
        const prev = imageNodes.item(prevImageIndex);

        next.classList.add("next");
        prev.classList.add("prev");
    };

    const handlePrevClick = () => {
        let slideTo = currentImageIndex - 1;
        if (slideTo === -1) {
            slideTo = imageNodes.length - 1;
        }

        moveTo(slideTo);
    };

    const handleNextClick = () => {
        let slideTo = currentImageIndex + 1;
        if (slideTo === imageNodes.length) {
            slideTo = 0;
        }

        moveTo(slideTo);
    };

    const bindEvents = () => {
        const nextButtonNode = document.querySelector(NEXT_SELECTOR);
        const prevButtonNode = document.querySelector(PREV_SELECTOR);

        nextButtonNode.addEventListener("click", handleNextClick);
        prevButtonNode.addEventListener("click", handlePrevClick);
    };

    const init = () => {
        imageNodes = document.querySelectorAll(PHOTO_SELECTOR);
        console.log({ imageNodes });

        setNextAndPrevious();
        bindEvents();
    };

    return {
        init,
    };
};

const carousel = Carousel();
carousel.init();
