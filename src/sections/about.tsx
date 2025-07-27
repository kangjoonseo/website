import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              I'm a recently graduated Computational Mathematics student from the University of Waterloo
              with a minor in Computer Science. I'm an aspiring <b>Full Stack/Data Engineer</b> actively looking
              for my next opportunity.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              I have internship and project experience in both Full Stack development and Data Engineering.
              During my time in school, I've built a strong proficiency in Python, C++, SQL, JavaScript, and React. 
              I love learning new technologies, and I hope to grow and use my skills to make a difference in people's lives.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              Outside of programming, I am also an avid photographer. The world is vast and beautiful,
              and I want to be able to remember moments in my life just as I saw them. I hope that my work can inspire
              people to venture out and explore what the world has in store for them. 
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/image.jpg"
              alt="image"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/image.jpg"
            alt="image"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
