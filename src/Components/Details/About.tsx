import { useState } from "react";
import { motion } from "framer-motion";
import school from '../../assets/school.jpg'

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">About Our School</h1>
        <p className="text-secondary mt-2">A place of learning, growth, and excellence.</p>
      </motion.div>

      <div className="flex justify-center items-center">
      <img src={school} alt="image" className="h-[60vh] w-[60vw]  rounded-lg" />
      </div>

      {/* Tabs Section */}
      <div className="m-6 flex justify-center space-x-4">
        <button
          className={`${activeTab === "mission" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setActiveTab("mission")}
        >
          Our Mission
        </button>
        <button
          className={`${activeTab === "vision" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setActiveTab("vision")}
        >
          Our Vision
        </button>
        <button
          className={`${activeTab === "history" ? "btn-primary" : "btn-secondary"}`}
          onClick={() => setActiveTab("history")}
        >
          Our History
        </button>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {activeTab === "mission" && (
          <p className="text-secondary text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ullam quisquam illum unde voluptas corporis obcaecati, minus quaerat! Voluptate natus, incidunt deleniti mollitia fugiat repellendus repudiandae nostrum ex id officiis vitae quibusdam iste obcaecati numquam enim architecto voluptatem neque saepe!</p>
        )}
        {activeTab === "vision" && (
          <p className="text-secondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo similique, dicta architecto fugiat voluptate possimus distinctio autem quos optio tenetur, nobis quam. Libero vero distinctio quibusdam deserunt iure saepe, est in at ea harum veritatis.</p>
        )}
        {activeTab === "history" && (
          <p className="text-secondary text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde porro necessitatibus tempora laudantium culpa corrupti. Nam quidem aperiam est aspernatur accusamus eveniet iste velit quod aliquid. Optio laudantium neque nihil iusto impedit, quae libero architecto dolores nemo. Harum autem eius at optio, asperiores officia ex aut sed hic, dolore consequuntur.</p>
        )}
      </motion.div>

      {/* FAQ Section */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="p-4 border rounded">
          <summary className="cursor-pointer font-semibold">What grades do you offer?</summary>
          <p className="mt-2 text-secondary">We offer classes from kindergarten to 12th grade.</p>
        </details>
        <details className="p-4 border rounded">
          <summary className="cursor-pointer font-semibold">What extracurricular activities are available?</summary>
          <p className="mt-2 text-secondary">We have a range of activities including sports, music, drama, and coding clubs.</p>
        </details>
        <details className="p-4 border rounded">
          <summary className="cursor-pointer font-semibold">How can I apply for admission?</summary>
          <p className="mt-2 text-secondary">You can apply online through our website or visit our admissions office.</p>
        </details>
      </div>
    </div>
  );
};
