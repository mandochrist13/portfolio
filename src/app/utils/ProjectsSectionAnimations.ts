import { inView, animate } from "framer-motion";

const titleAnimation = () => {
  inView(".titleSection", (info: { target: unknown }) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.1 }
    );
  });
};

const videoAnimation = () => {
  inView(".videoSection", (info: { target: unknown }) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
      },
      { duration: 0.5, delay: 0.2 }
    );
  });
};

const descriptionAnimation = () => {
  inView(".descriptionCard", (info: { target: unknown }) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.4 }
    );
  });
};

const githubUrlAnimation = () => {
  inView(".githubUrlCard", (info: { target: unknown }) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.5 }
    );
  });
};

const websiteUrlAnimation = () => {
  inView(".websiteUrlCard", (info: { target: unknown }) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.6 }
    );
  });
};

const mobileAnimation = () => {
  inView(".mobile-animation", (info: { target: unknown }) => {
    animate(info.target, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
  });
};

const projectsAnimations = {
  titleAnimation,
  videoAnimation,
  descriptionAnimation,
  websiteUrlAnimation,
  githubUrlAnimation,
  mobileAnimation,
};

export default projectsAnimations;
