import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={`${styles.lander} p-8`}>
        <h1 className="text-center text-4xl mb-4">Welcome</h1>
      </div>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-center text-4xl mb-4">What do we do here?</h2>
          <p className="text-2xl mb-4">
            This is an educational resource for helping people seek out
            information they may need for learning. If you lack access to a
            curriculum, if your teacher's explanations are lost on you or you're
            ahead of the curve and want to know what is next, this app is for
            you.
          </p>
          <p className="text-2xl mb-4 border-b-2 pb-4">
            This site is meant to be a tool for people to use to find guidance
            in their studies. It is not a substitute for a course or a teacher,
            but rather supplemental resources that may shed light on a lesson or
            provide a direction for a student who lacking one. This site lacks
            the nuance of a human teacher with a planned curiculum that is
            backed by personal experience as well as the cusomization and
            personalization of various AI educational tools. This is a tool for
            users to take their education into their own hands and to help them
            seek out what they need. The initiative and discernment of the user
            of this site is paramount to their success in their studies.
          </p>
          <p className="text-2xl mb-4">
            The main benefit of this site is that it organizes K-12 education
            into two main organiazational structures: by grade level and by
            subject. Each of these ultimately leads to a course with units that
            are paired with FREE resources that go in depth on the subject
            matter.
          </p>
          <p className="text-2xl mb-4">
            These resources can range from webpages that use illustrations for
            younger minds to documentation that would fit in a college textbook.
            They might be videos on apps like YouTube, or they might be as
            little as a great image that explains a single concept well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
