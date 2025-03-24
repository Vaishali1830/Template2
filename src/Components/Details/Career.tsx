import { useState } from "react";

const jobListings = [
  { id: 1, title: "Math Teacher", location: "New York, NY", description: "Looking for an experienced Math teacher for high school level." },
  { id: 2, title: "Science Teacher", location: "Los Angeles, CA", description: "Seeking a passionate Science teacher for middle school students." },
  { id: 3, title: "School Counselor", location: "Chicago, IL", description: "Providing guidance and support to students' academic and emotional needs." },
];

export const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (id: number) => {
    setSelectedJob(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Join Our Team</h1>
        <p className="text-secondary mt-2">Explore exciting career opportunities at our school.</p>
      </div>

      {/* Job Listings */}
      <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
      <div className="space-y-4">
        {jobListings.map((job) => (
          <div key={job.id} className="p-4 border border-color rounded shadow">
            <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
            <p className="text-secondary mt-2">{job.location}</p>
            <p className="text-secondary mt-2 mb-3">{job.description}</p>
            <button
              className="btn-primary"
              onClick={() => handleApply(job.id)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Application Form */}
      {selectedJob !== null && (
        <div className="mt-8 p-6 border border-color rounded shadow">
          <h2 className="text-2xl font-semibold">Apply for {jobListings.find(job => job.id === selectedJob)?.title}</h2>
          <form onSubmit={handleSubmit}>
            <label className="block text-secondary mt-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4 mt-2"
              required
            />

            <label className="block text-secondary mt-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4 mt-2"
              required
            />

            <label className="block text-secondary mt-2">Resume (URL)</label>
            <input
              type="text"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4 mt-2"
              required
            />

            <button type="submit" className="btn-primary">
              Submit Application
            </button>
          </form>
          {submitted && <p className="text-green-500 mt-4">Your application has been submitted!</p>}
        </div>
      )}
    </div>
  );
};
